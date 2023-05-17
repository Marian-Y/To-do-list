var counterElement = document.getElementById(`counter`),
    inputNotes = document.getElementById(`notes`),
    toDoListNode = document.getElementById(`list`);

var toDoList = localStorage.getItem('toDoList') ? JSON.parse(localStorage.getItem('toDoList')) : [];
var counterElementLi = 0;

function createToDoListItem(inputCase, newFormat, inputNotes, inputImage) {

  let newId = Math.floor(Math.random() * 9999999);

  const itemDiv = document.createElement(`div`);
  const itemNode = document.createElement(`li`);
  const itemCase = document.createElement(`p`);
  const itemStartOfExecution = document.createElement(`p`);
  const itemNotes = document.createElement(`div`);
  const img = document.createElement(`img`);
  const spanCaseP = document.createElement(`span`);
  const spanItemStartOfExecutionP = document.createElement(`span`);

  const itemNodeTextInputCase = document.createTextNode(inputCase);
  const itemNodeTextInputStartOfExecution = document.createTextNode(newFormat);
  const itemNodeTextInputNotes = document.createTextNode(inputNotes);

  (function () {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    itemNode.style.backgroundColor = "#" + randomColor;
})();

  itemNode.id = newId;
  itemCase.id = `liCase`;  
  spanCaseP.className = `liCaseP`;  
  itemStartOfExecution.id = `liStartOfExecution`;
  spanItemStartOfExecutionP.className = `liStartOfExecutionP`;
  img.id = `image`;
  
  const itemNodeButton = document.createElement(`button`);
  itemNodeButton.innerHTML = 'delete_forever'; 
  itemNodeButton.onclick = () => deleteToDoListItem(newId); 
  itemNodeButton.className = `material-symbols-outlined`; 

  itemCase.innerHTML = 'Справа: '; 
  itemDiv.appendChild(itemCase);
  itemCase.appendChild(spanCaseP);
  spanCaseP.appendChild(itemNodeTextInputCase); 

  itemStartOfExecution.innerHTML = 'Початок виконання: '; 
  itemDiv.appendChild(itemStartOfExecution);
  itemStartOfExecution.appendChild(spanItemStartOfExecutionP);
  spanItemStartOfExecutionP.appendChild(itemNodeTextInputStartOfExecution); 

  if (inputImage){   
    img.src = inputImage;
    itemNode.appendChild(img);
    readerResult = ``;
    itemDiv.style.position = `absolute`;
    itemDiv.style.display = `inline-block`;
  } 

  itemNode.appendChild(itemNodeButton); 
  itemNode.appendChild(itemDiv); 

  if (itemNodeTextInputNotes.length > 1) {
    const accordionUl = document.createElement(`ul`); 
    const accordionLi = document.createElement(`li`); 
    const accordionInput = document.createElement(`input`);
    const accordionI = document.createElement(`i`); 
    const accordionH2 = document.createElement(`h2`); 
    const accordionP = document.createElement(`p`); 

    itemNotes.id = "faq"; 

    accordionLi.style.backgroundColor = `#ffffff00`;

    accordionInput.type = "checkbox";
    accordionInput.checked = true; 

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
}



// To Do list v2

// 1 Переробити збереження на остнові масиву обєктів задачів ([{name: `awd`, date: `2023`, nores: `awdasda`}])
// +- 2 Розділити по файлам
// + 3 Пофіксити формат дати 
// + 4 прибрати counterId з localStorage і генерувати за допомогою функціх генераціх рандомних чисел
// +- 5 Дати можливість прикріплювати фото 
// +- 6 Можливіть імпорувати ToDoList в файли 
// +- 6.2 можливіть експортувати з файла в ToDoList 
// 7 поправити дизайн 


// JSON.stringify(object)      Перетворити обєкт в стрінгу
// JSON.parse(string)         Реверс команди stringfy перетворити стрінгу на обєкт
