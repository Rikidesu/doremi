var express = require("express");
var app = express();
var api = require("NeteaseMusicApi");

app.use(express.static('html'));

app.get('/',function(req,res){
	res.send('hi');
});

app.get('/api/search/:text',function(req,res){

	api.search(req.params.text,function(data){
				res.send(data);
			},10,0);
});

app.get('/api/song/:id',function(req,res){

	api.song(req.params.id,function(data){
		res.send(data);
		console.log(data);
	})

});
app.listen(80);
