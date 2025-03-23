let dotenv = require('dotenv').config();
let express = require("express");
let app = express();

app.get('/now' , function (req , res , next){
   req.time = new Date().toString();
   next();
},
   function(req , res){
   res.json({
      time : req.time
   });
});


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


app.get("/:word/echo" , function(req , res){
   const {word} = req.params;
   res.json({
      echo: word
   });
})

app.route('/name').get((req , res)=>{
   let first = req.query.first;
   let last = req.query.last;
   res.json({
      name : first +" "+ last
   });
});
   
























 module.exports = app;
