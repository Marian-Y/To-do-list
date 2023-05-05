var deleteOldListElement = document.getElementById('list'),
  tagDeleteOldListElement = deleteOldListElement.getElementsByTagName('li');


function deleteToDoListItem(id) {
  var caseString = document.getElementById(id).getElementsByTagNameNS("*", "span")[0].outerText;
  var dateString = document.getElementById(id).getElementsByTagNameNS("*", "span")[1].outerText;

  var deleteAnArrayElement = toDoList.filter(value => value.case !== caseString || value.date !== dateString);

  toDoList = deleteAnArrayElement;
  localStorage.setItem('toDoList', JSON.stringify(toDoList));

  const element = document.getElementById(id);
  element.remove();

  localStorage.setItem('toDoList', JSON.stringify(deleteAnArrayElement));

  const directChildren = toDoListNode.children.length;
  counterElement.innerHTML = directChildren;
}




function importDeleteToDoListItem() {
  for (var i = tagDeleteOldListElement.length - 1; i >= 0; --i) {
    tagDeleteOldListElement[i].remove();
  }
  const directChildren = toDoListNode.children.length;
  counterElement.innerHTML = directChildren;
}