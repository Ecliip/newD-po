const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.get('/', (req, res) => {
  res.send({'message': 'hello world'});
});

app.get('/welcome', function (req, res) {
  res.send('Hello World 2!')
});

app.listen(port, ()=> {
  console.log(`This app is listenning at ${port}`);
});


