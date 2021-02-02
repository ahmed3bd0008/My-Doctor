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
for (const iterator of obj) {
    let alinktag=document.createElement('a')
    alinktag.append(`${iterator.name}`)
    alinktag.id=iterator.id;
    alinktag.addEventListener('click',doctordetails)
    let h1tag=document.createElement('h1')
    h1tag.appendChild(alinktag)
    maindiv.appendChild(h1tag)
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
function doctordetails()
{
    alert(this.id)
}