'use strict';
// alert("sdfds")
// eslint-disable-next-line no-unused-vars
// let Seattle = {
//   city_name: 'Seattle',
//   min_cust: 23,
//   max_cust: 65,
//   Avg_Cookie: 6.3,
//   working_hors: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   result: [],
//   number_of_cutomers_hourly: function () {
//     let number_of_customers = Math.floor(Math.random() * (this.max_cust - this.min_cust) + this.min_cust);
//     // console.log(number_of_customers);
//     return number_of_customers;
//   },
//   simulated_amount_of_cookies: function () {
//     return Math.floor(this.Avg_Cookie * this.number_of_cutomers_hourly());
//   },
//   show_the_result: function () {
//     let sum = 0;
//     let element = document.getElementById(this.city_name);
//     for (let i = 0; i < this.working_hors.length; i++) {
//       this.result.push(this.simulated_amount_of_cookies());
//       sum = sum + this.result[i];
//       let tag = document.createElement('li');
//       tag.innerHTML = this.working_hors[i] + ' ' + this.result[i];
//       element.appendChild(tag);
//       // console.log(this.working_hors[i] + ' ' + this.simulated_amount_of_cookies());
//     }
//     let tag = document.createElement('li');
//     tag.innerHTML = 'Total is : ' + sum;
//     element.appendChild(tag);
//     console.log(sum);
//   },
// };


function Seattle(city_name, min_cust, max_cust, Avg_Cookie) {
  this.city_name= city_name;
  this.min_cust= min_cust;
  this.max_cust = max_cust;
  this.Avg_Cookie= Avg_Cookie;
  this.working_hors= ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
  this.result= [];
  this.number_of_cutomers_hourly = function () {
    let number_of_customers = Math.floor(Math.random() * (this.max_cust - this.min_cust) + this.min_cust);
    // console.log(number_of_customers);
    return number_of_customers;
  };
  this.simulated_amount_of_cookies = function () {
    return Math.floor(this.Avg_Cookie * this.number_of_cutomers_hourly());
  };
  this.show_the_result = function () {
    let sum = 0;
    let element = document.getElementById(this.city_name);
    for (let i = 0; i < this.working_hors.length; i++) {
      this.result.push(this.simulated_amount_of_cookies());
      sum = sum + this.result[i];
      let tag = document.createElement('li');
      tag.innerHTML = this.working_hors[i] + ' ' + this.result[i];
      element.appendChild(tag);
      // console.log(this.working_hors[i] + ' ' + this.simulated_amount_of_cookies());
    }
    let tag = document.createElement('li');
    tag.innerHTML = 'Total is : ' + sum;
    element.appendChild(tag);
    console.log(sum);
  };
}

let SeattleObj = new Seattle('Seattle', 23, 65, 6.3);
SeattleObj.show_the_result();

