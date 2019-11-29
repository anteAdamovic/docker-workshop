const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');

app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    port: 33006,
    database: "workshop",
    user: "root",
    password: "root"
  });

db.connect(err => {
    if (err) {
        console.log('Failed to connect to database!', err);
        return process.exit(1);
    }

    console.log('Database connection succesful!');
});

const getData = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM todos', (err, result) => {
            if (err) {
               reject(err);
            }
        
            resolve(result);
        });
    });
}

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