// DOM Elements
const header = document.querySelector('header');
const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');
const backToTopBtn = document.getElementById('backToTop');
const navItems = document.querySelectorAll('.nav-links a');
const progressBars = document.querySelectorAll('.progress-bar');
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const contactForm = document.getElementById('contactForm');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a nav item
navItems.forEach(item => {
  item.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// Sticky header on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
  
  // Show/hide back to top button
  if (window.scrollY > 500) {
    backToTopBtn.classList.add('active');
  } else {
    backToTopBtn.classList.remove('active');
  }
  
  // Animate skill progress bars when in viewport
  animateProgressBars();
});

// Back to top button click event
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Active navigation link based on scroll position
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const scrollPosition = window.scrollY;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${sectionId}`) {
          item.classList.add('active');
        }
      });
    }
  });
});

// Animate progress bars when in viewport
function animateProgressBars() {
  progressBars.forEach(bar => {
    const barPosition = bar.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (barPosition < screenPosition) {
      const width = bar.getAttribute('data-width');
      bar.style.width = `${width}%`;
    }
  });
}

// Project filtering
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    filterBtns.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    btn.classList.add('active');
    
    const filterValue = btn.getAttribute('data-filter');
    
    projectCards.forEach(card => {
      if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Contact form submission
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  
  // Simple form validation
  if (name && email && subject && message) {
    // In a real application, you would send this data to a server
    // For this demo, we'll just show an alert
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
  } else {
    alert('Please fill in all fields.');
  }
});

// Typing effect for hero section
const heroTitle = document.querySelector('.hero-content h1');
const text = heroTitle.innerHTML;
const speed = 100;
let i = 0;

// Clear the text initially
heroTitle.innerHTML = '';

// Type effect function
function typeWriter() {
  if (i < text.length) {
    heroTitle.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// Start the typing effect when the page loads
window.addEventListener('load', () => {
  typeWriter();
  
  // Initialize progress bars animation
  setTimeout(() => {
    animateProgressBars();
  }, 1000);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, <boltArtifact id="personal-portfolio-continued" title="Personal Portfolio Website (Continued)">
      }
      )
    }
  }
  )
}
)