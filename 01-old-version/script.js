const toggleButton = document.querySelector("#toggle-aside");
const aside = document.querySelector("#aside");

toggleButton.addEventListener("click", () => {
    aside.classList.toggle("aside-fechado");
});
