import fetch from 'isomorphic-fetch'

export function fetchData(itemId) {
    console.log("FETCHS");
    return fetch(`./fixtures/dummydata.json`)
        .then(response => response.json())

}

const delay = (ms) => new Promise(resolve =>
    setTimeout(resolve, ms)
);

export const fetchObjects = () => {
    const link = `./fixtures/dummydata.json`
    return (dispatch) => {
        fetch(link)
            .then(response => response.json()) 
            dispatch({type: 'HOMEPAGE_LOADED', payload:response })
            

    }
    return delay(2000).then(() => {
        dispatch({
            type: RECEIVE_MAP_OBJECTS,
            objects: { 'id': '56789', 'id': '567Zdz' },
            receivedAt: Date.now()
        })
    });
}
}