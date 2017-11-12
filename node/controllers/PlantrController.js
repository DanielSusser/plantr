module.exports = function(app){
  app.get('/home',function(req,res){
    res.render('home');
    console.log('showing homepage');
  });
  app.get('/input',function(req,res){
    res.render('./input');
  });
}
