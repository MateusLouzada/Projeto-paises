import { render } from "./render.js";

export function addEventSearch(input, countriesHomePage, allCountries) {
  let countries = [];

  input.addEventListener("keyup", function () {
    countries = allCountries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      if (countryName.includes(input.value)) {
        return country;
      }
    });
    render(countries, countriesHomePage);
  });
}
