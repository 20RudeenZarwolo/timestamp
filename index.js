var express = require('express');
var moment = require('moment');
var destroy = require('destroy');
//assign express function to app
var app = express();
//apply the static function to css folder
app.use(express.static('style'));
//make a get request
app.get('/', function(req, res){
//respond to request sent
res.sendfile(__dirname + '/public/index.html');
})
//a path to input date string 
app.get('/:id', function(req, res)
{ //Get string from URL
  var id = req.params.id
  //pass date gotten to moment function
  var date_string = moment(id);
  //console.log(date_string);
  //Check whether date is valid
  if(date_string.isValid())
  {
    //if date is valid convert it to unixTime
    var day = new Date(date_string);
    var unixTime = moment(day).unix();
    console.log(unixTime);
    //print natural date
    console.log(id);

    //send date to the browser
    res.json({
        unix: moment(day).unix(),
        natural_date: id
    })
  }
  else{
    res.json({
      unix: null,
      natural_date: null
    })
  }
})
app.listen(4000, function(){
    console.log('Node server is running @ http://localhost:4000')
})
