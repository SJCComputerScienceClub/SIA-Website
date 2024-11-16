// Event data
const events = [
  
  {
    title: "Monday Meeting",
    date: "Every Monday",
    time: "3:00 PM - 4:00 PM",
    location: "Room ___",
    description: "Come hang out in ___'s room and talk to other queer individuals and allies. Everyone is welcome!",
    gradient: "linear-gradient(to right, var(--pastel-pink), var(--pastel-blue))"
  }
  /*
  {
    title: "Identity & Inclusion Workshop",
    date: "March 25, 2024",
    time: "3:00 PM - 5:00 PM",
    location: "Student Center Room 201",
    description: "Interactive workshop exploring identity, privilege, and allyship.",
    gradient: "linear-gradient(to right, var(--pastel-pink), var(--pastel-purple))"
  },
  {
    title: "Cultural Exchange Night",
    date: "April 5, 2024",
    time: "6:00 PM - 9:00 PM",
    location: "Main Hall",
    description: "Share stories, food, and traditions from different cultures.",
    gradient: "linear-gradient(to right, var(--pastel-purple), var(--pastel-blue))"
  },
  {
    title: "Pride Month Celebration",
    date: "June 1, 2024",
    time: "2:00 PM - 6:00 PM",
    location: "Campus Quad",
    description: "Annual celebration featuring performances, speakers, and activities.",
    gradient: "linear-gradient(to right, var(--pastel-blue), var(--pastel-green))"
  }
  */
];

// Populate events
function populateEvents() {
  const eventsGrid = document.querySelector('.events-grid');
  
  events.forEach(event => {
    const eventCard = document.createElement('div');
    eventCard.className = 'event-card';
    
    eventCard.innerHTML = `
      <div class="event-card-header" style="background: ${event.gradient}"></div>
      <div class="event-card-content">
        <h3>${event.title}</h3>
        <div class="event-meta">
          <div class="meta-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
            <span>${event.date}</span>
          </div>
          <div class="meta-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span>${event.time}</span>
          </div>
          <div class="meta-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>${event.location}</span>
          </div>
        </div>
        <p>${event.description}</p>
        <button style="background: ${event.gradient}">RSVP Now</button>
      </div>
    `;
    
    eventsGrid.appendChild(eventCard);
  });
}

// Mobile menu functionality
function setupMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }
}

// Form submission
function setupForm() {
  const form = document.getElementById('joinForm');
  
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Add your form submission logic here
      alert('Thank you for your interest! We will contact you soon.');
      form.reset();
    });
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  populateEvents();
  setupMobileMenu();
  setupForm();
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Add scroll animation for value cards
  const cards = document.querySelectorAll('.value-card');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    },
    { threshold: 0.1 }
  );
  
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease-out';
    observer.observe(card);
  });
});
