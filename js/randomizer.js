let newId = Math.floor(Math.random() * 9999999);

const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    itemNode.style.backgroundColor = "#" + randomColor;

  };