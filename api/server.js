const express = require('express');
const app = express();
const cors = require('cors');
// const getData = require('./database');

app.use(cors());

app.get('/mock', (req, res) => {
    res.send([
        {
            id: 1,
            userId: 1,
            title: "Task 1",
            completed: false
        },
        {
            id: 2,
            userId: 1,
            title: "Task 2",
            completed: false
        },
        {
            id: 3,
            userId: 1,
            title: "Task 3",
            completed: false
        },
        {
            id: 4,
            userId: 1,
            title: "Task 4",
            completed: false
        }
    ])
});

app.get('/data', (req, res) => {
    getData().then(
        result => {
            res.send(result);
        },
        err => {
            res.send([]);
        }
    )
});

app.listen(4000, () => {
    console.log('Server listening on port 4000...');
});