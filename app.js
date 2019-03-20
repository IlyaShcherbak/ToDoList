let list = [];

if(localStorage.getItem('todo') != undefined){
    list = JSON.parse(localStorage.getItem('todo'));
    sendDataToHTML();
}

document.getElementById('add').onclick = function(){
	let input = document.getElementById('in').value;
    let temp = {};
	if(Boolean(input)){//  !isEmpty(input)
        temp.todo = input;
        temp.check = false;
        list.push(temp);
        sendDataToHTML();
    } else alert("Enter something!");
    document.getElementById('in').value = "";
};

document.getElementById('save').onclick = function(){
    changeStatus();
    localStorage.setItem('todo', JSON.stringify(list));
};

function sendDataToHTML(){
    let out = '';
    for (let i = 0; i <list.length; i++) {
        if (list[i].check === false){
            out +=`<input type="checkbox" id="todo${i}">`;
        } else {
            out +=`<input type="checkbox" checked id="todo${i}">`;
        }
        out +=`<label for="todo${i}">${list[i].todo}</label> <br>`;
    }
    document.getElementById('out').innerHTML = out;
}

function changeStatus() {
    for (let i=0; i<list.length; i++) {
        if(document.getElementById('todo'+i).checked === true){
            list[i].check = true;
        } else{
            list[i].check = false;
        }
    }
}
