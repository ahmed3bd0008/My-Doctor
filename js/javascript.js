var data;
window.onload = function () {
   data= openJsonFile();
};
///////////////////////////
/////main divujhx
var maindiv=document.getElementById('maindiv');
////////////////////////////////
/////////display function
function display(obj) {
    let str='';
for (const iterator of obj) {
   str+=`<div class="row pt-3">`
   str+=`<div class="col text-justify">`
      str+=  `<div class="card">`
      str+=  `<h5 class="card-header">${iterator.name}</h5>`
      str+= `<div class="card-body">`
      str+=`<div class="row">`
      str+=`<div class="col-3">`
      str+=`<img src="..." class="img-thumbnail" alt="...">`
      str+=`</div>`
      str+=`<div class="col-9">`
      str+=  `<h5 class="card-title">${iterator.disc}</h5>`
      for (const item of iterator.service) {
        str+=`<span class="badge bg-light text-dark mx-1">${item}</span>` 
      }
      str+=`<h6 class="my-3">`
      for (const item2 of iterator.workday) {
        str+=`<span class="badge bg-light text-dark mx-1">${item2}</span>` 
      }
      str+=`الايام المتواجد بها الدكتوز</h6>`
      str+=     `<a href="#" class="btn btn-primary" id=${iterator.id} onclick="doctordetails(${iterator.id})">حجز</a>`
      str+= ` </div>`
      str+= ` </div>`
      str+=`</div>`
      str+= `</div>`
      str+= `</div>`
      str+=`</div>`
maindiv.innerHTML=str;

}
}
///////////////////////////////////
///////fetch data
async function openJsonFile() {
    result = await fetch("./data/json.json");
    result = await result.json() 
    data=result;
    display(result)

}
/////////////////////////////////////////
///////get id details 
function doctordetails(id)
{
    alert(id)
}
////////////////////////////////////////////
//////////
function numberOfCheck(begin,end,wait)
{
   let sum =end-begin
   sum=sum / wait
   return sum;
}