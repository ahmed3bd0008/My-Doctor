window.onload = function () {
    display();
};

function display() {

}
async function openJsonFile() {
    async function getSelectElement() {
        result = await fetch("../josn/json.json");
        result = await result.json()
        alert(result)
        for (const iterator of result) {
            console.log(iterator)
            selectlist.innerHTML += `<option>${iterator.name}</option>`
        }

        var btn1 = document.createElement('button')

        btn1.addEventListener('click', btnclick)
        btn1.append("show")
        document.getElementById('selectdiv').appendChild(btn1);



    }
}
openJsonFile()
async function getSelectElement() {
    result = await fetch("E:\home\js\json.json");
    result = await result.json()
    alert(result)
    for (const iterator of result) {
        console.log(iterator)
        selectlist.innerHTML += `<option>${iterator.name}</option>`
    }

    var btn1 = document.createElement('button')

    btn1.addEventListener('click', btnclick)
    btn1.append("show")
    document.getElementById('selectdiv').appendChild(btn1);



}
/////////CALL Method:fetch
getSelectElement()