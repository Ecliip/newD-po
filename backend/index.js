const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
})

db.connect((err) => {
  if(err) {
    throw err;
  }
  console.log('MySql connected')
});

const app = express();
const port = 3000;

app.use(cors());
app.get('/', (req, res) => {
  res.send({'message': 'hello world'});
});

app.get('/welcome', function (req, res) {
  res.send('Hello World 2!')
});

app.get('/createdb', (req, res) => {
  const sql = 'create database d_po';
  db.query(sql, (err, result) => {
    if(err) {
      throw err;
    }
   res.json({'message': result})
  })
})

app.listen(port, ()=> {
  console.log(`This app is listenning at ${port}`);
});


