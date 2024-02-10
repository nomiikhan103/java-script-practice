//let a = document.querySelector("#box");

// btn.onclick = (evt) => {
//   // let box = (document.querySelector("#box").style.backgroundColor = "red");
//   console.log(evt);
//   console.log(evt.type);
//   console.log(evt.clientX, evt.clientY);
// };

// box.onmouseenter = (e) => {
//   let box1 = (document.querySelector("#box").style.backgroundColor = "red");
//   let para = document.createElement("p");
//   para.innerHTML = "This is a paragraph.";
//   document.getElementById("box").appendChild(para);
// };

// btn.addEventListener("click", () => {
//   console.log("button 1 was clicked");
// });

// const handler3 =
//   ("click",
//   () => {
//     document.querySelector("#btn").style.backgroundColor = "purple";
//     //document.querySelector("#btn").style.color = "white";
//   });

// btn.removeEventListener("click", handler3);

// let mode = document.querySelector("#mode");

// let body = document.querySelector("body");
// let curretmode = "light";

// mode.addEventListener("click", () => {
//   if (curretmode === "lightmode") {
//     curretmode = "darkmode";
//     body.classList.add("dark");
//   } else {
//     curretmode = "lightmode";
//     body.classList.add("light");
//   }
//   console.log(curretmode);
// });

let mode = document.querySelector("#mode");

let body = document.querySelector("body");
let input = document.querySelector("#input");
let currentMode = "light";

mode.addEventListener("click", () => {
  if (currentMode === "light") {
    currentMode = "dark";
    body.classList.add("dark");
    body.classList.remove("light"); // Remove the light class
    input.classList.add("first");
    input.classList.remove("secound");
  } else {
    currentMode = "light";
    body.classList.add("light");
    body.classList.remove("dark"); // Remove the dark class
    input.classList.add("secound");
    input.classList.remove("first");
  }
  console.log(currentMode);
});
