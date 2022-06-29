const redBtn = document.querySelector(".red-btn");
const orangeBtn = document.querySelector(".orange-btn");
const cyanBtn = document.querySelector(".cyan-btn");
const display = document.querySelector(".text-body");
const buttons = Array.from(document.getElementsByClassName("buttons"));
const multiply = document.querySelector(".multiply");

redBtn.addEventListener("click", () => {
  document.body.classList.add("red-theme");
  document.body.classList.remove("orange-theme");
  document.body.classList.remove("cyan-theme");
  redBtn.style.opacity = "1";
  orangeBtn.style.opacity = "0";
  cyanBtn.style.opacity = "0";
});

orangeBtn.addEventListener("click", () => {
  document.body.classList.add("orange-theme");
  document.body.classList.remove("red-theme");
  document.body.classList.remove("cyan-theme");
  redBtn.style.opacity = "0";
  orangeBtn.style.opacity = "1";
  cyanBtn.style.opacity = "0";
});

cyanBtn.addEventListener("click", () => {
  document.body.classList.add("cyan-theme");
  document.body.classList.remove("red-theme");
  document.body.classList.remove("orange-theme");
  redBtn.style.opacity = "0";
  orangeBtn.style.opacity = "0";
  cyanBtn.style.opacity = "1";
});

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "RESET":
        display.innerText = "";
        break;
      case "DEL":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      case "x":
        if (multiply.innerText == "x") {
          display.innerText += "*";
        }
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerHTML = "";
        }
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
