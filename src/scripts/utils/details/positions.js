import { addCurrencies, addLanguages } from "./aditions.js";

export function positionFlag(country, divFlag) {
  const flag = country.flags[1];
  const img = document.createElement("img");

  img.src = flag;
  img.classList.add("image-country");
  divFlag.appendChild(img);
}

export function positionDetails(country, childrens) {
  addLanguages(country);
  childrens[0].innerHTML = "Name: " + country.name.common;
  childrens[1].innerHTML = "Population: " + country.population;
  childrens[2].innerHTML = "Region: " + country.region;
  childrens[3].innerHTML =
    country.subregion != undefined
      ? "Sub Region: " + country.subregion
      : "Sub Region: Not have";
  childrens[4].innerHTML = "Capital: " + country.capital;
  childrens[5].innerHTML = "Currencies: " + addCurrencies(country);
  childrens[6].innerHTML = "Languages: " + addLanguages(country);
}
