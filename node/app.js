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
