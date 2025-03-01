
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

let number = 23;

buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    number++;
    numbers.textContent = number;
  });
});




//message





















