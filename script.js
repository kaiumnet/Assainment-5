

document.getElementById('discover-btn')?.addEventListener('click', function (event) {
  window.location.href = "question.html";
})

document.getElementById('back-btn')?.addEventListener('click', function (event) {
  window.location.href = "index.html";
})


//card number
const buttons = document.querySelectorAll('.complete-btn');
const digits = document.getElementById('random');

let digit = 6;

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
    alert('Board updated successfully!');
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




//current date
window.onload = function() {

const dateNew = document.getElementById('current-date');
const currentDate = new Date();

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const months= ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const day = days[currentDate.getDay()];
const month = months[currentDate.getMonth()];
const date = currentDate.getDate();
const year = currentDate.getFullYear();

dateNew.innerHTML = `${day},<br><span class="font-bold">${month} ${date} ${year}</span>`;
};





















