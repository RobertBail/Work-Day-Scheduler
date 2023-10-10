// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var urlValue = window.location.href;
$('#homebutton').attr('href',urlValue);

var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));

function saveInput9(){     

var userInput = document.getElementById('9').value.trim();
localStorage.setItem('server', JSON.stringify(userInput));

document.getElementById('9').value = localStorage.getItem('server');

}

function saveInput10(){

var userInput = document.getElementById('10').value.trim();
localStorage.setItem('server', JSON.stringify(userInput));

document.getElementById('10').value = localStorage.getItem('server');

}

function saveInput11(){

  var userInput = document.getElementById('11').value.trim();
  localStorage.setItem('server', JSON.stringify(userInput));
  
  document.getElementById('11').value = localStorage.getItem('server');
  
  }

function saveInput12(){

  var userInput = document.getElementById('12').value.trim();
  localStorage.setItem('server', JSON.stringify(userInput));
    
  document.getElementById('12').value = localStorage.getItem('server');
    
  }

function saveInput13(){

  var userInput = document.getElementById('13').value.trim();
  localStorage.setItem('server', JSON.stringify(userInput));
      
  document.getElementById('13').value = localStorage.getItem('server');
      
  }

 function saveInput14(){

  var userInput = document.getElementById('14').value.trim();
  localStorage.setItem('server', JSON.stringify(userInput));
        
  document.getElementById('14').value = localStorage.getItem('server');
        
  }

  function saveInput15(){

  var userInput = document.getElementById('15').value.trim();
  localStorage.setItem('server', JSON.stringify(userInput));
          
  document.getElementById('15').value = localStorage.getItem('server');
          
  }

  function saveInput16(){

    var userInput = document.getElementById('16').value.trim();
    localStorage.setItem('server', JSON.stringify(userInput));
            
    document.getElementById('16').value = localStorage.getItem('server');
            
    }

  function saveInput17(){

    var userInput = document.getElementById('17').value.trim();
    localStorage.setItem('server', JSON.stringify(userInput));
      
    document.getElementById('17').value = localStorage.getItem('server');
      
      }

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