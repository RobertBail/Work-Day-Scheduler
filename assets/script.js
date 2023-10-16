// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html

var today = dayjs();
$('#currentDay').text(today.format('D MMMM YYYY'));

function timecolor() {
var date = today;
var hour = date.getHours();
$('#currentHour').today.format('hh:mm:ss');
var timeblock = document.getElementById('currentHour');


if (hour >= 9 && hour <= 17) {
  timeblock.style = 'present';
} else if (hour < 17) {
  timeblock.style = 'past';
} else {
  timeblock.style = 'future';
}
}

function saveInput9(){     

var userInput9 = document.getElementById('hour9').value.trim();
localStorage.setItem('hour9', JSON.stringify(userInput9));
console.log(userInput9);

}

document.getElementById('hour9').value = localStorage.getItem('hour9');


function saveInput10(){

var userInput10 = document.getElementById('hour10').value.trim();
localStorage.setItem('hour10', JSON.stringify(userInput10));
console.log(userInput10);

}

document.getElementById('hour10').value = localStorage.getItem('hour10');

function saveInput11(){

var userInput11 = document.getElementById('hour11').value.trim();
localStorage.setItem('hour11', JSON.stringify(userInput11));
console.log(userInput11);

}

document.getElementById('hour11').value = localStorage.getItem('hour11');

function saveInput12(){

var userInput12 = document.getElementById('hour12').value.trim();
localStorage.setItem('hour12', JSON.stringify(userInput12));
console.log(userInput12);  

}

document.getElementById('hour12').value = localStorage.getItem('hour12');

function saveInput13(){

var userInput13 = document.getElementById('hour13').value.trim();
localStorage.setItem('hour13', JSON.stringify(userInput13));
console.log(userInput13); 

}

document.getElementById('hour13').value = localStorage.getItem('hour13');

function saveInput14(){

var userInput14 = document.getElementById('hour14').value.trim();
localStorage.setItem('hour14', JSON.stringify(userInput14));
console.log(userInput14);

}

document.getElementById('hour14').value = localStorage.getItem('hour14');

function saveInput15(){

var userInput15 = document.getElementById('hour15').value.trim();
localStorage.setItem('hour15', JSON.stringify(userInput15));
console.log(userInput15); 

}

document.getElementById('hour15').value = localStorage.getItem('hour15');

function saveInput16(){

var userInput16 = document.getElementById('hour16').value.trim();
localStorage.setItem('hour16', JSON.stringify(userInput16));
console.log(userInput16); 

}

document.getElementById('hour16').value = localStorage.getItem('hour16');
  
function saveInput17(){

var userInput17 = document.getElementById('hour17').value.trim();
localStorage.setItem('hour17', JSON.stringify(userInput17));
console.log(userInput17);  

}
 
document.getElementById('hour17').value = localStorage.getItem('hour17');

$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });