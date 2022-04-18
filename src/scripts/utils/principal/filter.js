import { render } from "./render.js";

export function addEventsFilters(
  filterDefault,
  filterAfrica,
  filterAmerica,
  filterAsia,
  filterEurope,
  filterOceania,
  countriesHomePage,
  allCountries
) {
  let countries = [];

  filterDefault.addEventListener("click", function () {
    render(allCountries, countriesHomePage);
  });

  filterAfrica.addEventListener("click", function () {
    countries = allCountries.filter((country) => "Africa" === country.region);
    render(countries, countriesHomePage);
  });
  filterAmerica.addEventListener("click", function () {
    countries = allCountries.filter((country) => "Americas" === country.region);
    render(countries, countriesHomePage);
  });
  filterAsia.addEventListener("click", function () {
    countries = allCountries.filter((country) => "Asia" === country.region);
    render(countries, countriesHomePage);
  });
  filterEurope.addEventListener("click", function () {
    countries = allCountries.filter((country) => "Europe" === country.region);
    render(countries, countriesHomePage);
  });
  filterOceania.addEventListener("click", function () {
    countries = allCountries.filter((country) => "Oceania" === country.region);
    render(countries, countriesHomePage);
  });
}
