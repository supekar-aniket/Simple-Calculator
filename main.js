// let currentDisplay = '';

// function one(){
//   currentDisplay += 1;
//   document.querySelector('#input-box').value = currentDisplay;
// }

// function two(){
//   currentDisplay += 2;
//   document.querySelector('#input-box').value = currentDisplay;
// }

// function three(){
//   currentDisplay += 3;
//   document.querySelector('#input-box').value = currentDisplay;
// }

// function four(){
//   currentDisplay += 4;
//   document.querySelector('#input-box').value = currentDisplay;
// }

// function five(){
//   currentDisplay += 5;
//   document.querySelector('#input-box').value = currentDisplay;
// }

// function six(){
//   currentDisplay += 6;
//   document.querySelector('#input-box').value = currentDisplay;
// }

// function seven(){
//   currentDisplay += 7;
//   document.querySelector('#input-box').value = currentDisplay;
// }

// function eight(){
//   currentDisplay += 8;
//   document.querySelector('#input-box').value = currentDisplay;
// }

// function nine(){
//   currentDisplay += 9;
//   document.querySelector('#input-box').value = currentDisplay;
// }

// function zero(){
//   currentDisplay += 0;
//   document.querySelector('#input-box').value = currentDisplay;
// }

// function point(){
//   currentDisplay += '.';
//   document.querySelector('#input-box').value = currentDisplay;
// }

// function div(){
//   currentDisplay += '/';
//   document.querySelector('#input-box').value = currentDisplay;
// }

// function multi(){
//   currentDisplay += '*';
//   document.querySelector('#input-box').value = currentDisplay;
// }

// function minus(){
//   currentDisplay += '-';
//   document.querySelector('#input-box').value = currentDisplay;
// }

// function add(){
//   currentDisplay += '+';
//   document.querySelector('#input-box').value = currentDisplay;
// }

// function ac(){
//   currentDisplay = '';
//   document.querySelector('#input-box').value = currentDisplay;
// }

// function back(){
//   let currentDisplay = document.querySelector('#input-box').value;
//   document.querySelector('#input-box').value = currentDisplay.slice(0,-1);
// }

// function answer(){
//   let result = eval(document.querySelector('#input-box').value);
//   document.querySelector('#input-box').value = result;
// }

function appendValue(value){
  document.querySelector('#input-box').value += value;
}

function ac(){
  currentDisplay = '';
  document.querySelector('#input-box').value = currentDisplay;
}

function back(){
  let currentDisplay = document.querySelector('#input-box').value;
  document.querySelector('#input-box').value = currentDisplay.slice(0,-1);
}

function answer(){
  let result = eval(document.querySelector('#input-box').value);
  document.querySelector('#input-box').value = result;
}