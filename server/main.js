var express = require('express');

var app = new express();

var parser = require('body-parser');

require('./database.js');
// app.get('/',function(req,res){
//     res.render('./../public/index.html',{});
// })
app.use(express.static(__dirname + './../public'))
app.listen(7777);

app.use(parser.json());
app.use(parser.urlencoded({extended: false}));

require('./routes/items.js')(app);

