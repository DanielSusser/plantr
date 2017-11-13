var mongoose = require('mongoose');


//connect to database
mongoose.connect('mongodb://daniel:plantr@ds161455.mlab.com:61455/plantr');

//sets up scheme for mongoose
var plantSchema = mongoose.Schema({
  plantName: String,
  plantType: String,
  waterFreq: Number,
  fertiliserFreq: Number
});

var plant = mongoose.model('plant',plantSchema);
/*var itemOne = plant({plantName: 'Rose',
plantType: 'aloe',
waterFreq: 2,
fertiliserFreq: 5}).save(function(err){
  if (err) throw err
  console.log('item saves');
});*/
module.exports = function(app){
  app.get('/home',function(req,res){
    res.render('home');
    console.log('showing homepage');
  });

  app.get('/input',function(req,res){
    res.render('./input');
  });
  app.get('/data',function(req,res){
//get mongoDB data and pass to the view
    plant.find({},function(err,data){
      if (err) throw err;
        res.render('plant',{plant:data});
    });
  });
}
