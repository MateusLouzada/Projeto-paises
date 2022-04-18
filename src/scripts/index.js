import { getcountries, getcountriesAPI } from "./utils/principal/gets.js";
import { addEventSearch } from "./utils/principal/eventsearch.js";
import { addEventsFilters } from "./utils/principal/filter.js";
import { render } from "./utils/principal/render.js";

let url = "https://restcountries.com/v3/all";
var allCountries = [];

const countriesHomePage = document.getElementById("countries");
const input = document.getElementById("search");
const filterDefault = document.getElementById("filterDefault");
const filterAfrica = document.getElementById("filterAfrica");
const filterAmerica = document.getElementById("filterAmerica");
const filterAsia = document.getElementById("filterAsia");
const filterEurope = document.getElementById("filterEurope");
const filterOceania = document.getElementById("filterOceania");

init();

async function init() {
  await getcountriesAPI(url);
  allCountries = getcountries();
  if (input && countriesHomePage) {
    if (countriesHomePage)
      addEventSearch(input, countriesHomePage, allCountries);
  }
  addEventsFilters(
    filterDefault,
    filterAfrica,
    filterAmerica,
    filterAsia,
    filterEurope,
    filterOceania,
    countriesHomePage,
    allCountries
  );

  if (countriesHomePage) render(allCountries, countriesHomePage);
}
