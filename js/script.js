console.log("welcome to my profile");

const cross = document.querySelectorAll(".cross");
const downArrow = document.querySelectorAll(".downArrow");
const signInBtn = document.querySelectorAll(".signInBtn");
const createAcBtn = document.querySelectorAll(".createAcBtn");
let CreateAc = document.querySelector(".createAcSection");
let SignIn = document.querySelector(".signInSection");
const Filters = document.querySelector('.Filters');
let buttons = document.querySelector('.buttons');
const buttonsClose = document.querySelector('.buttonsClose');
console.log(SignIn);
console.log(CreateAc);
console.log(cross);
CreateAc.style.display = "none";
SignIn.style.display = "none";

signInBtn.forEach((signInBtn) => {
  signInBtn.addEventListener("click", () => {
    SignIn.style.display = "flex";
    CreateAc.style.display = "none";
  });
});

createAcBtn.forEach((createAcBtn) => {
  createAcBtn.addEventListener("click", () => {
    CreateAc.style.display = "flex";
    SignIn.style.display = "none";
  });
});


downArrow.forEach((downArrow) => {
  downArrow.addEventListener("click", () => {
    CreateAc.style.display = "flex";
    SignIn.style.display = "none";
  });
});

cross.forEach((cross) => {
  cross.addEventListener("click", () => {
    console.log("clicked");

    CreateAc.style.display = "none";
    SignIn.style.display = "none";
  });
});

Filters.addEventListener('click', ()=>{
  buttons.style.maxHeight = '300px';
})

buttonsClose.addEventListener('click', ()=>{
  buttons.style.maxHeight = '0px';
})