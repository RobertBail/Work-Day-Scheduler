var today = dayjs();
$('#currentDay').text(today.format('dddd, D MMMM YYYY'));

function timecolor() {
  var currenttime = moment().hour();

  
  $(".time-block").each(function () {
      var blockTime = parseInt($(this).attr("id").split("hour")[1]);

     
      if (blockTime === currenttime) {
          $(this).removeClass("past");
          $(this).removeClass("future");
          $(this).addClass("present");
      }
      else if (blockTime < currenttime) {
          $(this).removeClass("future");
          $(this).removeClass("present");
          $(this).addClass("past");
      }
      else {
          $(this).removeClass("present");
          $(this).removeClass("past");
          $(this).addClass("future");

      }
  })
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

