document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM został wczytany");
  let btn = document.getElementById("button-to-validate");
  let wrapper1 = document.getElementById("wr-1");
  let wrapper2 = document.getElementById("wr-2");

  wrapper2.style.display = "none";

  function newPage() {
    if (wrapper2.style.display == "none") {
      wrapper2.style.display = "inline-block";
      wrapper1.style.display = "none";
    }

    let placeForEmailTxt = document.getElementById("text-to-add");
    let inputToAdd = document.getElementById("input-email");
    console.log(inputToAdd);
    placeForEmailTxt.innerHTML = inputToAdd.value;
  }

  btn.onclick = newPage;
  // btn.addEventListener("click", newPage());
});
