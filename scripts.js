// Mobile Navigation Toggle
const navToggle = document.getElementById("nav-toggle")
const navMenu = document.getElementById("nav-menu")

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active")
  navToggle.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
    navToggle.classList.remove("active")
  })
})

// Gallery Tab Functionality
const tabButtons = document.querySelectorAll(".tab-btn")
const galleryTabs = document.querySelectorAll(".gallery-tab")

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetTab = button.getAttribute("data-tab")

    // Remove active class from all buttons and tabs
    tabButtons.forEach((btn) => btn.classList.remove("active"))
    galleryTabs.forEach((tab) => tab.classList.remove("active"))

    // Add active class to clicked button and corresponding tab
    button.classList.add("active")
    document.getElementById(targetTab).classList.add("active")
  })
})

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Hero Scroll Button
const heroScroll = document.querySelector(".hero-scroll")
if (heroScroll) {
  heroScroll.addEventListener("click", () => {
    document.querySelector("#about").scrollIntoView({
      behavior: "smooth",
    })
  })
}

// Navbar Background on Scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)"
    navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)"
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)"
    navbar.style.boxShadow = "none"
  }
})

// Intersection Observer for Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe elements for animation
document.querySelectorAll(".about-card, .gallery-item, .event-card").forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(30px)"
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  observer.observe(el)
})

// Newsletter Form Submission
const newsletterForm = document.querySelector(".newsletter-form")
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const email = newsletterForm.querySelector('input[type="email"]').value

    // Simple validation
    if (email && email.includes("@")) {
      // Here you would typically send the email to your server
      alert("Thank you for subscribing! We'll keep you updated with our latest news and events.")
      newsletterForm.reset()
    } else {
      alert("Please enter a valid email address.")
    }
  })
}

// CTA Button Actions
document.querySelectorAll(".cta-buttons .btn").forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonText = button.textContent.trim()

    switch (buttonText) {
      case "Join Us":
        // Redirect to join page or show modal
        alert(
          "Welcome! We'd love to have you join our community. Please contact us for more information about getting involved.",
        )
        break
      case "Donate":
        // Redirect to donation page
        alert(
          "Thank you for your heart to give! Our donation page will be available soon. Please contact us for donation information.",
        )
        break
      case "Contact Us":
        // Scroll to footer or show contact modal
        document.querySelector(".footer").scrollIntoView({
          behavior: "smooth",
        })
        break
    }
  })
})

// Add loading animation for images
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("load", () => {
    img.style.opacity = "1"
  })

  img.style.opacity = "0"
  img.style.transition = "opacity 0.3s ease"
})

// Keyboard navigation support
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    // Close mobile menu if open
    navMenu.classList.remove("active")
    navToggle.classList.remove("active")
  }
})

// Add focus management for accessibility
const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

document.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    const focusableContent = document.querySelectorAll(focusableElements)
    const firstFocusableElement = focusableContent[0]
    const lastFocusableElement = focusableContent[focusableContent.length - 1]

    if (e.shiftKey) {
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus()
        e.preventDefault()
      }
    } else {
      if (document.activeElement === lastFocusableElement) {
        firstFocusableElement.focus()
        e.preventDefault()
      }
    }
  }
})

// Performance optimization: Lazy loading for images
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src || img.src
        img.classList.remove("lazy")
        imageObserver.unobserve(img)
      }
    })
  })

  document.querySelectorAll("img[data-src]").forEach((img) => {
    imageObserver.observe(img)
  })
}

// Console message for developers
console.log("%c🙏 New Life Church Website", "color: #2563eb; font-size: 20px; font-weight: bold;")
console.log("%cBuilt with love for the rising generation", "color: #dc2626; font-size: 14px;")
console.log(
  "%cIf you're seeing this, you might be interested in joining our tech team!",
  "color: #8b5cf6; font-size: 12px;",
)
