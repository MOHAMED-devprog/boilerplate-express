let express = require("express");
let app = express();
let absolutePath = __dirname + '/views/index.html';
app.get('/',(res , req)=>{
   res.sendFile(absolutePath);
});



































 module.exports = app;
