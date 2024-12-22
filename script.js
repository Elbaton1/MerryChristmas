/* Background Music Control */
let musicPlaying = false;
const backgroundMusic = document.getElementById("background-music");
const musicIcon = document.getElementById("music-icon");
const arrowHint = document.getElementById("arrowHint");

// Function to toggle music play/pause
function toggleMusic() {
  if (musicPlaying) {
    backgroundMusic.pause();
    musicIcon.innerHTML = "▶️"; // Play icon
    musicPlaying = false;
  } else {
    backgroundMusic.play();
    musicIcon.innerHTML = "❚❚"; // Pause icon
    musicPlaying = true;
  }

  // Hide the arrow hint once user has interacted
  arrowHint.style.display = "none";
}

// Initialize with music playing and countdown
window.onload = function () {
  backgroundMusic.play().catch((error) => {
    console.log("Autoplay was prevented:", error);
    musicIcon.innerHTML = "▶️"; // Show play icon if autoplay fails
  });
  countdown();
};

/* Slideshow Functionality */
let slideIndex = 0;
let slides = document.getElementsByClassName("mySlides");
let slideInterval;

// Function to display slides automatically
function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  slideInterval = setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// Start the slideshow
showSlides();

// Manual Slide Control
function plusSlides(n) {
  clearTimeout(slideInterval); // Clear the existing interval
  slideIndex += n;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
  slideInterval = setTimeout(showSlides, 5000); // Reset the interval
}

/* Scroll to Top Button */
const scrollBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* Countdown Timer */
function countdown() {
  // Set your future date here (adjust year if needed)
  const countDate = new Date("December 25, 2024 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  // Time calculations
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Calculate
  const days = Math.floor(gap / day);
  const hours = Math.floor((gap % day) / hour);
  const minutes = Math.floor((gap % hour) / minute);
  const seconds = Math.floor((gap % minute) / second);

  // Display
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  // When countdown is over
  if (gap < 0) {
    document.getElementById("timer").innerHTML = "🎅 Merry Christmas! 🎅";
    clearInterval(timerInterval);
  }
}

const timerInterval = setInterval(countdown, 1000);

/* Simple Santa Tracker Logic */
// Update Santa's status based on position
const santaElement = document.getElementById("santa");
const santaStatus = document.getElementById("santa-status");

// Function to update Santa's status (optional enhancement)
function updateSantaStatus() {
  // You can customize status updates based on Santa's position
  // For simplicity, we'll just display a generic message
  santaStatus.innerText = "Santa is on his way! 🎅";
}

// Initialize status
updateSantaStatus();

// Optionally, update status when Santa completes a loop
santaElement.addEventListener("animationiteration", () => {
  updateSantaStatus();
});
