var moment = require('moment');
//console.log(moment().format("dddd"));

moment.locale('lv');


//create date , methid time remaining days hours
var mydate = moment("2019-03-02T00:00:00");
class Alarm{
  constructor(date){
    this.date = date;
  }
  timeUntilAlarm(){
    var end= this.date;
    var now = moment();
    var duration = moment.duration(now.diff(end));
    var days = duration.asDays();
    var hours = duration.asHours();
    var minutes = duration.asMinutes();
    return "Days: "+ Math.abs(parseInt(days)) + " Hours: " + Math.abs(parseInt(hours)) + " Minutes: " + Math.abs(parseInt(minutes));
  }
}

let daysIlived = new Alarm(mydate);
//console.log(daysIlived.timeUntilAlarm());
//console.log(moment([2007, 0, 29]).fromNow());

var a = moment([2007, 0, 28]);
var b = moment([2007, 0, 29]);
a.from(b) // "a day ago"

function alarm (timeToSet){
  let time = moment(timeToSet,"HH:mm").format("HH:mm");
  let currentTime2 = moment().format("HH:mm");
  //let timeTo = moment(moment(time).format("HH:mm"));
  //let currentTime = moment(moment().format("HH:mm"));
  let duration = moment.duration(moment(time, "HH:mm").from(moment(currentTime2,"HH:mm")));
  var hours = parseInt(duration.asHours());
  var minutes = parseInt(duration.asMinutes())%60;
  return hours + ' hour and '+ minutes+' minutes.';

  return result
}
console.log(alarm("06:00 AM"));
