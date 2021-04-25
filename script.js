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

function scrollSuave() {
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
}
scrollSuave();

function scrollAnimation() {
  const sections = document.querySelectorAll(".animacao");

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop <= 700) {
        section.classList.add("execanime");
      }
    });
  }
  window.addEventListener("scroll", animaScroll);
}
scrollAnimation();

function modalInteracao() {
  const btnLogin = document.querySelector("[data-modal='abrir']");
  const btnFechar = document.querySelector("[data-modal='fechar']");
  const modalContainer = document.querySelector(".modal-container");

  function interacaoModal(event) {
    event.preventDefault();
    modalContainer.classList.toggle("ativo");
  }

  function fecharFora(event) {
    if (event.target === this) interacaoModal(event);
  }

  btnLogin.addEventListener("click", interacaoModal);
  btnFechar.addEventListener("click", interacaoModal);
  modalContainer.addEventListener("click", fecharFora);
}
modalInteracao();
