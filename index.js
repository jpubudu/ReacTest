const express =  require('express');
const app = express();

app.get('/', (req,res) => {
  res.send({hi: 'there'});
});

app.get('/pubudu', (req,res) => {
  res.send({hi: 'pubudu'});
});
app.listen(5000);
