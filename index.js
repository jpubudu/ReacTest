const express =  require('express');
const app = express();

app.get('/', (req,res) => {
  res.send({hi: 'there'});
});

app.get('/pubudu', (req,res) => {
  var x= 10;
  var y= 10;
  res.send({hi: x*y});
});

app.listen(7000);
