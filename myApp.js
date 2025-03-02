let express = require("express");
let app = express();
let absolutePath = __dirname + '/views/index.html';
app.get('/',function(req , res){
   res.sendFile(absolutePath);
});
let path = __dirname + '/public' ;
app.use('/public' , express.static(path));

app.get('/json', function(req , res){
   res.json().send('/views');

































 module.exports = app;
