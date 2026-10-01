const category = document.body.dataset.category;
const categoryImages = {
  Política: "../../assets/images/brasilia.png",
  Economia: "../../assets/images/economia.png",
  Tecnologia: "../../assets/images/tecnologia.png",
  Mundo: "../../assets/images/mundo.png",
  Cultura: "../../assets/images/featured-world.png",
  Esportes: "../../assets/images/esportes.png",
};

const categoryNews = window.noticias
  .filter((news) => news.categoria === category)
  .sort((first, second) => second.data.localeCompare(first.data));

const formatDate = (date) =>
  new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
    .format(new Date(`${date}T12:00:00`))
    .replace(" de ", " ")
    .replace(".", "");

const grid = document.querySelector("#category-grid");
const heroArt = document.querySelector(".category-hero__art");
document.querySelector("#category-title").textContent = category;
const categoryLabel = document.querySelector("#category-label");
if (categoryLabel) {
  categoryLabel.textContent = category;
}
document.querySelector("#article-count").textContent = categoryNews.length;
document.querySelector("#topic-total").textContent = categoryNews.length;
heroArt.style.backgroundImage = `url("${categoryImages[category]}")`;

grid.innerHTML = categoryNews
  .map(
    (news) => `
      <a class="category-card" href="../id/index.html">
        <img class="category-card__image" src="${categoryImages[category]}" alt="" loading="lazy" />
        <p class="category-card__meta"><span>${news.categoria}</span><time datetime="${news.data}">${formatDate(news.data)}</time></p>
        <h3>${news.titulo}</h3>
        <p>${news.resumo}</p>
        <span class="category-card__link">Ler matéria <img class="category-card__arrow icon-arrow" src="../../assets/icons/arrow-right-0-2.svg" alt="" aria-hidden="true" /></span>
      </a>
    `,
  )
  .join("");
