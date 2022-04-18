import { insertImage, insertDetais, insertEventCard } from "./insert.js";

export async function homePage(countries, countriesHomePage) {
  countriesHomePage.innerText = "";

  countries.forEach((country) => {
    const card = document.createElement("div");
    insertImage(card, country.flags[1]);
    insertDetais(card, country);
    insertEventCard(card, country);
    card.classList.add("card");
    countriesHomePage.appendChild(card);
  });
}
