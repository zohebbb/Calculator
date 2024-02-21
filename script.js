let show = document.querySelector(".screen");
let button = document.querySelectorAll(".button");
let temp;
let ope = null;
const handleInput = (x) => {
  const calcii = (inp, out, ope) => {
    if (ope === "+") {
      return inp + out;
    } else if (ope === "-") {
      return inp - out;
    } else if (ope === "×" || ope === "*") {
      return out * inp;
    } else if (ope === "÷" || ope === "/") {
      return inp / out;
    }
  };
  if (!isNaN(+x)) {
    if (+show.innerText === 0) {
      show.innerText = x;
    } else {
      show.innerText = show.innerText + x;
    }
  } else if (x === "C") {
    temp = 0;
    ope = null;
    show.innerText = 0;
  } else if (x === "←") {
    if (show.innerText.length === 1) {
      show.innerText = 0;
    } else {
      show.innerText = show.innerText.slice(0, -1);
    }
  } else if (x === "=") {
    if (ope === null) {
      show.innerText = show.innerText;
    } else {
      show.innerText = calcii(temp, +show.innerText, ope);
      temp = +show.innerText;
      ope = null;
    }
  } else {
    if (ope === null) {
      temp = +show.innerText;
    } else {
      temp = calcii(temp, +show.innerText, ope);
    }
    ope = x;
    show.innerText = 0;
  }
};

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => {
    let x = button[i].innerText;
    handleInput(x);
  });
}

document.addEventListener("keydown", (e) => {
  let key = e.key;
  if (/^[0-9+\-*/.=]$/.test(key)) {
    handleInput(key);
  } else if (key === "Enter") {
    handleInput("=");
  }
});
