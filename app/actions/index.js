import fetch from 'isomorphic-fetch';
import * as T from './types'
import Api from './Api'
import axios from 'axios';
import { push } from 'react-router-redux';
import { browserHistory } from 'react-router';

export function increment(i) {
  return {
    type: T.INCREMENT, i
  }
}

export function apiFetch(apiurl, val, method, Page) {
  return function (dispatch) {
    return axios({
      url: apiurl,
      timeout: 20000,
      method: method,
      responseType: val,
      data: val,
      dataType: "json",
      mode: 'no-cors'

    })
      .then(cats => {
        console.log("CATS ", cats, Page);
        if (Page == 'photo') {
          dispatch(loadPosts(cats.data)).catch(error => {
            dispatch(loadFail(error));
          })
        }
        else if (Page == 'login') {
          dispatch(loadSuccess(cats.data))
        }
        else if (Page == 'registration') {
          dispatch(loadRegistration(cats.data))
        }
        else if (Page == 'dsrPast') {
          dispatch(loadDsr(cats.data))
        }
        else if (Page == 'dsrFormSubmitted') {
          dispatch(loadDsrSubmitted(cats.data))
        }

      }).catch(error => {
        dispatch(loadFail(error));
      })
  }
}
export function loadRegistration(cats) {
  if (cats.errorMsg == null) {
    alert("Registered successfully. Sign In")
    browserHistory.push('/Login');
    return { type: T.REGISTRATION_SUCCESSS, payload: cats };
  } else {
    return { type: T.REGISTRATION_FAIL, payload: cats };
  }
}
export function loadPosts(cats) {
  return { type: T.RECEIVE_POSTS, payload: cats };
}

export function loadFail(cats) {
  cats.response = cats.message;
  return { type: T.SIGNED_FAIL, payload: cats };
}
export function loadDsr(cats) {
  return { type: T.DSR_PAGE_LOADED, payload: cats };
}
export function loadSuccess(cats) {
  if (cats.login == false) {
    alert("Login failed. Try again later")
    return { type: T.SIGNED_FAIL, payload: cats };
  }
  else if (cats.login == true) {
    browserHistory.push('/Spotlight');
    return { type: T.SIGNED_SUCCESSS, payload: cats };
  } else {
    return { type: T.SIGNED_FAIL, payload: cats };
  }
}

export function selecSer() {
  return function (dispatch) {
    return Api.getAllCats().then(cats => {
      console.log(cats);
      dispatch(loadCatsSuccess(cats));
    }).catch(error => {
      throw (error);
    });
  };
}