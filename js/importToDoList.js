var importToDoList = document.getElementById(`importFile`);

importToDoList.addEventListener("change", function () {
    localStorage.clear();
    let fileReader = new FileReader();
    fileReader.addEventListener("load", () => {
        let parsedJSON = fileReader.result;
        lssave(parsedJSON);
    });
    fileReader.readAsText(document.querySelector('.importFile').files[0]);
    importDeleteToDoListItem();
});

function lssave(json) {
    localStorage.setItem('toDoList', json);
    toDoList = JSON.parse(json);
    toDoList.forEach(function (value) {
        var inputCase = value.case;
        var nowFormat = value.date;
        var inputNotes = value.notes;
        var inputImage = value.image;
        createToDoListItem(inputCase, nowFormat, inputNotes, inputImage);
    });
}

