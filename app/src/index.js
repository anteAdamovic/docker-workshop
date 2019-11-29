import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

fetch('http://localhost:4001/data')
    .then(res => res.json())
    .then(data => {
        return data.map(d => {
            return {
                ...d,
                completed: d.completed.toString()
            }
        });
    })
    .then(data => {
        ReactDOM.render(<App todos={data} />, document.getElementById('root'));
    })
    .catch(err => {
        ReactDOM.render(<App todos={[]} />, document.getElementById('root'));
    });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
