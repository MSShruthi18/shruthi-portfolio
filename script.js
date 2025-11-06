document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("themeToggle");

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    toggleButton.textContent = document.body.classList.contains("dark")
      ? "☀️"
      : "🌙";
  });
});
  
  
  const roles = ["Coder", "Developer","M S Shruthi"];
  const textEl = document.querySelector(".typed-text");
  let i = 0;

  function changeText() {
    textEl.style.opacity = 0;
    textEl.style.transform = "translateY(10px)";
    
    setTimeout(() => {
      textEl.textContent = roles[i];
      textEl.style.opacity = 1;
      textEl.style.transform = "translateY(0)";
      i = (i + 1) % roles.length;
    }, 500); // must match the CSS transition time
  }

  document.addEventListener("DOMContentLoaded", () => {
    setInterval(changeText, 2500); // Change every 2.5 sec
  });
