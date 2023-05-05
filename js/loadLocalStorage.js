var saved = localStorage.getItem('toDoList');

if(saved) {  
    var x = JSON.parse(saved);
    x.forEach(function (value) {
        var inputCase = value.case;
        var nowFormat = value.date;
        var inputNotes = value.notes;
        var inputImage = value.image;
        createToDoListItem(inputCase, nowFormat, inputNotes, inputImage);
    });
}