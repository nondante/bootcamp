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
  displaySchedule(stopName) {
    let arr = [];
    let scheduleArr = [];
    let arrForOneBus = [];
    for(let i =0;i<this.busses.length;i++){
      if(this.name ==stopName){
      arr.push(this.busses[i].shedule);
    }
    }
    for(let j=0;j<arr.length;j++){
      

      for(let i =0;i<arr[0].length;i++){
        scheduleArr.push(addMinutesToString(arr[j][i],this.minutesFromDepo));

      }

  }
    return scheduleArr;
  }

}

function addMinutesToString(timeString, minutes){
  function D(J){ return (J<10? '0':'') + J;};
  var piece = timeString.split(':');
  var mins = piece[0]*60 + +piece[1] + +minutes;

  return D(mins%(24*60)/60 | 0) + ':' + D(mins%60);
  console.log("Next bus");
}

let firstStop = new BusStation('Brivibas iela', 10);

let busNumber2 = new Bus(2, ['10:15', '13:20', '16:45']);
let busNumber3 = new Bus(3, ['10:15', '13:20', '16:45']);

firstStop.addBus(busNumber2);
firstStop.addBus(busNumber3);

//console.log(firstStop.busses);

console.log(firstStop.displayBusNumber()); // Should display 2.

console.log(firstStop.displaySchedule('Brivibas iela')); // Should display schedule for this stop.
