let btn = document.getElementById("button-to-validate");
let wrapper1 = document.getElementById("wr-1");
let wrapper2 = document.getElementById("wr-2");

console.log(btn);
wrapper2.style.display = "none";

function newPage() {
  if (wrapper2.style.display == "none") {
    wrapper2.style.display = "inline-block";
    wrapper1.style.display = "none";
  }

  let placeForEmailTxt = document.getElementById("text-to-add");
  let input = document.getElementById("input-email");
  placeForEmailTxt.innerHTML = input.email.value;
}

btn.addEventListener("onclick", newPage);
