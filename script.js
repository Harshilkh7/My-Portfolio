document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
  
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.body.classList.add(savedTheme);
    } else {
      const hour = new Date().getHours();
      const isDayTime = hour >= 6 && hour < 18;
      document.body.classList.add(isDayTime ? "day-theme" : "night-theme");
    }
  
    updateButtonText();
  
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("day-theme");
      document.body.classList.toggle("night-theme");
  
      if (document.body.classList.contains("day-theme")) {
        localStorage.setItem("theme", "day-theme");
      } else {
        localStorage.setItem("theme", "night-theme");
      }
  
      updateButtonText();
    });
  
    function updateButtonText() {
      if (document.body.classList.contains("day-theme")) {
        themeToggle.textContent = "Switch to Night Theme";
      } else {
        themeToggle.textContent = "Switch to Day Theme";
      }
    }
  
    // Typing effect logic
    const typingElement = document.getElementById("typing-effect");
    const textToType = ">Hi, I'm Harshil Khandelwal, a web developer passionate about creating beautiful and functional websites."; // The text you want to type
    const typingSpeed = 100; // Milliseconds per character
  
    let index = 0;
  
    function typeText() {
      if (index < textToType.length) {
        typingElement.textContent += textToType[index];
        index++;
        setTimeout(typeText, typingSpeed);
        // setTimeout(typeText, 1000);  // Directly function se time change
      }
    }
  
    typeText(); // Start the typing effect
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    // Create 100 stars dynamically
    const starryBackground = document.getElementById("starry-background");
  
    for (let i = 0; i < 100; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
  
      // Randomize the size and position of the stars
      const size = Math.random() * 2 + 1; // Star size between 1px and 3px
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.animationDuration = `${Math.random() * 2 + 1}s`; // Random twinkling speed
  
      // Append to the starry background
      starryBackground.appendChild(star);
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const nav = document.querySelector("nav");
  
    hamburger.addEventListener("click", () => {
      nav.classList.toggle("active"); // Toggle the 'active' class
    });
  
    // Optional: Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function(e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
        });
      });
    });
  });
  