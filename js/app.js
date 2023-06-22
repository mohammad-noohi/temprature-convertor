/* 
  formula of convert temprature :
  c to f => (°c * 9 / 5) + 32
  f to c => (32°F − 32) × 5/9
*/

const $ = document;

const appTitle = $.querySelector(".app-title");
const degreeInput = $.querySelector(".degree-input");
const textResult = $.querySelector(".text-result");
const converBtn = $.querySelector(".convert-btn");
const resetBtn = $.querySelector(".reset-btn");
const changeBtn = $.querySelector(".change-btn");
let c_to_f = true; /* true => c to f  flase => f to c */


/* CONVERT BUTTON */
converBtn.addEventListener("click", function () {
  if(isNaN(degreeInput.value) || degreeInput.value === ''){
    textResult.innerHTML = 'Please Enter a number';
    textResult.classList.add('show-text-result__alert')
  }else{
    if (c_to_f) {
      // conver c to f
      let celsius = degreeInput.value;
      let resultConvert = (celsius * 9) / 5 + 32;
      textResult.innerHTML = `${celsius}°C is ${resultConvert.toFixed(2)}°F`;
      textResult.classList.remove('show-text-result__alert')
      textResult.classList.add("show-text-result");
    } else {
      // convert f to c
      let fahrenhite = degreeInput.value;
      let resultConvert = ((fahrenhite - 32) * 5) / 9;
      textResult.innerHTML = `${fahrenhite}°F is ${resultConvert.toFixed(2)}°C`;
      textResult.classList.remove('show-text-result__alert')
      textResult.classList.add("show-text-result");
    }
  }
  
});

/* RESET BUTTON */
resetBtn.addEventListener("click", function () {
  degreeInput.value = "";
  appTitle.innerHTML = "Convert °C to °F";
  textResult.innerHTML = "";
});

/* CHANGE BUTTON */
changeBtn.addEventListener("click", function () {
  // change app title and formula
  if (c_to_f) {
    $.title = "°F to °C";
    appTitle.innerHTML = "Convert °F to °C";
    degreeInput.setAttribute('placeholder','°F')
    c_to_f = false;
  } else {
    $.title = "°C to °F";
    appTitle.innerHTML = "Convert °C to °F";
    degreeInput.setAttribute('placeholder','°C')

    c_to_f = true;
  }
});
