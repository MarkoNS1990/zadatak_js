const colors = [
  "blue",
  "red",
  "green",
  "aquamarine",
  "yellow",
  "pink",
  "yellow",
  "white",
  "tomato",
];
const body = document.querySelector("body");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
// const back = document.querySelector("#back");
const p = document.querySelector("p");
const img = document.querySelector("img");
const span = document.querySelector("span");
const male = document.querySelector("#male");
const female = document.querySelector("#female");
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const input3 = document.querySelector("#input3");
let i = 0;
function changeColor() {
  body.style.backgroundColor = colors[i];
  i++;

  if (i > colors.length - 1) {
    i = 0;
  }
}
setInterval(changeColor, 1000);

btn1.addEventListener("click", () => {
  alert("Welcome");
});

btn2.addEventListener("click", () => {
  p.style.backgroundColor = "white";
  p.innerHTML = "Text has changed!";
  p.style.fontSize = "30px";
});

img.addEventListener("mouseover", () => {
  img.setAttribute("src", "img/samantha.jpg");
});

btn3.addEventListener("click", () => {
  if (male.checked) {
    span.innerHTML = "male";
  } else if (female.checked) {
    span.innerHTML = "female";
  }
});

btn4.addEventListener("click", () => {
  window.location.assign("page.html");
});

btn5.addEventListener("click", () => {
  const ul = document.createElement("ul");

  const arr = [input1.value, input2.value, input3.value];
  arr.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = item;
    ul.appendChild(li);
  });
  ul.style.listStyle = "none";
  body.appendChild(ul);
  clearInput();
});
function clearInput() {
  input1.value = "";
  input2.value = "";
  input3.value = "";
}

// back.addEventListener("click", () => {
//   window.history.back();
// });
