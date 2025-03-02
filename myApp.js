let dotenv = require('dotenv').config();
let express = require("express");
let app = express();

app.get('/now' , function (req , res , next){
   req.time = new Date().toString();
   next();
},
   res.json({
      time : req.time
   });
);


app.use(function middleware(req , res , next){
   console.log(`${req.method} ${req.path} - ${req.ip}`);
   next();
});


let absolutePath = __dirname + '/views/index.html';
app.get('/',function(req , res){
   res.sendFile(absolutePath);
});
let path = __dirname + '/public' ;
app.use('/public' , express.static(path));

app.get('/json', function(req , res){
   if (process.env.MESSAGE_STYLE === "uppercase")
      res.json({
         message : 'Hello json'.toUpperCase()
      });
   else
      res.json({
         message : 'Hello json'
      });
});






























 module.exports = app;
