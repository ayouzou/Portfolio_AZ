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