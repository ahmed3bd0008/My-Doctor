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

function display(obj) {
  var str = '';
  let city = `<option selected>not select</option>`
  for (const iterator of obj) {
    city = `option selected>${iterator.location}</option>`
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
  uploadJsonFile(data2)
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
  str += `<div class="row justify-content-center bg-white" id="ttt">`
  str += ` <div class="col-2"><img src="img/person.jpg" class="img-thumbnail" alt="..."></div>`

  //loop for day

  for (const iterator of obj.workday) {
    str += ` <div class="col-1">`
    str += `   <h6>${iterator}</h6>`

    var starthour = obj.start;

    // loop for checkbox

    for (let i = 0; i < numberOfCheck(obj.start, obj.end, obj.wait); i++) {

      str += ` <input class="form-check-input" type="checkbox" name="radioNoLabel" id="${iterator + "," + convertNumToTime(starthour) + "," + 1}" value="${convertNumToTime(starthour)}"aria-label="...">`
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

  str += ` </div>`
  str += `<a href="#" class="btn btn-primary" id="1" onclick="GetSelected()" name="strtt[]">حجز</a>`

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

/////////////////////////////////////////
///get id

function GetSelected() {
  //Create an Array.
  var selected = new Array();

  //Reference the Table.
  var tblFruits = document.getElementById("ttt");

  //Reference all the CheckBoxes in Table.
  var chks = tblFruits.getElementsByTagName("INPUT");

  // Loop and push the checked CheckBox value in Array.
  for (var i = 0; i < chks.length; i++) {
    if (chks[i].checked) {
      selected.push(chks[i].id);
    }
  }




  //Display the selected CheckBox values.
 
};


const data2 = { username: 'example' };



async function uploadJsonFile(data2) {
  result = await fetch("./data/wait.json", {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}
//////////////////////////////////////////////////////////////////////////
/////////array of المحافطات
var locationName =
  [
    "المنيا", "القاهره", "اسيوط", "الجيزه", "الاسكندريه",
  ]
/////////////////////////////////////////////////////////////////////
//////specialist
var specilizetype =
  [
    "جراحه تجميل", "العظام", "قلب", "جراحه", "انف واذن وحنجرة"
    , "اصابات ملاعب ومناظير مفاصل", "دكتور مخ واعصاب", "دكتور جلدية",
    "دكتور اسنان", "  دكتور اطفال وحديثي الولادة", "  دكتور عظام  ",
    "دكتور نساء وتوليد    ", "دكتور انف واذن وحنجرة ",
    "دكتور نفسي ",
  ]
/////////////////////////////////////////////////////////////////
///////function to display location
var citylocation = document.getElementById("city")
var city = `<option>city not select</option>`;
for (const iterator of locationName) {
  city += `<option id=${iterator}>${iterator}</option>`
}
citylocation.innerHTML = city;

var doctorspecial = document.getElementById("specialty")
var specialdoc = `<option>specialise not select</option>`
for (const iterator of specilizetype) {
  specialdoc += `<option>${iterator}</option>`
}
doctorspecial.innerHTML = specialdoc;

//////////////////////////////////////////////////////////////////////////
////////////////search
var searchbtn = document.getElementById("searchbtn");
function searchfun() {
  search = data;
 // alert(search)
 ////txt
  var doctorname = document.getElementById("doctorname").value
  var search = data;
  if (doctorname !== "") {
    search = searchbyname(doctorname, search)
    display(search)

  }
  ////specialist select
  var specialty = document.getElementById("specialty")
//get select option value
  var opt = specialty.options[specialty.selectedIndex];
  opt = opt.value
  if (opt != "specialise not select") {
    search = searchbyspecialist(opt, search)
    display(search)
  }
  var city = document.getElementById("city");
  var optcity = city.options[city.selectedIndex];
  optcity = optcity.value
   if (optcity != "city not select") {
    //alert(search)
    search = searchbycity(optcity, search)
    display(search)
  }
  if (search.length==0) {
    alert("ther is no result")
  }
}
///////////by name
function searchbyname(str, searchlist) {
  let searchresult = new Array();
  for (const iterator of searchlist) {

    if (iterator.name.search(str) >= 0) {
     // alert(iterator)

      searchresult.push(iterator)

    }
  }
  return searchresult
}
////////search by specialist
function searchbyspecialist(str, searchlist) {
  let searchresult = new Array();
  for (const iterator of searchlist) {

    if(iterator.type.search(str) >= 0) {
      searchresult.push(iterator)

    }
  }
 // alert(searchresult)
  return searchresult
}
/////// search by city
function searchbycity(str, searchlist)
{
  let searchresult = new Array();
  //alert (searchlist)
  for (const iterator of searchlist) {

    if(iterator.location.search(str) >= 0) {
     // alert(iterator)
      searchresult.push(iterator)

    }
  }
  return searchresult
}
/////// search 
