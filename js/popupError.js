const popup = document.querySelector(".popup");

function popupError(){
  popup.style.left = "50px";
  setTimeout(() => {
    popup.style.left = "-400px";
  }, 2000);
  
};
