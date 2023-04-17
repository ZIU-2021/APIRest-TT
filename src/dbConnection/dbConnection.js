//Connection to the DB
const {Pool} = require('pg');

//Connection data
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '12345',
    database: 'TT'
});

module.exports ={
    pool
};