const express = require('express');
const serveStatic = require('serve-static');

let app = express();
app.use(serveStatic(__dirname + "/dist"));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Listening on port ' + port)
});