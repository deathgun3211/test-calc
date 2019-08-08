const display = document.querySelector('.calculator .display');


document
    .querySelectorAll('.calculator_clear ')
    .forEach(digit = digit.addEventListener('click', clearPressed));



function clearPressed(ev) {
   display.value = ""
}


document
    .querySelectorAll('.calculator__button ')
    .forEach(digit = digit.addEventListener('click', digitPressed));


function digitPressed(ev) {
   display.value += ev.target.innerText;

}


document
    .querySelectorAll('.calculator__oper')
    .forEach(oper = oper.addEventListener('click', operPressed));


function operPressed(ev) {
   if (isNaN(display.value[display.value.length - 1])) {
      display.value = display.value.substr(0, display.value.length - 1)
   }

   display.value += ev.target.innerText;
}



document.querySelector('.calculator__equal').addEventListener('click', equalPressed);



function equalPressed() {
   display.value = eval(display.value);

   if (display.value === "Infinity") {
      alert('You cant do this');
      display.value = ""
   }
}
