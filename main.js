var get = document.getElementsByClassName("dropdown");
var i;

for (i = 0; i < get.length; i++) {
  get[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
  });
}
