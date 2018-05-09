'use strict';

var hours = ['6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00']

var firstAndPike = {
    name: 'First and pike',
    minCust: 23,
    maxCust: 65,
    aveSale: 6.3,
    hourlyCust: [],
    hourlyCookies: [],
    totalCookies: 0,


    
};

// console.log('done');

firstAndPike.hourlyCustAmm = function(){
    for ( var i = 0; i < hours.length; i++){
    var custEveryHour = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    this.hourlyCust.push(custEveryHour)
    }
},

firstAndPike.hourlyCookiesAmm = function(){
    this.hourlyCustAmm();
    for ( var i = 0; i < hours.length; i++){
        var oneHourCookies = Math.floor(this.hourlyCust[i] * this.aveSale)
        this.hourlyCookies.push(oneHourCookies)
        this.totalCookies += oneHourCookies;
    }


}
     firstAndPike.render = function () {
         
        var storeName = document.getElementById('salesList')
        var newH = document.createElement('li');
        newH.className = ('storeName')
        newH.textContent = this.name;
        storeName.appendChild(newH)
        
        
        var list = document.getElementById('salesList');
         this.hourlyCookiesAmm();
         for ( var i = 0; i < this.hourlyCookies.length; i++){
             var newLi = document.createElement('li');
             newLi.textContent = hours[i] + '- ' + this.hourlyCookies[i] + ' cookies';
             list.appendChild(newLi);
            
        };
        var listContent = document.createElement('li');
      listContent.textContent = 'Total: ' + this.totalCookies + ' cookies';
      newLi.appendChild(listContent);

    }

//================================================================================

    var SeaTacAirport = {
        name: 'SeaTac Airport',
        minCust: 3,
        maxCust: 24,
        aveSale: 1.2,
        hourlyCust: [],
        hourlyCookies: [],
        totalCookies: 0,
    
    
        
    };
    
    // console.log('done');
    
    SeaTacAirport.hourlyCustAmm = function(){
        for ( var i = 0; i < hours.length; i++){
        var custEveryHour = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
        this.hourlyCust.push(custEveryHour)
        }
    },
    
    SeaTacAirport.hourlyCookiesAmm = function(){
        this.hourlyCustAmm();
        for ( var i = 0; i < hours.length; i++){
            var oneHourCookies = Math.floor(this.hourlyCust[i] * this.aveSale)
            this.hourlyCookies.push(oneHourCookies)
            this.totalCookies += oneHourCookies;
        }
    
    
    }
         SeaTacAirport.render = function () {
             
            var storeName = document.getElementById('salesList')
            var newH = document.createElement('li');
            newH.className = ('storeName')
            newH.textContent = this.name;
            storeName.appendChild(newH)
            
            
            var list = document.getElementById('salesList');
             this.hourlyCookiesAmm();
            var nameLi = document.createElement('li');
            nameLi.textContent = this.name;
             for ( var i = 0; i < this.hourlyCookies.length; i++){
                 var newLi = document.createElement('li');
                 newLi.textContent = hours[i] + '- ' + this.hourlyCookies[i] + ' cookies';
                 list.appendChild(newLi);
                
            };
            var listContent = document.createElement('li');
          listContent.textContent = 'Total: ' + this.totalCookies + ' cookies';
          newLi.appendChild(listContent);
    
        }

 SeaTacAirport.hourlyCustAmm = function(){
        for ( var i = 0; i < hours.length; i++){
        var custEveryHour = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
        this.hourlyCust.push(custEveryHour)
        }
    },
    
    SeaTacAirport.hourlyCookiesAmm = function(){
        this.hourlyCustAmm();
        for ( var i = 0; i < hours.length; i++){
            var oneHourCookies = Math.floor(this.hourlyCust[i] * this.aveSale)
            this.hourlyCookies.push(oneHourCookies)
            this.totalCookies += oneHourCookies;
        }
    
    
    }
         SeaTacAirport.render = function () {
             
            var storeName = document.getElementById('salesList')
            var newH = document.createElement('li');
            newH.className = ('storeName')
            newH.textContent = this.name;
            storeName.appendChild(newH)
            
            
            var list = document.getElementById('salesList');
             this.hourlyCookiesAmm();
            var nameLi = document.createElement('li');
            nameLi.textContent = this.name;
             for ( var i = 0; i < this.hourlyCookies.length; i++){
                 var newLi = document.createElement('li');
                 newLi.textContent = hours[i] + '- ' + this.hourlyCookies[i] + ' cookies';
                 list.appendChild(newLi);
                
            };
            var listContent = document.createElement('li');
          listContent.textContent = 'Total: ' + this.totalCookies + ' cookies';
          newLi.appendChild(listContent);
    
        }

