var input = document.getElementById(`text`);
var toDoListNode = document.getElementById(`toDoList`);

var toDoList = [];
let counter = 0;

function onAdd () {
    toDoList.push(input.value);
    createToDoListItem(input.value);
}

function createToDoListItem (text) {
    let newId = counter
    counter += 1
    // <li></li>
    const itemNode = document.createElement(`li`);
    // text
    const itemNodeText = document.createTextNode(text);
    // <li id=``></li>
    itemNode.id = newId;

    // <button></button>
    const itemNodeButton = document.createElement(`button`);
    //  <button>Видалити</button>
    itemNodeButton.innerHTML = 'Видалити';
    // <button onclick="onAdd()" >Видалити</button>
    itemNodeButton.onclick = () => deleteToDoListItem(newId);
    
    // <li>text</li>
    itemNode.appendChild(itemNodeText);
    
    // <li>text <button onclick="onAdd()">Видалити</button></li>  
    itemNode.appendChild(itemNodeButton);
    toDoListNode.appendChild(itemNode);

    
}

function deleteToDoListItem (id) {    
    console.log(id);
    var deleteNode = document.getElementById(id);
    console.log(deleteNode);
    deleteNode.remove();
}