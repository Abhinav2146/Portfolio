function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById("theme-icon");
  const mobileThemeIcon = document.getElementById("mobile-theme-icon");

  if (body.getAttribute("data-theme") === "dark") {
    body.removeAttribute("data-theme");
    themeIcon.textContent = "🌙";
    mobileThemeIcon.textContent = "🌙";
    localStorage.setItem("theme", "light");
  } else {
    body.setAttribute("data-theme", "dark");
    themeIcon.textContent = "☀️";
    mobileThemeIcon.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  }
}

// Load saved theme
document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme");
  const themeIcon = document.getElementById("theme-icon");
  const mobileThemeIcon = document.getElementById("mobile-theme-icon");

  if (savedTheme === "dark") {
    document.body.setAttribute("data-theme", "dark");
    themeIcon.textContent = "☀️";
    mobileThemeIcon.textContent = "☀️";
  }

  // Add loading animation
  document.body.classList.add("loading");
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Mobile Menu Toggle
function toggleMobileMenu() {
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileNav = document.getElementById("mobileNav");

  mobileMenu.classList.toggle("active");
  mobileNav.classList.toggle("active");

  // Prevent body scroll when menu is open
  if (mobileNav.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
}

function closeMobileMenu() {
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileNav = document.getElementById("mobileNav");

  mobileMenu.classList.remove("active");
  mobileNav.classList.remove("active");
  document.body.style.overflow = "";
}

// Close mobile menu when clicking outside
document.addEventListener("click", function (event) {
  const mobileNav = document.getElementById("mobileNav");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (!mobileNav.contains(event.target) && !mobileMenu.contains(event.target)) {
    if (mobileNav.classList.contains("active")) {
      closeMobileMenu();
    }
  }
});

// Contact Form Submission
function handleSubmit(event) {
  event.preventDefault();

  // Get form data
  const formData = new FormData(event.target);
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  // Simple validation
  if (!name || !email || !subject || !message) {
    alert("Please fill in all fields");
    return;
  }

  // Show success message (in a real app, you'd send this to a server)
  alert(
    `Thank you, ${name}! Your message has been sent successfully. I'll get back to you soon!`
  );

  // Reset form
  event.target.reset();
}

// Navbar scroll effect
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.style.background =
      document.body.getAttribute("data-theme") === "dark"
        ? "rgba(17, 24, 39, 0.98)"
        : "rgba(255, 255, 255, 0.98)";
  } else {
    nav.style.background =
      document.body.getAttribute("data-theme") === "dark"
        ? "rgba(17, 24, 39, 0.95)"
        : "rgba(255, 255, 255, 0.95)";
  }
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener("DOMContentLoaded", function () {
  const animateElements = document.querySelectorAll(
    ".project-card, .skill-category, .contact-item"
  );
  animateElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
});

// Project links functionality
document.addEventListener("DOMContentLoaded", function () {
  // Update project links to be functional
  const projectLinks = document.querySelectorAll(".project-link");
  projectLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const linkText = this.textContent;

      if (linkText.includes("Live Demo")) {
        // In a real portfolio, these would link to actual demos
        window.open("https://your-demo-site.com", "_blank");
      } else if (linkText.includes("GitHub")) {
        // In a real portfolio, these would link to actual repos
        window.open("https://github.com/yourusername", "_blank");
      }
    });
  });
});
