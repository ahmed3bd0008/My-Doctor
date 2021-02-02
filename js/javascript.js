var data;
window.onload = function () {
   data= openJsonFile();
};

function display() {

  openJsonFile()
}

async function openJsonFile() {
    result = await fetch("./data/json.json");
    result = await result.json()
    for (const iterator of result) {
        console.log(iterator)
        selectlist.innerHTML += `<option>${iterator.name}</option>`
    }

    var btn1 = document.createElement('button')


}
/////////CALL Method:fetch
