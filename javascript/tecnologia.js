const technologyImageRoot = "../../assets/images/";

const technologyImages = [
  "01_estudantes.png",
  "02_economia_grafico.png",
  "03_mundo_satelite.png",
  "04_inovacao_oculos_vr.png",
  "05_tecnologia_5g.png",
  "06_ciencia_chip.png",
  "07_startups_investimento.png",
  "08_tecnologia_energia_eolica.png",
];

const technologyNews = window.noticias
  .filter((news) => news.categoria === "Tecnologia")
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
document.querySelector("#article-count").textContent = technologyNews.length;
document.querySelector("#topic-total").textContent = technologyNews.length;

grid.innerHTML = technologyNews
  .map(
    (news, index) => `
      <article class="category-card">
        <img class="category-card__image" src="${technologyImageRoot}${technologyImages[index]}" alt="" loading="lazy" />
        <p class="category-card__meta"><span>${news.categoria}</span><time datetime="${news.data}">${formatDate(news.data)}</time></p>
        <h3>${news.titulo}</h3>
        <p>${news.resumo}</p>
        <span class="category-card__link">Ler materia <span aria-hidden="true">&#8594;</span></span>
      </article>
    `,
  )
  .join("");
