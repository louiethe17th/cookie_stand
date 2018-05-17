'use strict'


//creates array for times of day
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']

//creates array to hold store names
var allStores = [];

var totalCookieArray = [];
Store.all = [];

//vars to hold html elements
var newStoreForm = document.getElementById('new-store-form');
var storesTable = document.getElementById('salesTable');

//creates empty object to hole store data
function Store(name, minimumCustomer, maximumCustomer, aveSale) {
  this.name = name;
  this.minCust = minimumCustomer;
  this.maxCust = maximumCustomer;
  this.aveSale = aveSale;
  this.customerArray = [];
  this.cookieArray = [];
  this.totalCookies = 0;


  allStores.push(this);
}

//creates new stores
new Store('Pike Place Market', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capital Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);


Store.prototype.header = function () {

  var trEl = document.createElement('tr');
  trEl.className = ('tableNumbers');

  var thEl = document.createElement('th');

  thEl.textContent = 'Store Names';
  trEl.appendChild(thEl);
  thEl = document.createElement('th');

  for (var i in hours) {
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
    thEl = document.createElement('th');
  }

  
}
// first math function
Store.prototype.custPerHourFunct = function () {
  for (var i = 0; i < hours.length; i++) {
    var random = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    this.customerArray.push(random);
  }
}
// second math function
Store.prototype.cookPerHourFunct = function () {
  this.custPerHourFunct();
  for (var j = 0; j < hours.length; j++) {
    var arrayTimesAvg = Math.floor(this.customerArray[j] * this.aveSale);
    this.cookieArray.push(arrayTimesAvg);
    // this.totalForDay += arrayTimesAvg;
  }
}

// Body of table (cookies per hour)
Store.prototype.render = function () {
  this.cookPerHourFunct();

  var trEl = document.createElement('tr');
  trEl.className = ('tableNumbers');
  var tdEl = document.createElement('td');

  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);
  tdEl = document.createElement('td');

  for (var i in hours) {
    tdEl.textContent = this.cookieArray[i];
    trEl.appendChild(tdEl);
    tdEl = document.createElement('td');
  }

  tdEl.textContent = this.totalForDay;
  trEl.appendChild(tdEl);
  tdEl = document.createElement('td');

  //========================================
  Store.prototype.footer = function () {
    var trEl2 = document.createElement('tr');
    trEl2.className = ('tableNumbers');
    var thEl2 = document.createElement('th');


    thEl2.textContent = 'Total: ';
    trEl2.appendChild(thEl2);
    thEl2 = document.createElement('th');

    for (var j in allStores[0].cookieArray) {
      thEl2.textContent = allStores[0].cookieArray[j];

      trEl2.appendChild(thEl2);
      thEl2 = document.createElement('th');
    }



    storesTable.appendChild(trEl2);
  }
  //========================================


  storesTable.appendChild(trEl);
}

function renderAllStores() {
  storesTable.innerHTML = '';
  Store.prototype.header();
  console.table(allStores);

  for (var i in allStores) {
    allStores[i].render();
  }
}

renderAllStores();

Store.prototype.footer();

console.table(allStores);



//===================================================

function newStoreInput(event) {
  console.log("Submit buttton was clicked!")
  event.preventDefault();
  if (!event.target.store.value || !event.target.minCust.value || !event.target.maxCust.value || !event.target.avgSale.value) {

    return alert('Values cannot be empty!!');
  }

  var newStoreName = event.target.store.value
  var newStoreMinCust = event.target.minCust.value
  var newStoreMaxCust = event.target.maxCust.value
  var newStoreAvg = event.target.avgSale.value
  // var newStoreMinCust = 
  // var newStoreMaxCust =

  event.target.store.value = null;
  event.target.minCust.value = null;
  event.target.maxCust.value = null;
  event.target.avgSale.value = null;

  //New store
  var newCookieStore = new Store(newStoreName, newStoreMinCust, newStoreMaxCust, newStoreAvg)

  console.log(newCookieStore);
  renderAllStores();

  Store.prototype.footer();
}

newStoreForm.addEventListener('submit', newStoreInput)
console.table(allStores);












