export function insertImage(card, linkImage) {
  const image = document.createElement("img");
  image.src = linkImage;
  image.classList.add("image-country");
  card.appendChild(image);
}

export function insertDetais(card, country) {
  const detailsContainer = document.createElement("div");
  const title = document.createElement("h3");
  const population = document.createElement("p");
  const region = document.createElement("p");
  const capital = document.createElement("p");

  title.innerHTML = country.name.common;
  population.innerHTML = "Population: " + country.population;
  region.innerHTML = "Region: " + country.region;
  capital.innerHTML = "Capital: " + country.capital;

  detailsContainer.appendChild(title);
  detailsContainer.appendChild(population);
  detailsContainer.appendChild(region);
  detailsContainer.appendChild(capital);

  detailsContainer.classList.add("container-country");

  card.appendChild(detailsContainer);
}

export function insertEventCard(card, country) {
  card.addEventListener("click", function () {
    localStorage.setItem("country", JSON.stringify(country));
    const urlDetails = window.location + "details.html";
    location.assign(urlDetails);
  });
}
