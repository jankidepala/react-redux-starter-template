import axios from 'axios';

const Api = {  
  getAllCats() {
    return fetch('./fixtures/dummydata.json').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

}

export default Api;  