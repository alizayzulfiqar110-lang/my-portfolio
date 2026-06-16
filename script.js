const hour = new Date().getHours();
let greeting;

if (hour < 12) {
  greeting = "Good morning! Welcome to my portfolio.";
} else if (hour < 18) {
  greeting = "Good afternoon! Thanks for visiting.";
} else {
  greeting = "Good evening! Glad you stopped by.";
}

document.getElementById("greeting").textContent = greeting;
