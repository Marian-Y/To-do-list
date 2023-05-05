var allSpanString = document.getElementById('list').getElementsByTagNameNS("*", "span");


function replayControl() {
    var lengthSpanString = allSpanString.length / 2;
    let firstIndex = 0;
    let secondIndex = 1;
    var replayValidation;

    for (var i = 0; i < lengthSpanString; i++) {          
        var firstSpan = allSpanString[firstIndex].outerText,
            secondSpan = allSpanString[secondIndex].outerText;

        if (inputCaseValue ==  firstSpan && nowFormat == secondSpan) {
            replayValidation = false;
            break;
        }     

        firstIndex += 2;
        secondIndex += 2;
    }
    if(replayValidation == false){
        errorPopup.innerHTML = `Така справа уже існує`;
        popupError();
    } else {        
        onAdd();
    }

} 