var inputCase = document.getElementById(`case`),
  inputStartOfExecution = document.getElementById(`startOfExecution`),
  errorPopup = document.getElementById(`popupP`);  

var nowDate = new Date();
var futDate = new Date();

function currentDate(date) {
  var pad = function (num) {
    return (num < 10 ? '0' : '') + num;
  };

  return date.getFullYear() +
    '.' + pad(date.getMonth() + 1) +
    '.' + pad(date.getDate()) +
    ' ' + pad(date.getHours()) +
    ':' + pad(date.getMinutes());
}

function futureDate(date) {
  var pad = function (num) {
    return (num < 10 ? '0' : '') + num;
  };

  return date.getFullYear() + 1 +
    '-' + pad(date.getMonth() + 1) +
    '-' + pad(date.getDate()) +
    'T' + pad(date.getHours()) +
    ':' + pad(date.getMinutes());
}

var now = currentDate(nowDate);
var future = futureDate(futDate);
var inputCaseValue;
var nowFormat;

function validation() {
  inputCaseValue = inputCase.value.trim();  
  var newFormat = inputStartOfExecution.value;

  function currentDate(newFormat) {
    var pad = function (num) {
      return (num < 10 ? '0' : '') + num;
    };

    return pad(new Date(newFormat).getFullYear()) +
      '.' + pad(Number(new Date(newFormat).getMonth() + 1)) +
      '.' + pad(new Date(newFormat).getDate()) +
      ' ' + pad(new Date(newFormat).getHours()) +
      ':' + pad(new Date(newFormat).getMinutes());
  }

  nowFormat = currentDate(newFormat);

  switch (true) {
    case inputCaseValue === "":
      // inputCase.value = '';
      errorPopup.innerHTML = `Вкажіть справу`;
      popupError();
      break;
    case inputCaseValue.length >= 30:
      // inputCase.value = '';
      errorPopup.innerHTML = `Довжина рядка не може бути 30 символів`;
      popupError();
      break;
    case inputStartOfExecution.value === "":
      // inputCase.value = '';
      errorPopup.innerHTML = `Вкажіть дату`;
      popupError();
      break;
    case nowFormat <= now:
      // inputStartOfExecution.value = '';
      errorPopup.innerHTML = `Ця дата застаріла`;
      popupError();
      break;
    case inputStartOfExecution.value >= future:
      // inputStartOfExecution.value = '';
      errorPopup.innerHTML = `Більше ніж на рік планувати не можна`;
      popupError();
      break;
    default:
      replayControl();
      break;
  }
}