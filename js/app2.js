'use strict'


//creates array for times of day
var hours = ['6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00']

//creates array to hold store names
var allStores = [];

var storesTable = document.getElementById('salesTable');

//creates empty object to hole store data
function Store(name, minimumCustomer, maximumCustomer, aveSale){
    this.name = name;
    this.minimumCustomer = minimumCustomer;
    this.maximumCustomer = maximumCustomer;
    this.aveSale = aveSale;
    this.customerArray = [];
    this.cookieArray = [];
    this.totalCookies = 0;
    
    
    allStores.push(this);
}
new Store('Pike Place Market', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capital Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

Store.prototype.header = function () {

    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
 
    for(var i in hours) {
        thEl.textContent = hours[i];
    trEl.appendChild(thEl);
    thEl = document.createElement('th');
    }
 
    storesTable.appendChild(trEl);
  }



// Store.prototype.cookieCalc = function(){
//     for (var i =0; i < 16; i++)
//             var cookiesPerHour = Math.floor(this.customerArray[i] * this.aveSale)
//             this.cookieArray.push(this.cookiesPerHour)
//             this.totalCookies += this.cookiesPerHour;
//         }
        
        Store.prototype.custPerHourFunct = function() {
            for ( var i = 0; i < hours.length; i++) {
                var random = Math.floor(Math.random() * (this.maximumCustomer - this.minimumCustomer + 1)) + this.minimumCustomer;
                console.log(random);
                this.customerArray.push(random);
                }
            }
         
         Store.prototype.cookPerHourFunct = function() {
            this.custPerHourFunct();
            for ( var j = 0; j < hours.length; j++) {
                var arrayTimesAvg = Math.floor(this.customerArray[j] * this.aveSale);
                this.cookieArray.push(arrayTimesAvg);
                this.totalCookies += arrayTimesAvg;
                }
            }
    
  



Store.prototype.render = function() {
    this.cookPerHourFunct();
  
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');

    
    for(var i in hours){
    tdEl.textContent = this.cookieArray[i];
    trEl.appendChild(tdEl);
    tdEl =  document.createElement('td')
    }

    storesTable.appendChild(trEl);
}

function renderAllStores() {
   for (var i in allStores) {
     allStores[i].render();
  }
}

//   function makeHeaderRow() {
//     var trEl = document.createElement('tr');
  
//     var thEl = document.createElement('th');
//     thEl.textContent = 'Name';
//     trEl.appendChild(thEl);
  
//     thEl = document.createElement('th');
//     thEl.textContent = 'Hourly Customers';
//     trEl.appendChild(thEl);
  
//     thEl = document.createElement('th');
//     thEl.textContent = 'Hourly Cookie Sales';
//     trEl.appendChild(thEl);
  
//     storesTable.appendChild(trEl);
// }
Store.prototype.header();
  
  for(var i in allStores){
      allStores[i].render()
    }
    console.table(allStores);
  
  

















//new stores

// for(var i in allStores){
//     console.log(allStores[i]);
// }