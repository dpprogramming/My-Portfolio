document.addEventListener('DOMContentLoaded', function() {
  // Typing Effect for Hero Sub-heading
  const textElement = document.getElementById('typing-text');
  const words = ["Developer", "Designer", "Programmer", "Artist", "YouTuber"];
  let wordIndex = 0;
  let charIndex = 0;
  const typingSpeed = 150; // milliseconds per character
  const erasingSpeed = 100; // milliseconds per character
  const newWordDelay = 2000; // milliseconds before typing new word
  
  function type() {
    if (wordIndex < words.length && charIndex < words[wordIndex].length) {
      textElement.textContent += words[wordIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      // Word fully typed, wait then erase
      setTimeout(erase, newWordDelay);
    }
  }
  
  function erase() {
    if (charIndex > 0) {
      textElement.textContent = words[wordIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingSpeed);
    } else {
      // Word fully erased, move to next word
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, typingSpeed);
    }
  }
  
  // Start typing animation
  type();
  
  // Mobile Menu Toggle
  const mobileMenu = document.getElementById('mobile-menu');
  const navMenu = document.getElementById('navMenu');
  
  if (mobileMenu && navMenu) {
    mobileMenu.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      mobileMenu.classList.toggle('is-active'); // Toggles class for hamburger animation
    });
    
    // Close mobile menu when a navigation link is clicked
    const navLinks = navMenu.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        // Check if the clicked link is NOT the "Contact Us" button (which has a different style)
        if (!link.classList.contains('contact-btn')) {
          navMenu.classList.remove('active');
          mobileMenu.classList.remove('is-active');
        }
      });
    });
    // Also close if the "Contact Us" button is clicked
    const contactButton = navMenu.querySelector('.contact-btn');
    if (contactButton) {
      contactButton.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenu.classList.remove('is-active');
      });
    }
  }
});
