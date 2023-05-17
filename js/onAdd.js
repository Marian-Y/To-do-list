function onAdd() {
    var toDoListElement = {};
    toDoListElement.case = inputCaseValue;
    toDoListElement.date = nowFormat;
    toDoListElement.notes = inputNotes.value;
    toDoListElement.image = readerResult;

    toDoList.push(toDoListElement);

    localStorage.setItem('toDoList', JSON.stringify(toDoList));

    createToDoListItem(inputCaseValue, nowFormat, inputNotes.value, readerResult);

    inputCase.value = '';
    inputStartOfExecution.value = '';
    inputNotes.value = '';
    // readerResult = ``;
}