document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("themeToggle");

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    toggleButton.textContent = document.body.classList.contains("dark")
      ? "☀️"
      : "🌙";
  });
});

  
  
  const roles = ["Problem Solver", "Software Developer","M S Shruthi"];
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

// OPEN WHATSAPP POPUP
function openPopup() {
  document.getElementById("popup").style.display = "flex";
}

// CLOSE POPUP
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// GO TO WHATSAPP AFTER NAME
function goWhatsApp() {
  const name = document.getElementById("name").value;

  if (name.trim() === "") {
    alert("Please enter your name");
    return;
  }

  window.open(`https://wa.me/917676841307?text=Hi I'm ${name}`, "_blank");
  closePopup();
}


// LINKEDIN POPUP
function openLinkedInPopup() {
  document.getElementById("linkedinPopup").style.display = "flex";
}

function closeLinkedInPopup() {
  document.getElementById("linkedinPopup").style.display = "none";
}

function goLinkedIn() {
  const name = document.getElementById("linkedinName").value;

  if (name.trim() === "") {
    alert("Please enter your name");
    return;
  }

  window.open("https://www.linkedin.com/in/msshruthi18/", "_blank");
  closeLinkedInPopup();
}



function openPopup() {
  document.getElementById("popup").style.display = "flex";
  document.getElementById("name").value = "";
}



function goWhatsApp() {
  let name = document.getElementById("name").value.trim();

  if (name === "") {
    alert("Enter your name bro 😄");
    return;
  }
  let message = `Hi, my name is ${name}. I want to chat with you.`;
  let url = "https://wa.me/917676841307?text=" + encodeURIComponent(message);
  document.getElementById("name").value = "";
  document.getElementById("popup").style.display = "none";
  window.open(url, "_blank");
}

function openLinkedInPopup() {
  document.getElementById("linkedinPopup").style.display = "flex";
}

function goLinkedIn() {
  let name = document.getElementById("linkedinName").value;

  if(name === "") {
    alert("Enter your name bro ");
    return;
  }

  // Replace with your LinkedIn profile link
  let linkedInURL = "https://www.linkedin.com/in/msshruthi18/";

  window.open(linkedInURL, "_blank");
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function closeLinkedInPopup() {
  document.getElementById("linkedinPopup").style.display = "none";
}

window.onclick = function(event) {
  let popup = document.getElementById("popup");
  let linkedinPopup = document.getElementById("linkedinPopup");

  if (event.target === popup) {
    popup.style.display = "none";
  }
  if (event.target === linkedinPopup) {
    linkedinPopup.style.display = "none";
  }
}
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});