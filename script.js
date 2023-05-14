const modeToggle = document.getElementById("mode-toggle");
const body = document.querySelector("body");
const title = document.getElementById("title");

modeToggle.addEventListener("click", function() {
  body.classList.toggle("dark-mode");
  if(body.classList.contains("dark-mode"))
  {
    title.textContent = "Night";
  }else
  {
    title.textContent = "Light";
  }
});
