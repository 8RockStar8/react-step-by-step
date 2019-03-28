import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux'; 

function getUsers(state = [], action) {
    switch (action.type) {
        case 'FETCH_GET':
            return fetch('https://api.github.com/users')
                .then(res => res.json())
                .then(
                    (res) => {
                        state = res;
                    }
                )
        default:
            return state
    }
}

let store = createStore(getUsers);

store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: 'FETCH_GET' });

ReactDOM.render(
    <Provider store={ store }>
        <App /> 
    </Provider>,
    document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

