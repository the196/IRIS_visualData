var express = require("express");
var session = require('express-session')
var bodyParser = require('body-parser');
var path = require("path");

var app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(session({
  secret: 'sdfasdgasgaf',
  resave: false,
  saveUninitialized: true,
  cookie : {
    httpOnly: false,
    maxAge: 2*60*60*1000 //2 Hours
  }
}));


app.use(bodyParser.json());

app.post("/getDimentions",function(req, res){
    var Dimensions = [
        "POLLUTION",
        "SHARED TRANSPORT",
        "ACCIDENTS"
    ];
    res.send(Dimensions);
})

app.use("/",express.static("../public"));
app.get("/",function(req, res){
    var Blank = path.resolve(__dirname+"/../public/blank.html");
    console.log("Hello I am changed");
    res.sendFile(Blank);
})

var server = app.listen(3002, function(){
    var host = 'localhost';
    var port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);

})