/*
let links = document.querySelectorAll(".logo-oblx");
let colors = ["#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"];
let count = 0;

links.forEach((link) => {
  link.style.color = "black";
  link.addEventListener("mouseover", () => {
    count++;
    if (count > 3) {
      count = 0;
    }
    link.style.color = colors[count];
  });
  link.addEventListener("mouseout", () => {
    console.log("out");
    link.style.color = "black";
  });
});*/

let mouse = document.getElementById("mouseShape");
document.addEventListener("mousemove", (e) => {
  mouse.style.left = e.pageX + "px";
  mouse.style.top = e.pageY + "px";
});

document.addEventListener("mouseleave", () => {
  mouse.style.display = "none";
});
document.addEventListener("mouseenter", () => {
  mouse.style.display = "block";
});
// Get all link elements on the page
let links = document.querySelectorAll("a");

// Iterate over each link and add event listener for mouseover
links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    mouse.style.scale = "3.5";
    mouse.style.opacity = "0.4";
  });
  link.addEventListener("mouseout", () => {
    mouse.style.scale = "1";
    mouse.style.opacity = "1";
  });
});

let parallaxCartoon = document.getElementById("parallaxcartoon");
let circle = document.getElementById("circle");
window.addEventListener("scroll", () => {
  let value = window.scrollY;
  parallaxCartoon.style.top = 50 + (value / 20) * 1 + "%";
  circle.style.top = 50 + (value / 30) * 1 + "%";
});

const boxes = document.querySelectorAll(".out-of-screen");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add("in-screen");
    } else {
      box.classList.remove("in-screen");
    }
  });
}

let name_input = document.getElementById("name-input");
let name_input_label = document.getElementById("name-label");
let email_input = document.getElementById("email-input");
let email_input_label = document.getElementById("email-label");
let message_input = document.getElementById("message-textarea");
let message_input_label = document.getElementById("message-label");

name_input.addEventListener("focus", function (event) {
  name_input_label.style.transform = "translateY(0em)";
});

name_input.addEventListener("blur", function (event) {
  if (name_input.value.trim() === "") {
    name_input_label.style.transform = "translateY(3.2rem)";
  }
});
email_input.addEventListener("focus", function (event) {
  email_input_label.style.transform = "translateY(0em)";
});

email_input.addEventListener("blur", function (event) {
  if (email_input.value.trim() === "") {
    email_input_label.style.transform = "translateY(3.2rem)";
  }
});
message_input.addEventListener("focus", function (event) {
  message_input_label.style.transform = "translateY(0em)";
});

message_input.addEventListener("blur", function (event) {
  if (message_input.value.trim() === "") {
    message_input_label.style.transform = "translateY(3.2rem)";
  }
});
