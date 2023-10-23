const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let pass1 = document.getElementById("pass1-el");
let pass2 = document.getElementById("pass2-el");

let password1 = new Array();
let password2 = new Array();

function generate() {
  let len = characters.length;
  var rand1, rand2;
  for (let i = 0; i < 15; i++) {
    rand1 = Math.floor(Math.random() * len);
    password1.push(characters[rand1]);
    console.log(password1);
  }
  for (let j = 0; j < 15; j++) {
    rand2 = Math.floor(Math.random() * len);
    password2.push(characters[rand2]);
    console.log(password2);
  }
  console.log(password1);
  console.log(password2);
  pass1.textContent = password1.join("");
  pass2.textContent = password2.join("");
}
