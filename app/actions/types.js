export const SIGNED_SUCCESSS = 'SIGNED_SUCCESSS';
export const SIGNED_OUT = 'SIGNED_OUT';
export const SIGNED_FAIL = 'SIGNED_FAIL';
export const REGISTRATION_SUCCESSS = 'REGISTRATION_SUCCESSS';
export const REGISTRATION_FAIL = 'REGISTRATION_FAIL'
export const INCREMENT = 'INCREMENT';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';


export const HOMEPAGE_LOADED = 'HOMEPAGE_LOADED';
export const DSR_PAGE_UPDATED = 'DSR_PAGE_UPDATED';
export const DSR_PAGE_LOADED = 'DSR_PAGE_LOADED';
export const RECOGNITION_PAGE_LOADED = 'RECOGNITION_PAGE_LOADED';
export const ABOUT_PAGE_LOADED = 'ABOUT_PAGE_LOADED';

export const REQ_DATA = 'REQ_DATA'
export const RECV_ERROR = 'RECV_ERROR'

const baseUrl = 'http://10.247.162.86:8080/spring/rest/emp/'
export const RegForm_Url = baseUrl + 'create'
export const Employee_Url = baseUrl + 'emp/4444'
export const Login_Url = baseUrl + 'auth'
export const Dsr_Url = baseUrl + 'timesheet'
export const DsrPast_Url = baseUrl + 'timesheet'
 export const Registration_Url = baseUrl + 'getportfolio'
 export const FetchPortfolio_Url = baseUrl + 'getApps'
export const Photo_Url = '../fixtures/posts.json' //baseUrl+'emp/photo'
export const myPage_Url = '../fixtures/myPage.json'
export const Navriti_Submit_Url = baseUrl + 'saveidea'