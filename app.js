'use strict';
// var randomNum = Math.random() * (150 - 1) + 1;
// randomNum = Math.floor(randomNum);

var times = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstAndPike = {
	cookiesSold: [],
	minCust: 23,
	maxCust: 65,
	aveCookiesSold: 6.3,
	randCustHour: function() {
		var custPerHour = (Math.random() * (this.maxCust - this.minCust) + this.minCust);
		return Math.floor(custPerHour * this.aveCookiesSold);
	},
render: function() {
    var ulEl = document.getElementById('firstAndPike');
    console.log(ulEl);
    for(var i = 0; i < times.length; i++) {
      console.log('inside for log');
      this.cookiesSold.push(this.randCustHour());
      var liEl = document.createElement('li');
      liEl.textContent = times[i] + ': ' + this.cookiesSold[i] + ' cookies sold';
      ulEl.appendChild(liEl);
    }
  }
};
firstAndPike.render();

var seatacAirport = {
  cookiesSold: [],
  render: function() {
    var ulEl = document.getElementById('seatacAirport');
    for(var i = 0; i < times.length; i++) {
      this.cookiesSold.push(Math.floor(Math.random() * (100 - 1) + 1));
      var liEl = document.createElement('li');
      liEl.textContent = times[i] + ': ' + this.cookiesSold[i] + ' cookies sold';
      ulEl.appendChild(liEl);
    }
  }
};
seatacAirport.render();

var seattleCenter = {
  cookiesSold: [],
  render:function() {
    var ulEl = document.getElementById('seattleCenter');
    for(var i = 0; i < times.length; i++) {
      this.cookiesSold.push(Math.floor(Math.random() * (100 - 1) + 1));
      var liEl = document.createElement('li');
      liEl.textContent = times[i] + ': ' + this.cookiesSold[i] + ' cookies sold';
      ulEl.appendChild(liEl);
    }
  }
};
seattleCenter.render();

var capitolHill = {
  cookiesSold: [],
  render:function() {
    var ulEl = document.getElementById('capitolHill');
    for(var i = 0; i < times.length; i++) {
      this.cookiesSold.push(Math.floor(Math.random() * (100 - 1) + 1));
      var liEl = document.createElement('li');
      liEl.textContent = times[i] + ': ' + this.cookiesSold[i] + ' cookies sold';
      ulEl.appendChild(liEl);
    }
  }
};
capitolHill.render();

var alki = {
  cookiesSold: [],
  render:function() {
    var ulEl = document.getElementById('alki');
    for(var i = 0; i < times.length; i++) {
      this.cookiesSold.push(Math.floor(Math.random() * (100 - 1) + 1));
      var liEl = document.createElement('li');
      liEl.textContent = times[i] + ': ' + this.cookiesSold[i] + ' cookies sold';
      ulEl.appendChild(liEl);
    }
  }
};
alki.render();

// object literals

var firstAndPikeLocation = {
  minHourlyCustomers: 'Hi',
  maxHourlyCustomers: 'low',
  averageCookiePerCustomer: '18',
  introduction: function() {
    return 'hi, my name is ' + firstAndPikeLocation.minHourlyCustomers + ' and ' + firstAndPikeLocation.maxHourlyCustomers + 'and ' + firstAndPikeLocation.averageCookiePerCustomer + '!';
  }
};
firstAndPikeLocation.introduction;
console.log(firstAndPikeLocation);