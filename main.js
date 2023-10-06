// for opening and closing accordion panels
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var active = document.querySelector('.accordion.active');
    if (active && active !== this) {
      active.classList.remove('active');
      active.nextElementSibling.style.display = 'none';
    }
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      window.scrollTo(0, 0);
    } 
    else {
      panel.style.display = "block";
      window.scrollTo(0, 0);
    }
      
    });
}