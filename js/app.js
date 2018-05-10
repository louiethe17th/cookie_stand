'use strict'


//creates array for times of day
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']

//creates array to hold store names
var allStores = [];


//vars to hold html elements
var newStoreForm = document.getElementById('new-store-form');
var storesTable = document.getElementById('salesTable');

//creates empty object to hole store data
function Store(name, minimumCustomer, maximumCustomer, aveSale) {
    this.name = name;
    this.minimumCustomer = minimumCustomer;
    this.maximumCustomer = maximumCustomer;
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


//========================================= Calc functions

Store.prototype.custPerHourFunct = function () {
    for (var i = 0; i < hours.length; i++) {
        var random = Math.floor(Math.random() * (this.maximumCustomer - this.minimumCustomer + 1)) + this.minimumCustomer;
        console.log(random);
        this.customerArray.push(random);
    }
}

Store.prototype.cookPerHourFunct = function () {
    this.custPerHourFunct();
    for (var j = 0; j < hours.length; j++) {
        var arrayTimesAvg = Math.floor(this.customerArray[j] * this.aveSale);
        this.cookieArray.push(arrayTimesAvg);
        this.totalCookies += arrayTimesAvg;
    }
}

// ====================================== Render Functions

//render hours
Store.prototype.header = function () {

    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');

    for (var i in hours) {
        thEl.className = ('tableHours');
        thEl.textContent = hours[i];
        trEl.appendChild(thEl);
        thEl = document.createElement('th');
    }

    storesTable.appendChild(trEl);
}

//render cookie sales
Store.prototype.render = function () {
    this.cookPerHourFunct();

    var trEl = document.createElement('tr');
    trEl.className = ('tableNumbers');
    var tdEl = document.createElement('td');


    for (var i in hours) {
        tdEl.textContent = this.cookieArray[i];
        trEl.appendChild(tdEl);
        tdEl = document.createElement('td')
    }

    storesTable.appendChild(trEl);
}

//render store names
Store.prototype.renderName = function () {
    this.cookPerHourFunct();

    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');

    tdEl.textContent = this.name;
    trEl.appendChild(tdEl);
    tdEl = document.createElement('td');


    storeTable.appendChild(trEl);
}

//function to render all stores
function renderAllStores() {
    for (var i in allStores) {
        allStores[i].render();
    }
}


//render store names
function makeHeaderRow() {
    var trEl = document.createElement('tr');

    var thEl = document.createElement('th');
    thEl.className = ('storeTableNames');
    thEl.textContent = allStores[i].name;
    trEl.appendChild(thEl);

    storesTable.appendChild(trEl);
}


//render loop
for (var i in allStores) {
    makeHeaderRow();
    Store.prototype.header();
    allStores[i].render()
}
console.table(allStores);



//creating new store event
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

    var header = function () {

        var trEl = document.createElement('tr');
        var thEl = document.createElement('th');

        for (var i in hours) {
            thEl.className = ('tableHours');
            thEl.textContent = hours[i];
            trEl.appendChild(thEl);
            thEl = document.createElement('th');
        }

        storesTable.appendChild(trEl);
    }

    var custPerHourFunct = function () {
        for (var i = 0; i < hours.length; i++) {
            var random = Math.floor(Math.random() * (newCookieStore.maximumCustomer - newCookieStore.minimumCustomer + 1)) + newCookieStore.minimumCustomer;
            console.log(random);
            newCookieStore.customerArray.push(random);

        }
    }

    var cookPerHourFunct = function () {
        custPerHourFunct();
        for (var j = 0; j < hours.length; j++) {
            var arrayTimesAvg = Math.floor(newCookieStore.customerArray[j] * newCookieStore.aveSale);
            newCookieStore.cookieArray.push(arrayTimesAvg);
            newCookieStore.totalCookies += arrayTimesAvg;
        }

    }

    
    var renderNewStoreName = function () {
        var trEl = document.createElement('tr');

        var thEl = document.createElement('th');
        thEl.className = ('storeTableNames');
        thEl.textContent = newCookieStore.name;
        trEl.appendChild(thEl);

        storesTable.appendChild(trEl);

    }

    var renderNewStoreCookies = function () {
        cookPerHourFunct();
    
        var trEl = document.createElement('tr');
        trEl.className = ('tableNumbers');
        var tdEl = document.createElement('td');
    
    
        for (var i in hours) {
            tdEl.textContent = newCookieStore.cookieArray[i];
            trEl.appendChild(tdEl);
            tdEl = document.createElement('td')
        }
    
        storesTable.appendChild(trEl);
    }
    
    

    renderNewStoreName();

    header();

    renderNewStoreCookies();


    }


    newStoreForm.addEventListener('submit', newStoreInput)











