function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  const windowMetade = (window.innerHeight * 3) / 4;
  const activeClass = "ativo";
  if (sections.length) {
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisibile = sectionTop - windowMetade < 0;
        if (isSectionVisibile) section.classList.add(activeClass);
        else section.classList.remove(activeClass);
      });
    }
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
initAnimacaoScroll();
