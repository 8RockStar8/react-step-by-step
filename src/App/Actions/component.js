import React from 'react';

import { createStore } from 'redux';

const initState = {
    users: []
}

function reducer(state = initState, action) {
    if (action.type === 'FETCH_GET') {
        return {
            ...state, 
            users: [...state.users, action.payload]
        };
    }
    return state;
}

const store = createStore(reducer);

var newUsers = [];

store.subscribe(() => {
    newUsers = store.getState();
    console.log(newUsers.users[0].length);
});


fetch('https://api.github.com/users')
        .then(res => res.json())
        .then((res) => {
            store.dispatch({ type: 'FETCH_GET', payload: res });
        });




function Action() {
    return (
        <div>
            some text
        </div>
    );
}

export default Action;