class Bus {
  constructor(busNumber, shedule) {
    this.busNumber = busNumber;
    this.shedule = shedule;
  }
  get getShedule() {
    return this.shedule;
  }
  set setShedule(shedule) {
    this.shedule = shedule;
  }
  get getNumber() {
    return this.busNumber;
  }
  set setNumber(busNumber) {
    this.busNumber = busNumber;
  }
}

class BusStation {
  constructor(nameOfBusStation, minutesFromDepo) {
    this.name = nameOfBusStation;
    this.minutesFromDepo = minutesFromDepo;
    this.busses = [];
  }

  addBus(bus) {
    this.busses.push(bus);
  }
  displayBusNumber() {
    let arr = [];
    for(let i =0;i<this.busses.length;i++){
    arr.push(this.busses[i].busNumber);
  }
    return arr;
  }
  displaySchedule() {
    let arr = [];
    let scheduleArr = [];
    let arrForOneBus = [];
    for(let i =0;i<this.busses.length;i++){
      arr.push(this.busses[i].shedule);
    }
    for(let j=0;j<arr.length;j++){
        arrForOneBus.push(arr[j]);
      }
    for(let i =0;i<arrForOneBus.length;i++){
         //scheduleArr.push(addMinutesToString(arrForOneBus[i],this.minutesFromDepo));
         scheduleArr.push(arrForOneBus[i]);
  }
    for(let i=0;i<scheduleArr.length;i++){
      for(let j=0;j<scheduleArr[i].length;j++){
        scheduleArr[i][j] = addMinutesToString(scheduleArr[i][j],this.minutesFromDepo);
      }
    }
    return scheduleArr

  }
  beautifulPrint(){
    let result = [];
    let arrayOfBusNumbers = this.displayBusNumber();
    let arrayOfSchedules = this.displaySchedule();

    for (let i =0;i<arrayOfBusNumbers.length;i++){
      let obj = {};
      obj.stopName = this.name;
      obj.busNumber = arrayOfBusNumbers[i];
      obj.schedule = arrayOfSchedules[i];
      result.push(obj);
    }
    return result;
  }

}

function addMinutesToString(timeString, minutes){
  function D(J){ return (J<10? '0':'') + J;};
  var piece = timeString.split(':');
  var mins = piece[0]*60 + +piece[1] + +minutes;

  return D(mins%(24*60)/60 | 0) + ':' + D(mins%60);
}

let firstStop = new BusStation('Brivibas iela', 10);

let busNumber2 = new Bus(2, ['10:15', '13:20', '16:45']);
let busNumber3 = new Bus(3, ['11:15', '13:20', '16:45']);

firstStop.addBus(busNumber2);
firstStop.addBus(busNumber3);

//console.log(firstStop.busses);

//console.log(firstStop.displayBusNumber()); // Should display 2.

//console.log(firstStop.displaySchedule()); // Should display schedule for this stop.

console.log(firstStop.beautifulPrint());
