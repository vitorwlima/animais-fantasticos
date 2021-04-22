function initTabNav() {
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
}
initTabNav();

function initFaqInteraction() {
  const tabPerguntas = document.querySelectorAll("dt");
  const tabRespostas = document.querySelectorAll("dd");

  function pickQuestion(index) {
    tabRespostas[index].classList.toggle("ativo");
    tabPerguntas[index].classList.toggle("ativo");
  }

  tabPerguntas.forEach((item, index) => {
    item.addEventListener("click", function () {
      pickQuestion(index);
    });
  });
  tabPerguntas[0].classList.add("ativo");
  tabRespostas[0].classList.add("ativo");
}
initFaqInteraction();

const linksInternos = document.querySelectorAll("a[href^='#']");

function scrollToSection(event) {
  event.preventDefault();
  const href = this.getAttribute("href");
  const section = document.querySelector(href);
  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

linksInternos.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});
