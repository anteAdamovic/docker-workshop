const mysql = require('mysql');

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
};

module.exports = getData;