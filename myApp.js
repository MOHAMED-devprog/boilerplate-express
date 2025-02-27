let express = require("express");
let app = express();
absoltePath = __dirname + '/views/index.html';
app.get('/',(res , req)=>{
   res.sendFile(absoltePath);
});



































 module.exports = app;
