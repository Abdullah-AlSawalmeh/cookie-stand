'use strict';

function header(array) {
  let working_hors = array ;
  let table = document.getElementById('render');
  let trh = document.createElement('tr');
  table.append(trh);
  for (let i = 0; i < working_hors.length; i++) {
    trh.innerHTML += '<th>' + working_hors[i] + '   ' + '</th>';
  }
}

function footer() {
  let table = document.getElementById('render');
  let trf = document.createElement('tr');
  table.append(trf);
  trf.innerHTML = '<td>' + '   ' + '</td>';
  for (let i = 0; i < 14; i++) {
    trf.innerHTML += '<td>' + (Seattle.result[i] + Tokyo.result[i] + Dubai.result[i] + Paris.result[i] + Lima.result[i]) + '   ' + '</td>';
  }
  trf.innerHTML += '<td>' + (Seattle.sum + Tokyo.sum + Dubai.sum + Paris.sum + Lima.sum) + '   ' + '</td>';
}

function Salmon_cookie(city_name, min_cust, max_cust, Avg_Cookie) {
  this.city_name= city_name;
  this.min_cust= min_cust;
  this.max_cust = max_cust;
  this.Avg_Cookie= Avg_Cookie;
  this.result = [];
  this.sum = 0;
}
/////////////////////////
Salmon_cookie.prototype.number_of_cutomers_hourly = function () {
  let number_of_customers = Math.floor(Math.random() * (this.max_cust - this.min_cust) + this.min_cust);
  // console.log(number_of_customers);
  return number_of_customers;
};
/////////////////////////
Salmon_cookie.prototype.simulated_amount_of_cookies = function () {
  return Math.floor(this.Avg_Cookie * this.number_of_cutomers_hourly());
};
/////////////////////////
Salmon_cookie.prototype.render = function () {
  let table = document.getElementById('render');
  let trb = document.createElement('tr');
  trb.innerHTML = '<td>' + this.city_name + '</td>';
  table.append(trb);
  for (let i = 0; i < 14; i++) {
    this.result.push(this.simulated_amount_of_cookies());
    this.sum = this.sum + this.result[i];
    trb.innerHTML += '<td>' + this.result[i] + '</td>';
    console.log(this.result[i]);
  }
  trb.innerHTML += '<td>' + this.sum + '</td>';
  console.log(this.sum);
};
/////////////////////////


header(['country','6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Daily Location Total']);

let Seattle = new Salmon_cookie('Seattle', 23, 65, 6.3);
Seattle.render();
let Tokyo = new Salmon_cookie('Tokyo', 3, 24, 1.2);
Tokyo.render();
let Dubai = new Salmon_cookie('Dubai', 11, 38, 3.7);
Dubai.render();
let Paris = new Salmon_cookie('Paris', 20, 38, 2.3);
Paris.render();
let Lima = new Salmon_cookie('Lima', 2, 16, 4.6);
Lima.render();

footer();
