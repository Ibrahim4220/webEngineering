// Typing effect
const text = "BS Software Engineering Student | Web Developer";
let i = 0;

function typingEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typingEffect, 50);
  }
}

typingEffect();

// Projects
const projects = [
  "Automation System for Municipal Corporation Mirpur",
  "Multiple Websites Development",
  "Online Marketplaces",
  "Personal Portfolio Website"
];

const projectList = document.getElementById("projects");

projects.forEach(project => {
  const li = document.createElement("li");
  li.textContent = project;
  projectList.appendChild(li);
});

// Contact
function showContact() {
  document.getElementById("contact-info").innerText =
    "Email: ibrahimharoon9293@gmail.com | Phone: 03008334223";
}