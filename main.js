const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".destination__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".showcase__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".showcase__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".showcase__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".showcase__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".discover__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
});

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();
  let name = document.getElementById("contactName").value.trim();
  let email = document.getElementById("contactEmail").value.trim();
  let message = document.getElementById("contactMessage").value.trim();

  if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
  } else if (!validateEmail(email)) {
      alert("Invalid email format.");
  } else {
      alert("Message Sent Successfully!");
      this.reset();
  }
});

// Sign In Form Validation
document.getElementById("signInForm").addEventListener("submit", function (event) {
  event.preventDefault();
  let email = document.getElementById("signInEmail").value.trim();
  let password = document.getElementById("signInPassword").value.trim();

  if (email === "" || password === "") {
      alert("Please enter both email and password.");
  } else if (!validateEmail(email)) {
      alert("Invalid email format.");
  } else {
      alert("Login Successful!");
      this.reset();
  }
});

// Sign Up Form Validation
document.getElementById("signUpForm").addEventListener("submit", function (event) {
  event.preventDefault();
  let name = document.getElementById("signUpName").value.trim();
  let email = document.getElementById("signUpEmail").value.trim();
  let password = document.getElementById("signUpPassword").value.trim();

  if (name === "" || email === "" || password === "") {
      alert("All fields are required.");
  } else if (!validateEmail(email)) {
      alert("Invalid email format.");
  } else if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
  } else {
      alert("Sign Up Successful!");
      this.reset();
  }
});

// Email Validation Function
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
