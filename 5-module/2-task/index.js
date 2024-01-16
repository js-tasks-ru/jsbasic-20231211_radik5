function toggleText() {
  let btn = document.querySelector(".toggle-text-button");
  btn.addEventListener("click", function () {
    let txtField = document.querySelector("#text");
    txtField.hidden = !txtField.hidden;
  });
}
