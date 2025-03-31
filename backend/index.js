const express = require('express')
const app = express()
const port = 4000

const mongoDB = require('./db');
(async () => {
    await mongoDB();
})();

app.use('/images', express.static('public/images'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})