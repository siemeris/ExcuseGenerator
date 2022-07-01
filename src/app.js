/* eslint-disable */
import "bootstrap";

import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

let indexGenerator = originArray => {
  let Index = Math.floor(Math.random() * originArray.length);
  return Index;
};

let excuseGenerator = () => {
  let excuse =
    who[indexGenerator(who)] +
    " " +
    action[indexGenerator(action)] +
    " " +
    what[indexGenerator(what)] +
    " " +
    when[indexGenerator(when)];

  return excuse;
};

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = excuseGenerator();
  });
  console.log(`Hello Rigo from the console!`);
};
