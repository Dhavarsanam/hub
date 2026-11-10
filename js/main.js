// Common script - ella page-layum use aagum

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Dark mode (localStorage la save aagum)
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

const themeBtn = document.getElementById("themeBtn");
if (themeBtn) {
  const updateLabel = () => {
    themeBtn.textContent = document.body.classList.contains("dark") ? "Light Mode" : "Dark Mode";
  };
  updateLabel();
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
    updateLabel();
  });
}

// Greeting based on time
const greeting = document.getElementById("greeting");
if (greeting) {
  const hour = new Date().getHours();
  if (hour < 12) greeting.textContent = "Good Morning!";
  else if (hour < 17) greeting.textContent = "Good Afternoon!";
  else greeting.textContent = "Good Evening!";
}

// Counter
const countBtn = document.getElementById("countBtn");
if (countBtn) {
  let count = 0;
  countBtn.addEventListener("click", () => {
    count++;
    document.getElementById("count").textContent = count;
  });
}
