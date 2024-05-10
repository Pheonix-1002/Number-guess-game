let btn = document.querySelector("#btn");
let inp = document.querySelector("#guess");
let ran = document.querySelector("#limit");
let p = document.querySelector("h2");

btn.addEventListener("click", () => {
  let n1 = Math.floor(Math.random() * ran.value) + 1;
  if(ran.value==""||inp.value==""){
    p.innerText = "Please fill all credentials";
  }
  else{
    if (inp.value == n1) {
        p.innerText = `Your Guess is Right , The number is ${inp.value}`;
        ran.value = "";
      } else {
        p.innerText = "Your Guess is Wrong";
      }
  }
  inp.value = "";
});

