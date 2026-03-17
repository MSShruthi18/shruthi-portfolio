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
function scrollCert(direction) {
  const container = document.getElementById("certContainer");

  const scrollAmount = 300;

  container.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth"
  });
}
function scrollCert(direction) {
  const container = document.getElementById("certContainer");

  container.scrollBy({
    left: direction * 300,
    behavior: "smooth"
  });
}

const achievements = [
  {
    tag: "College Merit",
    title: "2nd Rank in BCA",
    desc: "Secured university-level 2nd rank in Bachelor of Computer Applications with consistent high performance.",
    emoji: "🏆",
    link: "assets/rank.jpeg",
    accent: "#f5c842",
    bg: "c0",
    grad: "linear-gradient(135deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%)"
  },
  {
    tag: "Faculty Recognition",
    title: "Best Student Faculty Award",
    desc: "Recognized for exceptional teaching skills and mentoring juniors in complex programming concepts.",
    emoji: "🎓",
    link: "faculty.jpg",
    accent: "#42c5f5",
    bg: "c1",
    grad: "linear-gradient(135deg, #0d2137 0%, #0a3d62 60%, #1b6ca8 100%)"
  },
  {
    tag: "Annual Award",
    title: "Best Library User Award",
    desc: "Awarded for being the most frequent and disciplined user of college library resources.",
    emoji: "📚",
    link: "library.jpg",
    accent: "#a78bfa",
    bg: "c2",
    grad: "linear-gradient(135deg, #1e0d2e 0%, #3b0764 60%, #6b21a8 100%)"
  },
  {
    tag: "National Level",
    title: "Hydra Hacks Hackathon",
    desc: "Built a functional tech solution at the Hydra Hacks National Level Hackathon within a 8-hour sprint.",
    emoji: "⚡",
    link: "assets/hckathon.jpeg",
    accent: "#34d399",
    bg: "c3",
    grad: "linear-gradient(135deg, #0d2620 0%, #064e3b 60%, #065f46 100%)"
  },
  {
    tag: "PUC Milestone",
    title: "2nd Topper in PUC",
    desc: "Achieved the second-highest score in Pre-University Course, showcasing a strong academic foundation.",
    emoji: "⭐",
    link: "puc.jpg",
    accent: "#fb923c",
    bg: "c4",
    grad: "linear-gradient(135deg, #2e1a0d 0%, #7c2d12 60%, #c2410c 100%)"
  }
];

const stack = document.getElementById('stack');
const dotsEl = document.getElementById('dots');
let current = 0;
const total = achievements.length;

function buildCards() {
  stack.innerHTML = '';
  dotsEl.innerHTML = '';

  achievements.forEach((a, i) => {
    const card = document.createElement('div');
    card.className = 'ach-card';
    card.dataset.index = i;
    card.innerHTML = `
      <div class="card-bg" style="background:${a.grad};"></div>
      <img class="card-cert-img" src="${a.link}" alt="${a.title}" onerror="this.style.display='none'" />
      <div class="card-img-overlay"></div>
      <span class="card-num" style="color:${a.accent};">${String(i+1).padStart(2,'0')} / ${String(total).padStart(2,'0')}</span>
      <span class="card-emoji">${a.emoji}</span>
      <div class="card-body">
        <span class="tag">${a.tag}</span>
        <h3 class="card-title">${a.title}</h3>
        <p class="card-desc">${a.desc}</p>
      </div>
    `;
    stack.appendChild(card);

    const dot = document.createElement('div');
    dot.className = 'ach-dot' + (i === 0 ? ' active' : '');
    dot.onclick = () => goTo(i);
    dotsEl.appendChild(dot);
  });

  applyStackLayout(0, false);
  setupDrag();
}

function applyStackLayout(active, animate) {
  const cards = stack.querySelectorAll('.ach-card');
  cards.forEach((card, i) => {
    const rel = ((i - active) % total + total) % total;

    card.style.transition = animate
      ? 'transform 0.45s cubic-bezier(0.34,1.56,0.64,1), opacity 0.35s ease, z-index 0s'
      : 'none';

    if (rel === 0) {
      card.style.zIndex = total;
      card.style.transform = 'translateY(0px) scale(1) rotate(0deg)';
      card.style.opacity = '1';
    } else if (rel === 1) {
      card.style.zIndex = total - 1;
      card.style.transform = 'translateY(26px) scale(0.95) rotate(1.2deg)';
      card.style.opacity = '0.85';
    } else if (rel === 2) {
      card.style.zIndex = total - 2;
      card.style.transform = 'translateY(48px) scale(0.9) rotate(2.4deg)';
      card.style.opacity = '0.6';
    } else if (rel === 3) {
      card.style.zIndex = total - 3;
      card.style.transform = 'translateY(64px) scale(0.86) rotate(-1.5deg)';
      card.style.opacity = '0.35';
    } else {
      card.style.zIndex = 0;
      card.style.transform = 'translateY(80px) scale(0.82)';
      card.style.opacity = '0';
    }
  });

  dotsEl.querySelectorAll('.ach-dot').forEach((d, i) => {
    d.classList.toggle('active', i === active);
  });
}

function goTo(idx) {
  const cards = stack.querySelectorAll('.ach-card');
  if (idx === current) return;

  const forward = ((idx - current + total) % total) <= total / 2;

  if (forward) {
    const topCard = cards[current];
    topCard.classList.add('flying-out');
    topCard.style.transition = 'transform 0.5s cubic-bezier(0.55,0,1,0.45), opacity 0.4s ease';
    topCard.style.transform = 'translateY(-120%) scale(0.9) rotate(-8deg)';
    topCard.style.opacity = '0';
  }

  current = idx;
  setTimeout(() => applyStackLayout(current, true), forward ? 80 : 0);

  if (!forward) applyStackLayout(current, true);

  setTimeout(() => {
    cards.forEach(c => c.classList.remove('flying-out'));
    applyStackLayout(current, false);
  }, 550);
}

function goNext() {
  const next = (current + 1) % total;
  goTo(next);
}

function goPrev() {
  const prev = (current - 1 + total) % total;
  goTo(prev);
}

document.getElementById('nextBtn').onclick = goNext;
document.getElementById('prevBtn').onclick = goPrev;

function setupDrag() {
  let startY = 0, startX = 0, dragging = false;

  stack.addEventListener('pointerdown', e => {
    startY = e.clientY; startX = e.clientX; dragging = true;
    e.currentTarget.setPointerCapture(e.pointerId);
  });

  stack.addEventListener('pointerup', e => {
    if (!dragging) return;
    dragging = false;
    const dy = startY - e.clientY;
    const dx = e.clientX - startX;
    if (Math.abs(dy) > 40 && Math.abs(dy) > Math.abs(dx)) {
      dy > 0 ? goNext() : goPrev();
    } else if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) {
      dx < 0 ? goNext() : goPrev();
    }
  });
}

buildCards();