
// Quando receber o clique no botão, alterna o estado de expansão do conteúdo extra
const toggle = document.querySelector("#article-toggle");
const extraText = document.querySelector("#article-extra");

toggle.addEventListener("click", () => {
  const isExpanded = toggle.getAttribute("aria-expanded") === "true";

  toggle.setAttribute("aria-expanded", String(!isExpanded));
  extraText.hidden = isExpanded;
  toggle.firstChild.textContent = isExpanded ? "Ver mais " : "Ver menos ";
});
