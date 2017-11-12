
$(document).ready(function(){
//array with all registered plants
var plants = [];
//constructs a new plant with the right properties
function plant(name,type,wateringFrequency,fertiliserFrequency){
  this.name = name;
  this.type = type;
  this.wateringFrequency = wateringFrequency;
  this.fertiliserFrequency = fertiliserFrequency;
};
//when you click the button this takes the values of the form and creates a new plant by its name
$('#submitButton').click(function(){
  var newPlant = new plant($('#plantName').val(),$('#plantType').val(), $('#wateringFrequency').val(),$('#fertiliserFrequency').val());
  plants.push(newPlant);
//resets all input values
$('#plantName').val("");
$('#plantType').val("");
$('#wateringFrequency').val("");
$('#fertiliserFrequency').val("");
//print out the names of all active plants
console.log(plants)
  });




//when you click the button this takes the values of the form and creates a new plant by its name
$('#submitButton').click(function(){
  var newPlant = new plant($('#plantName').val(),$('#plantType').val(), $('#wateringFrequency').val(),$('#fertiliserFrequency').val());
  plants.push(newPlant);
//resets all input values
$('#plantName').val("");
$('#plantType').val("");
$('#wateringFrequency').val("");
$('#fertiliserFrequency').val("");
//print out the names of all active plants
for(var i=0;i<plants.length;i++){
  $('#results').append("<br><p>"+plants[i].name+"</p>");
}
  });
})

//>>>>>>> be6f89cbdcdb22e6ac7ad714cd71bcd8ed7afdf3
