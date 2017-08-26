var express = require('express');
var app = express();
var port = 3000;

app.get('/',function(request,response){
	response.send('hello, world');
});

app.listen(port, function(){
 
	console.log("express app request listening to port : " + port);

});