//================================================================================

var seattleCenter = {
    name: 'Seattle Center',
    minCust: 11,
    maxCust: 38,
    aveSale: 3.7,
    hourlyCust: [],
    hourlyCookies: [],
    totalCookies: 0,


    
};

// console.log('done');

seattleCenter.hourlyCustAmm = function(){
    for ( var i = 0; i < hours.length; i++){
    var custEveryHour = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    this.hourlyCust.push(custEveryHour)
    }
},

seattleCenter.hourlyCookiesAmm = function(){
    this.hourlyCustAmm();
    for ( var i = 0; i < hours.length; i++){
        var oneHourCookies = Math.floor(this.hourlyCust[i] * this.aveSale)
        this.hourlyCookies.push(oneHourCookies)
        this.totalCookies += oneHourCookies;
    }


}
     seattleCenter.render = function () {
         
        var storeName = document.getElementById('salesList')
        var newH = document.createElement('li');
        newH.className = ('storeName')
        newH.textContent = this.name;
        storeName.appendChild(newH)
        
        
        var list = document.getElementById('salesList');
         this.hourlyCookiesAmm();
        var nameLi = document.createElement('li');
        nameLi.textContent = this.name;
         for ( var i = 0; i < this.hourlyCookies.length; i++){
             var newLi = document.createElement('li');
             newLi.textContent = hours[i] + '- ' + this.hourlyCookies[i] + ' cookies';
             list.appendChild(newLi);
            
        };
        var listContent = document.createElement('li');
      listContent.textContent = 'Total: ' + this.totalCookies + ' cookies';
      newLi.appendChild(listContent);

    }

seattleCenter.hourlyCustAmm = function(){
    for ( var i = 0; i < hours.length; i++){
    var custEveryHour = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    this.hourlyCust.push(custEveryHour)
    }
},

seattleCenter.hourlyCookiesAmm = function(){
    this.hourlyCustAmm();
    for ( var i = 0; i < hours.length; i++){
        var oneHourCookies = Math.floor(this.hourlyCust[i] * this.aveSale)
        this.hourlyCookies.push(oneHourCookies)
        this.totalCookies += oneHourCookies;
    }


}
     seattleCenter.render = function () {
         
        var storeName = document.getElementById('salesList')
        var newH = document.createElement('li');
        newH.className = ('storeName')
        newH.textContent = this.name;
        storeName.appendChild(newH)
        
        
        var list = document.getElementById('salesList');
         this.hourlyCookiesAmm();
        var nameLi = document.createElement('li');
        nameLi.textContent = this.name;
         for ( var i = 0; i < this.hourlyCookies.length; i++){
             var newLi = document.createElement('li');
             newLi.textContent = hours[i] + '- ' + this.hourlyCookies[i] + ' cookies';
             list.appendChild(newLi);
            
        };
        var listContent = document.createElement('li');
      listContent.textContent = 'Total: ' + this.totalCookies + ' cookies';
      newLi.appendChild(listContent);

    }

//================================================================================

var capitalHill = {
    name: 'Capital Hill',
    minCust: 20,
    maxCust: 38,
    aveSale: 2.3,
    hourlyCust: [],
    hourlyCookies: [],
    totalCookies: 0,


    
};

// console.log('done');

capitalHill.hourlyCustAmm = function(){
    for ( var i = 0; i < hours.length; i++){
    var custEveryHour = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    this.hourlyCust.push(custEveryHour)
    }
},

capitalHill.hourlyCookiesAmm = function(){
    this.hourlyCustAmm();
    for ( var i = 0; i < hours.length; i++){
        var oneHourCookies = Math.floor(this.hourlyCust[i] * this.aveSale)
        this.hourlyCookies.push(oneHourCookies)
        this.totalCookies += oneHourCookies;
    }


}
     capitalHill.render = function () {
         
        var storeName = document.getElementById('salesList')
        var newH = document.createElement('li');
        newH.className = ('storeName')
        newH.textContent = this.name;
        storeName.appendChild(newH)
        
        
        var list = document.getElementById('salesList');
         this.hourlyCookiesAmm();
        var nameLi = document.createElement('li');
        nameLi.textContent = this.name;
         for ( var i = 0; i < this.hourlyCookies.length; i++){
             var newLi = document.createElement('li');
             newLi.textContent = hours[i] + '- ' + this.hourlyCookies[i] + ' cookies';
             list.appendChild(newLi);
            
        };
        var listContent = document.createElement('li');
      listContent.textContent = 'Total: ' + this.totalCookies + ' cookies';
      newLi.appendChild(listContent);

    }

