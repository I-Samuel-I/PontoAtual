const slides = [
  {
    id: 101,
    category: "Política",
    title: "Congresso debate novo pacote fiscal para 2025",
    summary: "Proposta prevê ajustes em impostos e busca equilibrar as contas públicas.",
    image: "assets/images/heroIMG.png",
  },
  {
    id: 102,
    category: "Economia",
    title: "Mercado reage a dados e eleva expectativa de juros",
    summary: "Indicadores recentes reacendem debate sobre os próximos passos do Banco Central.",
    image: "assets/images/economia.png",
  },
  {
    id: 103,
    category: "Tecnologia",
    title: "Inteligência artificial transforma o futuro do mercado de trabalho",
    summary: "Novas ferramentas de IA estão redefinindo funções, criando oportunidades e exigindo novas habilidades dos profissionais em todo o mundo.",
    image: "assets/images/tecnologia.png",
  },
  {
    id: 104,
    category: "Mundo",
    title: "Líderes mundiais se reúnem para discutir clima",
    summary: "Encontro deve definir novas metas de redução de emissões até 2030.",
    image: "assets/images/mundo.png",
  },
];

let currentSlide = 0;

const previousButton = document.querySelector(".carousel-arrow--previous");
const nextButton = document.querySelector(".carousel-arrow--next");
const category = document.querySelector(".featured__category");
const title = document.querySelector("#featured-title");
const summary = document.querySelector(".featured__summary");
const background = document.querySelector(".hero__background");
const readMore = document.querySelector(".read-more");
const previews = document.querySelectorAll(".carousel-preview__item");

function showSlide(index) {
  // Faz o índice voltar para o começo ou ir para o fim quando necessário.
  currentSlide = (index + slides.length) % slides.length;

  const slide = slides[currentSlide];

  category.textContent = slide.category;
  title.textContent = slide.title;
  summary.textContent = slide.summary;
  background.style.backgroundImage = `url("${slide.image}")`;
  readMore.href = "pages/id/index.html";

  previews.forEach((preview, previewIndex) => {
    preview.classList.toggle("is-active", previewIndex === currentSlide);
  });
}

nextButton.addEventListener("click", () => {
  showSlide(currentSlide + 1);
});

previousButton.addEventListener("click", () => {
  showSlide(currentSlide - 1);
});

showSlide(currentSlide);
