var express = require('express');
var plantrController = require('./controllers/PlantrController');

//starts the server
var app = express();

//sets up template engine (do I even need that? who knows...)
app.set('view engine','ejs');

//use static files
app.use(express.static('.'));

//listen to port 3000
app.listen(3000);

//if everything's working log a message
console.log('listening to port 3000');

plantrController(app);
//
/*var server = http.createServer(function(req,res){
  console.log('request was made: '+req.url);
  if(req.url === '/home' || req.url === '/'){
    res.writeHead(200,{'Content-Type':'text/html'});
    fs.createReadStream(__dirname+'/index.html').pipe(res);
  }else{
    res.writeHead(200,{'Content-Type':'text/html'});
    fs.createReadStream(__dirname+'/error.html').pipe(res);
  };



});

server.listen(3000,'127.0.0.1');
console.log('listening to port 3000');
*/
