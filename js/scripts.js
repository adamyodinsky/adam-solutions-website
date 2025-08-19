/**
 * Adam Solutions - Core JavaScript functionality
 */

// Mobile menu toggle functionality
function toggleMobileMenu() {
  const navbarNav = document.getElementById("navbarNav");
  navbarNav.classList.toggle("show");
}

// Close mobile menu when clicking outside
document.addEventListener("click", function (event) {
  const navbar = document.getElementById("mainNav");
  const navbarNav = document.getElementById("navbarNav");
  const navbarToggler = navbar.querySelector(".navbar-toggler");

  if (!navbar.contains(event.target) && navbarNav.classList.contains("show")) {
    navbarNav.classList.remove("show");
  }
});

// Smooth scrolling for internal links
document.addEventListener("DOMContentLoaded", function () {
  // Add active class to current navigation item
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (
      href === currentPage ||
      (currentPage === "" && href === "index.html") ||
      (currentPage === "index.html" && href === "#home")
    ) {
      link.classList.add("active");
    }
  });

  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const offsetTop = targetElement.offsetTop - 76; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });

        // Close mobile menu if open
        const navbarNav = document.getElementById("navbarNav");
        if (navbarNav && navbarNav.classList.contains("show")) {
          navbarNav.classList.remove("show");
        }
      }
    });
  });

  // Add fade-in animation to cards and sections
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-up");
      }
    });
  }, observerOptions);

  // Observe cards and sections for animation
  const animatedElements = document.querySelectorAll(".card, .section");
  animatedElements.forEach((el) => {
    observer.observe(el);
  });

  // Navbar scroll effect
  let lastScrollTop = 0;
  const navbar = document.getElementById("mainNav");

  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Add/remove shadow based on scroll position
    if (scrollTop > 10) {
      navbar.style.boxShadow = "0 0.5rem 1rem rgba(0, 0, 0, 0.15)";
    } else {
      navbar.style.boxShadow = "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)";
    }

    lastScrollTop = scrollTop;
  });
});

// Form handling functionality
function handleFormSubmit(
  form,
  successMessage = "Thank you! Your message has been sent."
) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Add loading state
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = "Sending...";
    submitButton.disabled = true;
    form.classList.add("loading");

    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
      // Remove loading state
      form.classList.remove("loading");
      submitButton.textContent = originalText;
      submitButton.disabled = false;

      // Show success message
      showNotification(successMessage, "success");

      // Reset form
      form.reset();
    }, 2000);
  });
}

// Notification system
function showNotification(message, type = "info") {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll(".notification");
  existingNotifications.forEach((notification) => notification.remove());

  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${
          type === "success"
            ? "var(--success-color)"
            : type === "error"
            ? "var(--accent-color)"
            : "var(--secondary-color)"
        };
        color: white;
        padding: 1rem 1.5rem;
        border-radius: var(--border-radius);
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;

  notification.textContent = message;
  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 10);

  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(100%)";
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 300);
  }, 5000);
}

// Initialize contact form if it exists
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    handleFormSubmit(contactForm);
  }
});

// Utility function to validate email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Form validation
function validateForm(form) {
  let isValid = true;
  const requiredFields = form.querySelectorAll("[required]");

  requiredFields.forEach((field) => {
    const value = field.value.trim();
    const fieldName = field.name || field.id;

    // Remove existing error styling
    field.classList.remove("error");

    // Check if field is empty
    if (!value) {
      field.classList.add("error");
      showNotification(`Please fill in the ${fieldName} field.`, "error");
      isValid = false;
      return;
    }

    // Email validation
    if (field.type === "email" && !isValidEmail(value)) {
      field.classList.add("error");
      showNotification("Please enter a valid email address.", "error");
      isValid = false;
      return;
    }
  });

  return isValid;
}

// Add error styling to CSS
const errorStyles = `
    .form-control.error {
        border-color: var(--accent-color);
        box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1);
    }
`;

// Inject error styles
const styleSheet = document.createElement("style");
styleSheet.textContent = errorStyles;
document.head.appendChild(styleSheet);

// Export functions for use in other pages
window.AdamSolutions = {
  toggleMobileMenu,
  handleFormSubmit,
  showNotification,
  validateForm,
  isValidEmail,
};
