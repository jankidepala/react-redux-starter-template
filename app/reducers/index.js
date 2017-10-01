import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../actions/types';
import { reducer as formRedcer } from 'redux-form'

const initialState =
    {
        "sapId": "4444",
        "empName": "ABC",
        "empId": 127,
        "projectName": "prakash",
        "technologys": ['Java', 'Front End'],
        "dateOfbirth": null,
        "mobile": null,
        "accentureEmail": "prakash@gmail.com",
        "personalEmail": "prakash@gmail.com",
        "sex": null,
        "hobbies": [],
        "username": null,
        "pwd": null,
        "aboutMe": 'I am 24 years enthsiast Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere.',
        "login": false,
        "imgSrc": null,
        "fetchImage": null,
        "dpid": null,
        "loading": false,
        "errorMsg": ""
    }
const shoState = {
    aa: [1, 2, 3],
    bbb: { aa: "ss" }
}
const initialPost = [{
    "code": "BAcyDyQwcXX",
    "caption": "Lunch #hamont",
    "likes": 56,
    "id": "1161022966406956503",
    "display_src": "aaa.jpg"

}]
const initialDsr = [{
    "code": "BAcyDyQwcXX",
    "caption": "Lunch #hamont",
    "likes": 56,
    "id": "1161022966406956503",
    "display_src": "aaa.jpg"
}]
const UserLogin = (state = initialState, action) => {
    console.log("SIGN ACTIONS ", action)

    switch (action.type) {
        case types.REGISTRATION_SUCCESSS:
            return action.payload
        case types.REGISTRATION_FAIL:
            return action.payload
        case types.SIGNED_SUCCESSS:
            return action.payload
        case types.SIGNED_FAIL:
            return action.payload
        default:
            return state;
    }
};

// UserLogin, RegPage, Spotlight, Photo
//HOMEPAGE_LOADED, REGISTRATION, 
const PageLoadedData = (state = initialState, action) => {
    console.log("ACTIONSas ", action)
    switch (action.type) {
        case types.HOMEPAGE_LOADED:
            return action.payload
        default:
            return state;
    }
};
const DsrData = (state = initialDsr, action) => {
    switch (action.type) {
        case types.DSR_PAGE_LOADED:
            return action.payload
        default:
            return state;
    }
};
const RegForm = (state = initialDsr, action) => {
    switch (action.type) {
        case types.DSR_PAGE_LOADED:
            return action.payload
        default:
            return state;
    }
};
const posts = (state = initialPost, action) => {
    console.log("POSTS:: ", action)
    switch (action.type) {
        case types.RECEIVE_POSTS:
            return action.payload
        case types.INCREMENT:
            const i = action.login;
            return [
                ...state.slice(0, i),
                { ...state, login: state.login },
                ...state.slice(i)
            ]
        default:
            return state;
    }
};
const rootReducer = combineReducers({
    UserLogin,
    PageLoadedData,
    DsrData,
    posts: posts,
    form: formRedcer,
    RegForm,
    routing
});

export default rootReducer;
