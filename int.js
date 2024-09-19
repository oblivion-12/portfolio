document.addEventListener("DOMContentLoaded", function() {
  const header = document.querySelector('header');
  const currentHour = new Date().getHours();
  let greeting;

  if (currentHour < 12) {
      greeting = "Good morning!";
  } else if (currentHour < 18) {
      greeting = "Good afternoon!";
  } else {
      greeting = "Good evening!";
  }

  const greetMessage = document.createElement('p');
  greetMessage.textContent = greeting + " Welcome to my portfolio!";
  header.appendChild(greetMessage);
});
