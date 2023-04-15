
var counterElement = document.getElementById(`counter`);

var inputCase = document.getElementById(`case`);
var inputStartOfExecution = document.getElementById(`startOfExecution`);
var inputNotes = document.getElementById(`notes`);

const but = document.getElementById('btn');

const errorCase = document.getElementById(`errorCase`);
const errorTime = document.getElementById(`errorTime`);

but.disabled = true;

var toDoListNode = document.getElementById(`list`);

var toDoList = [];
let counterId = 0;
let counterElementLi = 0;

// Привязкада до теперішньої і майбутьої дати 
var nowDate = new Date();
var futDate = new Date();

function currentDate(date) {
      var pad = function(num) {
          return (num < 10 ? '0' : '') + num;
      };

  return date.getFullYear() +
      '-' + pad(date.getMonth() + 1) +
      '-' + pad(date.getDate()) +
      'T' + pad(date.getHours()) +
      ':' + pad(date.getMinutes());
}

function futureDate(date) {
      var pad = function(num) {
          return (num < 10 ? '0' : '') + num;
      };

  return date.getFullYear() + 1 +
      '-' + pad(date.getMonth() + 1) +
      '-' + pad(date.getDate()) +
      'T' + pad(date.getHours()) +
      ':' + pad(date.getMinutes());
}

var firstOnChange;
var secondOnChange; 

inputCase.onchange = function(){
  switch(true){
    case inputCase.value === "":
      but.disabled = true;
      firstOnChange = 0; 
    break;
    case inputCase.value.length >= 30:
      but.disabled = true;
      firstOnChange = 0; 
      inputCase.value = '';
      errorCase.innerHTML = `Довжина рядка не може бути більше 30 символів`;
    break;
    default:
      firstOnChange = 1; 
      if(firstOnChange + secondOnChange == 2){
        but.disabled = false;
      }
    break;
  }
}

inputStartOfExecution.onchange = function(){
  var now = currentDate(nowDate);
  var future = futureDate(futDate);

  switch(true){
    case inputStartOfExecution.value <= now:
      but.disabled = true;
      secondOnChange = 0; 
      inputStartOfExecution.value = '';
      errorTime.innerHTML = `Минулу дату вказувати не можна`;
    break;
    case inputStartOfExecution.value >= future:
      but.disabled = true;
      secondOnChange = 0; 
      inputStartOfExecution.value = '';
      errorTime.innerHTML = `Більше ніж на рік планувати не можна`;
    break;
    default:
      secondOnChange = 1; 
      if(firstOnChange + secondOnChange == 2){
        but.disabled = false;
      }
    break;
  }
}

function onAdd () {
  but.disabled = true;

  toDoList.push(inputCase.value, inputStartOfExecution.value, inputNotes.value);
  createToDoListItem(inputCase.value, inputStartOfExecution.value, inputNotes.value);

  inputCase.value = '';
  inputStartOfExecution.value = '';
  inputNotes.value = ''; 
}

function createToDoListItem (inputCase, inputStartOfExecution, inputNotes) {

let newId = counterId;
counterId += 1;

const itemNode = document.createElement(`li`); // <li></li>
const itemCase = document.createElement(`p`); // <p></p>  
const itemStartOfExecution = document.createElement(`p`); // <p></p>
const itemNotes = document.createElement(`div`); // <p></p>

  // `Текст 1 рядка`
const itemNodeTextInputCase = document.createTextNode(inputCase);
// `2024-03-12T12:03`
const itemNodeTextInputStartOfExecution = document.createTextNode(inputStartOfExecution);
// `Текст 3 рядка`
const itemNodeTextInputNotes = document.createTextNode(inputNotes);

itemNode.id = newId; // <li id=``></li>
itemCase.id = `liCase`; // <p id=`liCase`></p>     
itemStartOfExecution.id = `liStartOfExecution`; // <p id=`liStartOfExecution`></p>   

const itemNodeButton = document.createElement(`button`); // <button></button>
itemNodeButton.innerHTML = 'delete_forever'; //  <button>delete_forever</button>
itemNodeButton.onclick = () => deleteToDoListItem(newId);  // <button onclick="onAdd()" >delete_forever</button>
itemNodeButton.className = `material-symbols-outlined`; // <button class="material-symbols-outlined" onclick="onAdd()" >delete_forever</button>


itemCase.innerHTML = 'Справа: '; // <p>Справа: </p>
itemCase.appendChild(itemNodeTextInputCase); // <p>Справа: Текст з рядка</p>

itemStartOfExecution.innerHTML = 'Початок виконання: '; // <p>Початок виконання: </p>
itemStartOfExecution.appendChild(itemNodeTextInputStartOfExecution); // <p>Початок виконання: Текст з рядка</p>

// itemNotes.appendChild(itemNodeTextInputNotes); // <p>Текст з рядка</p>
                                    // <li id="0">
itemNode.appendChild(itemNodeButton); // <button class="material-symbols-outlined">delete_forever</button>

itemNode.appendChild(itemCase); // <p id="liCase">Справа: 12345678901234567890123456789</p>
itemNode.appendChild(itemStartOfExecution); // <p id="liStartOfExecution">Початок виконання: 2023-11-11T11:11</p>

if(itemNodeTextInputNotes.length > 1){
  const accordionUl = document.createElement(`ul`);
  const accordionLi = document.createElement(`li`);
  const accordionInput = document.createElement(`input`);
  const accordionI = document.createElement(`i`);
  const accordionH2 = document.createElement(`h2`);
  const accordionP = document.createElement(`p`);

  itemNotes.id = "faq";

  accordionInput.type = "checkbox";    

  accordionH2.innerHTML = 'Примітки: ';
  accordionP.appendChild(itemNodeTextInputNotes);

  itemNode.appendChild(itemNotes);
  itemNotes.appendChild(accordionUl);
  accordionUl.appendChild(accordionLi);
  accordionLi.appendChild(accordionInput);
  accordionLi.appendChild(accordionI);
  accordionLi.appendChild(accordionH2);
  accordionLi.appendChild(accordionP);
}
  
toDoListNode.appendChild(itemNode);

const directChildren = toDoListNode.children.length;
counterElement.innerHTML = directChildren;
localStorage.setItem('toDoListNode', toDoListNode.innerHTML);
save();
}

function save() {
  
  localStorage.setItem('counterId', counterId);
}

var saved = localStorage.getItem('toDoListNode');
var counterSaved = localStorage.getItem('counterId');

if(saved) {  
  toDoListNode.innerHTML = saved;
  counterId = Number(counterSaved);

  const directChildren = toDoListNode.children.length;
  counterElement.innerHTML = directChildren;
}

function deleteToDoListItem (id) {    
  const element = document.getElementById(id);
  element.remove();

  const directChildren = toDoListNode.children.length;
  counterElement.innerHTML = directChildren;

  localStorage.setItem('toDoListNode', toDoListNode.innerHTML);
}

(function () {
  var time = {
    init: function () {
      this.checkbox = $("#time");
      this.bindEvents();
      this.changeTime();
    },
    bindEvents: function () {
      $(this.checkbox).change(this.changeTime.bind(this));
    },
    changeTime: function () {
      if (this.checkbox.is(":checked")) {
        $("body").removeClass().addClass("day");
        $("#toDoList").removeClass().addClass("day");
      } else {
        $("body").removeClass().addClass("night");
        $("#toDoList").removeClass().addClass("night");
      }
    }
  };
  time.init();
})();
