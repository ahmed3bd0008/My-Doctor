var data;
///window.onload = function () {
var start = true;
if (start) {
  data = openJsonFile();
}
//};
///////////////////////////
/////main divujhx
var maindiv = document.getElementById('maindiv');
////////////////////////////////
/////////display function
var str = '';
function display(obj) {

  for (const iterator of obj) {
    str += `<div class="row pt-3">`
    str += `<div class="col text-justify">`
    str += `<div class="card">`
    str += `<h5 class="card-header">${iterator.name}</h5>`
    str += `<div class="card-body">`
    str += `<div class="row">`
    str += `<div class="col-3">`
    str += `<img src="..." class="img-thumbnail" alt="...">`
    str += `</div>`
    str += `<div class="col-9">`
    str += `<h5 class="card-title">${iterator.disc}</h5>`
    for (const item of iterator.service) {
      str += `<span class="badge bg-light text-dark mx-1">${item}</span>`
    }
    str += `<h6 class="my-3">`
    for (const item2 of iterator.workday) {
      str += `<span class="badge bg-light text-dark mx-1">${item2}</span>`
    }
    str += `الايام المتواجد بها الدكتوز</h6>`
    str += `<a href="#" class="btn btn-primary" id=${iterator.id} onclick="doctordetails(${iterator.id})">حجز</a>`
    str += ` </div>`
    str += ` </div>`
    str += `</div>`
    str += `</div>`
    str += `</div>`
    str += `</div>`

    maindiv.innerHTML = str;

  }
}
///////////////////////////////////
///////fetch data
async function openJsonFile() {
  result = await fetch("./data/json.json");
  result = await result.json()
  data = result;
  display(result)

}
/////////////////////////////////////////
///////get id of doctor 
function doctordetails(id) {
  start = false;
  for (const iterator of data) {
    if (iterator.id == id) {

      displayDetails(iterator)
    }
  }

}
////////////////////////////////////////////
//////////
function numberOfCheck(begin, end, wait) {
  let sum = end - begin
  sum = sum / wait
  return sum;
}
//////////////////////////////////////
//////////
var reservationdiv = document.getElementById('maindiv');
function displayDetails(obj) {

  let str = "";
  str += `<div class="card-body">`
  str += `<div class="row justify-content-center bg-white" >`
  str += ` <div class="col-2"><img src="img/person.jpg" class="img-thumbnail" alt="..."></div>`
  for (const iterator of obj.workday) {
    str += ` <div class="col-1">`
    str += `   <h6>${iterator}</h6>`

    var starthour = obj.start;
    // str+=`<div class="col-1"></div>`
    for (let i = 0; i < numberOfCheck(obj.start, obj.end, obj.wait); i++) {

      str += ` <input class="form-check-input" type="checkbox" name="radioNoLabel" id="radioNoLabel1" value="${starthour}"aria-label="...">`
      str += `<label class="mr-5">${convertNumToTime(starthour)}</label>`

      starthour += obj.wait
    }
    str += `</div>`

  }

  str += `<div class="col-5">`
  str += `<h5 class="card-title">${obj.name}</h5>`
  str += ` <h5 class="card-title">${obj.disc}</h5>`
  for (const item of obj.service) {
    str += `<span class="badge bg-light text-dark mx-1">${item}</span>`
  }



  str += `</h6>`
  str += `<a href="#" class="btn btn-primary" id="1" onclick="doctordetails(1)">حجز</a>`

  str += ` </div>`
  str += `</div>`
  str += `</div>`
  reservationdiv.innerHTML = str
}
////////////////////////////////////////////////////////
//convert number to hour++
function convertNumToTime(number) {
  // Check sign of given number
  var sign = (number >= 0) ? 1 : -1;

  // Set positive value of number of sign negative
  number = number * sign;

  // Separate the int from the decimal part
  var hour = Math.floor(number);
  var decpart = number - hour;

  var min = 1 / 60;
  // Round to nearest minute
  decpart = min * Math.round(decpart / min);

  var minute = Math.floor(decpart * 60) + '';

  // Add padding if need
  if (minute.length < 2) {
    minute = '0' + minute;
  }

  // Add Sign in final result
  sign = sign == 1 ? '' : '-';

  // Concate hours and minutes
  time = sign + hour + ':' + minute;

  return time;
}