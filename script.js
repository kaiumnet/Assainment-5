

document.getElementById('discover-btn')?.addEventListener('click', function (event) {
  window.location.href = "question.html";
})

document.getElementById('back-btn')?.addEventListener('click', function (event) {
  window.location.href = "index.html";
})


//card number
const buttons = document.querySelectorAll('.complete-btn');
const digits = document.getElementById('random');

let digit = 7;

buttons.forEach(function (random) {
  random.addEventListener('click', function () {
    if (digit > 0) {
      digit--;
      digits.textContent = digit;
    }
    random.disabled = true;
    random.style.backgroundColor = 'gray';
  });
});





// Navbar number
const button = document.querySelectorAll('.complete-btn');
const numbers = document.getElementById('random2');

let number = 24;

buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    number++;
    numbers.textContent = number;

if(number > 29){
      alert('congrates!! You have completed all the current task');
    }

  });


});






//color
const colors = ["#003049", "#6f4518", "#800f2f", "#023e8a", "#590d22", "#f08080", "#006494", "#38ada9", "#25CCF7"];
let currentColor = 0;

document.getElementById('color').addEventListener('click', function() {

    document.body.style.backgroundColor = colors[currentColor];

    currentColor = (currentColor + 1) % colors.length;
});






















