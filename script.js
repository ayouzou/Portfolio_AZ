const titles = [
  "I am a Developer",
  "And  Designer",
  "I am a Developer",
  "I am a Designer",
  "I am a Developer",
  "I am a Designer",
];

const titleElement = document.getElementById("title");
let currentIndex = 0;

function changeTitle() {
  titleElement.textContent = titles[currentIndex];
  currentIndex = (currentIndex + 1) % titles.length;
}

setInterval(changeTitle, 1000); // 5 seconds interval



document.addEventListener('DOMContentLoaded', function () {
  var navbar = document.querySelector('nav');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scroll');
    } else {
      navbar.classList.remove('navbar-scroll');
    }
  });
});
