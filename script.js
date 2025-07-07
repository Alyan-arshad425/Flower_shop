// Toggle Navbar on Small Screens
const toggler = document.getElementById("toggler");
const navbar = document.querySelector(".navbar");

toggler.addEventListener("change", () => {
  if (toggler.checked) {
    navbar.style.display = "flex";
  } else {
    navbar.style.display = "none";
  }
});

// Add to Cart Button Alert
const cartButtons = document.querySelectorAll(".cart-btn");

cartButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Item added to cart!");
  });
});

// Scroll to Top Button
const scrollBtn = document.createElement("button");
scrollBtn.innerText = "↑";
scrollBtn.classList.add("scroll-top-btn");
document.body.appendChild(scrollBtn);

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "2rem";
scrollBtn.style.right = "2rem";
scrollBtn.style.padding = "1rem";
scrollBtn.style.fontSize = "2rem";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.background = "#e84393";
scrollBtn.style.color = "white";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Contact Form Validation (Basic)
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  const name = form.querySelector('input[placeholder="name"]').value.trim();
  const email = form.querySelector('input[placeholder="email"]').value.trim();
  const number = form.querySelector('input[placeholder="number"]').value.trim();
  const message = form.querySelector("textarea").value.trim();

  if (!name || !email || !number || !message) {
    e.preventDefault();
    alert("Please fill in all fields.");
  }
});

function sendEmail() {
  const templateParams = {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_50edp6e", "template_u0jupq8", templateParams)
    .then(() => {
      alert("Message sent successfully!");
    })
    .catch((error) => {
      console.error("Email send failed:", error);
      alert("Failed to send message. Please try again.");
    });

  setTimeout(clearForm, 5000);
}

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    sendEmail();
  });
