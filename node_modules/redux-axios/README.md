# redux-axios

Axios wrapper for Redux

## Installation

```bash
npm i -S redux-axios
```

## How to use?

### Use middleware

By default you only need to import middleware from package and add it to redux middlewares
and execute it with first aargument being with axios instance. second optional argument are middleware
options for customizing

```js
import {createStore, applyMiddleware} from 'redux';
import axiosMiddleware from 'redux-axios';
import clients from 'clients';

let store = createStore(
  reducers, //custom reducers
  applyMiddleware(
    //all middlewares
    ...
    axiosMiddleware(clients),
    ...
  )
)
```
You'll need a clients list, for example `clients/index.js`
```js
import backend from 'clients/backend';
import google from 'clients/google';
import github from 'clients/github';

const clients = {
  default: backend,
  google,
  github
};

export default clients;
```
And your default client file `clients/backend.js` would been look like this:
```js
/**
 * Client Configuration
 * @param axios   This parameter can be referenced to https://github.com/mzabriskie/axios#axioscreateconfig
 * @param options This parameter can optionally contain onSuccess, onError, onComplete, successSuffix, errorSuffix
 */
const backend = {
  axios: {
    baseURL: 'http://localhost:8080',
    responseType: 'json',
  },
  //opt
  options: {
    interceptors: {
      request: [
        (getState, config) => {
          if (getState().user.token) {
            config.headers['Authorization'] = 'Bearer ' + getState().user.token
          }

          return config
        }
      ],
      response: [
        (getState, response) => {
          ...

          return response
        }
      ]
    }
  }
};

export default backend;
```

### Dispatch action

Every action which have `payload.request` defined will be handled by middleware. There are two possible type
definitions.

- use `action.type` with string name
action with type will be dispatched on start, and then followed by type suffixed with underscore and
success suffix on success, or error suffix on error

defaults: success suffix = "_SUCCESS" error suffix = "_FAIL"

```javascript
export function loadCategories() {
  return {
    type: 'LOAD',
    payload: {
      client: 'google', // this will fail back to default (unset this key or can't find that file)
      request:{
        url:'/categories'
      }
    }
  }
}
```

- use `action.types` with array of types `[REQUEST,SUCCESS,FAILURE]`
`REQUEST` will be dispatched on start, then `SUCCESS` or `FAILURE` after request result

```javascript
export function loadCategories() {
  return {
    types: ['LOAD','AWESOME','OH_NO'],
    payload: {
      request:{
        url:'/categories'
      }
    }
  }
}
```

Actions that are handled by this middleware return a promise.  This gives you the ability to chain actions.  A good example of this might be a form.  In the form you might dispatch an actions to store the form values.  The normal flow of the action into the reducers would not be altered but you can chain a then/catch onto the initial dispatch.

```javascript
this.props.saveForm(formData)
  .then(() => {
    // router the user away
    this.context.router.push("/my/home/page")
  })
  .catch((response) => {
    //handle form errors
  })
```

Another example might be a set of actions that you want dispatched together.

```javascript
Promise.all([
  dispatch(foo()),
  dispatch(bar()),
  dispatch(bam()),
  dispatch(boom())

]).then(() => {
  dispatch(
    loginSuccess(
      token
    )
  )
})
```

### Request complete

After request complete, middleware will dispatch new action,

#### on success

```javascript
{
  type: 'AWESOME', //success type
  payload: { ... } //axios response object with data status headers etc.
  meta: {
    previousAction: { ... } //action which triggered request
  }
}
```

#### on error

Error action is same as success action with one difference, there's no key `payload`, but now there's `error`;

```js
{
    type:'OH_NO',
    error: { ... }, //axios error response object with data status headers etc.
    meta: {
      previousAction: { ... } //action which triggered request
    }
}
```

#### if axios failed fatally, default erro action with status `0` will be dispatched

```js
{
    type:'OH_NO',
    error: {
      status: 0,
      ... //rest of axios error response object
    },
    meta: {
      previousAction: { ... } //action which triggered request
    }
}
```

### Middleware options

| key | type | default value | description |
|---|---|---|---|
|successSuffix|string|SUCCESS|default suffix added to success action, for example `{type:"READ"}` will be `{type:"READ_SUCCESS"}`|
|errorSuffix|string|FAIL|same as above|
|onSuccess|function|described above|function called if axios resolve with success|
|onError|function|described above|function called if axios resolve with error|
|onComplete|function|-|function called after axios resolve|
|returnRejectedPromiseOnError|bool|false|if `true`, axios onError handler will return `Promise.reject(newAction)` instead of `newAction`|
|isAxiosRequest|function|function check if action contain `action.payload.request`|check if action is axios request, this is connected to `getRequestConfig`|
|getRequestConfig|function|return content of `action.payload.request`|if `isAxiosRequest` returns true, this function get axios request config from action|
|interceptors|object {request: [], response: []}|-|You can pass axios request and response interceptors. Take care, first argument of interceptor is different from default axios interceptor, first received argument is `getState` function|

## License

MIT

## Acknowledgements

[Dan Abramov](https://github.com/gaearon) for Redux
[Matt Zabriskie](https://github.com/mzabriskie) for [Axios](https://github.com/mzabriskie/axios). A Promise based HTTP client for the browser and node.js
