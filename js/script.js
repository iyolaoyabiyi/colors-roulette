// Buttons
const allBtns = document.querySelector(".btns");
const delayBtn = allBtns.querySelector('#delay-btn');
// Time Input
const inputContainer = document.getElementById('inp-container');
const timeInp = document.getElementById('time-input');
// Color Display Container
const displayPort = document.getElementById('display-portal');
// Colors List Container
const colorsContainer = document.getElementById("colors-container");
const colorsListElement = document.getElementById("all-colors");
// Stats
const stats = document.querySelectorAll("#stats p span");
const gStatusElement = stats[0];
const gDelayElement = stats[1];
const gColorsAmountElement = stats[2];
//  Color Values Element
const colorHex = document.getElementById('colorHex');

// Global Variables
let isGenerating = false;
let colorInterval;
let delay = 1000;
let totalColors = 0;

// function to generate a random color
const getRandomColor = () => {
  const hexCodes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let hex = '';
  for(let i = 0; i < 6; i++) {
    const randomNum = Math.floor(Math.random() * 16);
    hex += hexCodes[randomNum];
  }
  return `#${hex}`;
}
// function to change colors in ui
const changeElementColors = color => {
  displayPort.style.background = color;
  colorHex.style.color = color;
  colorHex.innerText = color;
}
const changeColor = () => {
  const randomColor = getRandomColor();
  changeElementColors(randomColor);

  colorsContainer.style.display = "flex";
  colorsListElement.innerHTML += `<li>${randomColor}</li>`;
  totalColors += 1;
  gColorsAmountElement.innerText = totalColors;
  colorsListElement.querySelectorAll('li').forEach(colorItem => {
    const color = colorItem.textContent;
    colorItem.style.color = color;
    colorItem.addEventListener("click", () => {
      changeElementColors(color);
    });
    colorItem.addEventListener("mouseenter", () => {
      colorItem.style.color = `${color}88`;
    });
    colorItem.addEventListener("mouseleave", () => {
      colorItem.style.color = `${color}`;
    });
  });
}
const startGenerating = () => {
  gDelayElement.innerText = delay;
  inputContainer.style.display = 'none';
  delayBtn.textContent = 'set delay';
  gStatusElement.innerText = "Generating...";
  timeInp.value = "";
  if(!isGenerating) {
    colorInterval = setInterval(changeColor, delay);
    isGenerating = true;
  }
}
// Function to stop 
const stopGenerating = () => {
  if(isGenerating) {
    clearInterval(colorInterval);
    isGenerating = false;
    gStatusElement.innerText = "Stopped generating";
  }
}
const resetChanges = () => {
  stopGenerating();
  delay = 1000;
  totalColors = 0;
  gDelayElement.innerHTML = delay;
  gColorsAmountElement.innerText = totalColors;
  colorsListElement.innerHTML = "";
  colorsContainer.style.display = "none";
  inputContainer.style.display = 'none';
  delayBtn.textContent = 'set delay';
  gStatusElement.innerText = "Idle";
  changeElementColors("#00FFFF");
}
allBtns.addEventListener('click', (e) => {
  switch(e.target.textContent) {
    case "start":
      startGenerating();
      break;
    case "stop":
      stopGenerating();
      break;
    case "reset":
      resetChanges();
      break;
    case "set delay":
      stopGenerating();
      inputContainer.style.display = 'flex';
      e.target.textContent = 'cancel delay';
      break;
    case "cancel delay":
      stopGenerating();
      inputContainer.style.display = 'none';
      e.target.textContent = 'set delay';
      timeInp.value = "";
      break;
    default:
      break;
  }
});
const checkInput = num => {
  if (num < 100 || num > 5000) {
    alert('Enter a number between 100 and 5000');
    return false;
  } else {
    return true;
  }
}
timeInp.nextElementSibling.addEventListener('click', () => {
  let isInput = checkInput(Number(timeInp.value));
  if (isInput) {
    delay = Number(timeInp.value);
    startGenerating();
  }
});

// To Do

// Convert colors;