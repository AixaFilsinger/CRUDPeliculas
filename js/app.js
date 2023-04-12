document
  .getElementById("btn_themeDark")
  .addEventListener("click", () => cambiarTema("dark"));
document
  .getElementById("btn_themeLigth")
  .addEventListener("click", () => cambiarTema("ligth"));

function cambiarTema(color) {
  let body = document.querySelector("body");
  body.setAttribute("data-bs-theme", color);
  //Cambiar el icono
  color == "dark"
    ? (document.getElementById("icon_theme").className = "bi bi-moon-stars")
    : (document.getElementById("icon_theme").className =
        "bi bi-brightness-high-fill");
}
