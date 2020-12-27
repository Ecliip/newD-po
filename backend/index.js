const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  database: 'd_po'
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
});

app.get('/create_post_table', (req, res) => {
  const sql = 'create table posts(id int auto_increment, title varchar(255), body varchar(255), primary key id)';
  db.query(sql, (err, result) => {
      if (err) {
        throw err;
      }
      ;
      res.json({
        'message': 'Query submitted',
        'response': result
      });
    }
  )
});

app.listen(port, ()=> {
  console.log(`This app is listening at ${port}`);
});


