let express = require("express");
let app = express();
let absolutePath = __dirname + '/views/index.html';
app.get('/',function(req , res){
   res.sendFile(absolutePath);
});
let path = __dirname + '/public' ;
app.use(express.static(path));



































 module.exports = app;
