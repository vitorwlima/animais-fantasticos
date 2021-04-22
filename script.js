const tabMenu = document.querySelectorAll(".animais-lista li");
const tabContent = document.querySelectorAll(".animais-descricao section");

function definirAnimal(index) {
  tabContent.forEach((item) => {
    item.classList.remove("ativo");
  });
  tabContent[index].classList.add("ativo");
}

tabMenu.forEach((item, index) => {
  item.addEventListener("click", function () {
    definirAnimal(index);
  });
});
