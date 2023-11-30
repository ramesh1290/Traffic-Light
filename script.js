// switchingMethod();
const colorElement = document.querySelectorAll(".circle-inside");
const headingElement = document.querySelector(".heading");

function catchingSequenceValue(color) {
  // colorElement.forEach((colorEl) => {
  //   colorEl.style.backgroundColor = "transparent";
  // });
  for (const colorEl of colorElement) {
    colorEl.style.backgroundColor = "black";
  }
  const colorIndex = color === "red" ? 0 : color === "yellow" ? 1 : 2;
  colorElement[colorIndex].style.backgroundColor = color;
}

function searchingBulb() {
  const sequence = ["red", "yellow", "green"];
  let currentColorIndex = 0;
  function updateSequence() {
    let sequenceValue = sequence[currentColorIndex];
    // console.log(sequenceValue);
    catchingSequenceValue(sequenceValue);
    currentColorIndex = (currentColorIndex + 1) % sequence.length;
  }
  setInterval(() => {
    updateSequence();
  }, 1000);
}
searchingBulb();

//for text
function catchingTextValue(text) {
  headingElement.innerHTML = text;

  if (text === " RED LIGHT") {
    headingElement.style.color = "red";
  } else if (text === " YELLOW LIGHT") {
    headingElement.style.color = "yellow";
  } else {
    headingElement.style.color = "green";
    headingElement.style.opacity = 1;
  }
}
//blinking
function textMethod() {
  const textAssign = [" RED LIGHT", " YELLOW LIGHT", " GREEN LIGHT"];
  let currentIndex = 0;
  function updatingNewText() {
    const updatingTextAssign = textAssign[currentIndex];

    console.log(updatingTextAssign);
    catchingTextValue(updatingTextAssign);
    currentIndex = (currentIndex + 1) % textAssign.length;
  }
  setInterval(() => {
    updatingNewText();
  }, 1000);
}
textMethod();
