const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addtask(){
    if(inputBox.value === ''){
        alert("You Must Write Something!");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
}