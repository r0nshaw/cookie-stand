'use strict';
// var randomNum = Math.random() * (150 - 1) + 1;
// randomNum = Math.floor(randomNum);

var times = ['6a', '7a', '8a', '9a', '10a', '11a', '12p', '1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p'];
var theTable = document.getElementById('tableId');
var locations = [];

function CookieStand(name, min, max, average) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.average = average;
  this.cookiePerHour = [];
  locations.push(this);
}

CookieStand.prototype.generateCookiesPerHour = function() {
  for(var i = 0; i < times.length; i++) {
    var custPerHour = (Math.random() * (this.max - this.min + 1) + this.min);
    var cookiesPerHour = Math.floor(custPerHour * this.average);
    this.cookiePerHour.push(cookiesPerHour);
  } 
};

CookieStand.prototype.appendingSalesToRow = function(){
  var row = document.createElement('tr');
  var total = 0;
  for(var i = 0; i < this.cookiePerHour.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.cookiePerHour[i];
    total += this.cookiePerHour[i];
    row.appendChild(tdEl);
  }
  var totalColumn = document.createElement('td');
  totalColumn.textContent = total;
  row.appendChild(totalColumn);
  theTable.appendChild(row);
};
// global function for header row


console.log('before', locations)

var firstAndPike = new CookieStand("First and Pike", 23, 65, 6.3);
var seatacAirport = new CookieStand("SeaTac Airport", 3, 24, 1.2);
var seattleCenter = new CookieStand("Seattle Center", 11, 38, 3.7);
var capitolHill = new CookieStand("Capitol Hill", 20, 38, 2.3);
var alki = new CookieStand("Alki", 2, 16, 4.6);
console.log('after', locations);


for(var i = 0; i < locations.length; i++) {
  locations[i].generateCookiesPerHour();
  locations[i].appendingSalesToRow();
   // locations[i].render();
  }
console.log(locations);








firstAndPike.methodName();
firstAndPike.randNumber();

CookieStand.prototype.render(){};
alki.render();

function makeHeaderRow() {
  var tableRow = document.createElement('tr');
  var theElement = document.createElement('th');
  theElement.textContent = null;
  salmonTable.appendChild(tableRow);
  tableRow.appendChild(theElement);
  for (var i = times.length; i++) {
    theElement = document.createElement('th');
    theElement.textContent = times[i];
tableRow.appendChild(theElement);
  }
  theElement = document.createElement('th');
  theElement.textContent = times[i];
  tableRow.appendChild(theElement);
}





// var totalCustomers = 0;
// var totalCookies = 0;
// var tableId = document.getElementaryById('tableId');
// var trEl = document.createElement('tr');

// var storeHolder = [];



// var firstAndPike = {
//   cookiesSold: [],
//   minCust: 23,
//   maxCust: 65,
//   aveCookiesSold: 6.3,
//   randCustHour: function() {
//     var custPerHour = (Math.random() * (this.maxCust - this.minCust) + this.minCust);
//     return Math.floor(custPerHour * this.aveCookiesSold);
//   },
//   render: function() {
//     var ulEl = document.getElementById('firstAndPike');
//     console.log(ulEl);
//     for(var i = 0; i < times.length; i++) {
//       console.log('inside for log');
//       this.cookiesSold.push(this.randCustHour());
//       var liEl = document.createElement('li');
//       liEl.textContent = times[i] + ': ' + this.cookiesSold[i] + ' cookies sold';
//       ulEl.appendChild(liEl);
//     }
//   }
// };
// firstAndPike.render();

// var seatacAirport = {
//   cookiesSold: [],
//   minCust: 3,
//   maxCust: 24,
//   aveCookiesSold: 1.2,
//   randCustHour: function() {
//     var custPerHour = (Math.random() * (this.maxCust - this.minCust) + this.minCust + 1);
//     return Math.floor(custPerHour * this.aveCookiesSold);
//   },
//   render: function() {
//     var ulEl = document.getElementById('seatacAirport');
//     for(var i = 0; i < times.length; i++) {
//       this.cookiesSold.push(Math.floor(Math.random() * (100 - 1) + 1));
//       var liEl = document.createElement('li');
//       liEl.textContent = times[i] + ': ' + this.cookiesSold[i] + ' cookies sold';
//       ulEl.appendChild(liEl);
//     }
//   }
// };
// seatacAirport.render();

// var seattleCenter = {
//   cookiesSold: [],
//   minCust: 11,
//   maxCust: 38,
//   aveCookiesSold: 3.7,
//   randCustHour: function() {
//     var custPerHour = (Math.random() * (this.maxCust - this.minCust) + this.minCust + 1);
//     return Math.floor(custPerHour * this.aveCookiesSold);
//   },
//   render:function() {
//     var ulEl = document.getElementById('seattleCenter');
//     for(var i = 0; i < times.length; i++) {
//       this.cookiesSold.push(Math.floor(Math.random() * (100 - 1) + 1));
//       var liEl = document.createElement('li');
//       liEl.textContent = times[i] + ': ' + this.cookiesSold[i] + ' cookies sold';
//       ulEl.appendChild(liEl);
//     }
//   }
// };
// seattleCenter.render();

// var capitolHill = {
//   cookiesSold: [],
//   render:function() {
//     var ulEl = document.getElementById('capitolHill');
//     for(var i = 0; i < times.length; i++) {
//       this.cookiesSold.push(Math.floor(Math.random() * (100 - 1) + 1));
//       var liEl = document.createElement('li');
//       liEl.textContent = times[i] + ': ' + this.cookiesSold[i] + ' cookies sold';
//       ulEl.appendChild(liEl);
//     }
//   }
// };
// capitolHill.render();

// var alki = {
//   cookiesSold: [],
//   render:function() {
//     var ulEl = document.getElementById('alki');
//     for(var i = 0; i < times.length; i++) {
//       this.cookiesSold.push(Math.floor(Math.random() * (100 - 1) + 1));
//       var liEl = document.createElement('li');
//       liEl.textContent = times[i] + ': ' + this.cookiesSold[i] + ' cookies sold';
//       ulEl.appendChild(liEl);
//     }
//   }
// };
// alki.render();

// // object literals

// var firstAndPikeLocation = {
//   minHourlyCustomers: 'Hi',
//   maxHourlyCustomers: 'low',
//   averageCookiePerCustomer: '18',
//   introduction: function() {
//     return 'hi, my name is ' + firstAndPikeLocation.minHourlyCustomers + ' and ' + firstAndPikeLocation.maxHourlyCustomers + 'and ' + firstAndPikeLocation.averageCookiePerCustomer + '!';
//   }
// };
// firstAndPikeLocation.introduction;
// console.log(firstAndPikeLocation);

// var allStores = [];
// var storeTable = document.getElementById('stores');

// function Store(name, cookiesNeeded, totalCookieSales) {
//   this.name = name;
//   this.cookiesNeeded = cookiesNeeded;
//   this.totalCookieSales;
//   allStores.push(this);
// }

// // store instances
// var firstAndPike = new Store(name, cookiesNeeded, totalCookieSales);
// var seatacAirport = new Store(name, cookiesNeeded, totalCookieSales);
