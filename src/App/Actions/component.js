import React from 'react';

import { createStore } from 'redux';

function getUsers(state = [], action) {
    if (action.type === 'FETCH_GET') {
        return fetch('https://api.github.com/users')
            .then(res => res.json())
            .then(
                (res) => [
                    ...state,
                    res
                ]
            )
    }
    return state;
}

const store = createStore(getUsers);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({ type: 'FETCH_GET' });

function Action() {
    return (
        <div>
            some text
        </div>
    );
}

export default Action;