capitalHill.hourlyCustAmm = function(){
    for ( var i = 0; i < hours.length; i++){
    var custEveryHour = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    this.hourlyCust.push(custEveryHour)
    }
},

capitalHill.hourlyCookiesAmm = function(){
    this.hourlyCustAmm();
    for ( var i = 0; i < hours.length; i++){
        var oneHourCookies = Math.floor(this.hourlyCust[i] * this.aveSale)
        this.hourlyCookies.push(oneHourCookies)
        this.totalCookies += oneHourCookies;
    }


}
     capitalHill.render = function () {
         
        var storeName = document.getElementById('salesList')
        var newH = document.createElement('li');
        newH.className = ('storeName')
        newH.textContent = this.name;
        storeName.appendChild(newH)
        
        
        var list = document.getElementById('salesList');
         this.hourlyCookiesAmm();
        var nameLi = document.createElement('li');
        nameLi.textContent = this.name;
         for ( var i = 0; i < this.hourlyCookies.length; i++){
             var newLi = document.createElement('li');
             newLi.textContent = hours[i] + '- ' + this.hourlyCookies[i] + ' cookies';
             list.appendChild(newLi);
            
        };
        var listContent = document.createElement('li');
      listContent.textContent = 'Total: ' + this.totalCookies + ' cookies';
      newLi.appendChild(listContent);

    }

//================================================================================

var alki = {
    name: 'Alki',
    minCust: 2,
    maxCust: 16,
    aveSale: 4.6,
    hourlyCust: [],
    hourlyCookies: [],
    totalCookies: 0,


    
};

// console.log('done');

alki.hourlyCustAmm = function(){
    for ( var i = 0; i < hours.length; i++){
    var custEveryHour = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    this.hourlyCust.push(custEveryHour)
    }
},

alki.hourlyCookiesAmm = function(){
    this.hourlyCustAmm();
    for ( var i = 0; i < hours.length; i++){
        var oneHourCookies = Math.floor(this.hourlyCust[i] * this.aveSale)
        this.hourlyCookies.push(oneHourCookies)
        this.totalCookies += oneHourCookies;
    }


}
     alki.render = function () {
         
        var storeName = document.getElementById('salesList')
        var newH = document.createElement('li');
        newH.className = ('storeName')
        newH.textContent = this.name;
        storeName.appendChild(newH)
        
        
        var list = document.getElementById('salesList');
         this.hourlyCookiesAmm();
        var nameLi = document.createElement('li');
        nameLi.textContent = this.name;
         for ( var i = 0; i < this.hourlyCookies.length; i++){
             var newLi = document.createElement('li');
             newLi.textContent = hours[i] + '- ' + this.hourlyCookies[i] + ' cookies';
             list.appendChild(newLi);
            
        };
        var listContent = document.createElement('li');
      listContent.textContent = 'Total: ' + this.totalCookies + ' cookies';
      newLi.appendChild(listContent);

    }

alki.hourlyCustAmm = function(){
    for ( var i = 0; i < hours.length; i++){
    var custEveryHour = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    this.hourlyCust.push(custEveryHour)
    }
},

alki.hourlyCookiesAmm = function(){
    this.hourlyCustAmm();
    for ( var i = 0; i < hours.length; i++){
        var oneHourCookies = Math.floor(this.hourlyCust[i] * this.aveSale)
        this.hourlyCookies.push(oneHourCookies)
        this.totalCookies += oneHourCookies;
    }


}
     alki.render = function () {
         
        var storeName = document.getElementById('salesList')
        var newH = document.createElement('li');
        newH.className = ('storeName')
        newH.textContent = this.name;
        storeName.appendChild(newH)
        
        
        var list = document.getElementById('salesList');
         this.hourlyCookiesAmm();
        var nameLi = document.createElement('li');
        nameLi.textContent = this.name;
         for ( var i = 0; i < this.hourlyCookies.length; i++){
             var newLi = document.createElement('li');
             newLi.textContent = hours[i] + '- ' + this.hourlyCookies[i] + ' cookies';
             list.appendChild(newLi);
            
        };
        var listContent = document.createElement('li');
      listContent.textContent = 'Total: ' + this.totalCookies + ' cookies';
      newLi.appendChild(listContent);

    }


//================================================================================

// firstAndPike.hourlyCustAmm();
// firstAndPike.hourlyCookiesAmm();
firstAndPike.render();
SeaTacAirport.render();
seattleCenter.render();
capitalHill.render();
alki.render();