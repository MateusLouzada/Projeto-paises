import * as mc from "./modules.js"

let url = "https://restcountries.eu/rest/v2/all";
var allcountries = [];
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
    await mc.getcountriesAPI(url);
    mc.addEventSearch(input, countriesHomePage);
    mc.addEventsFilters(filterDefault, filterAfrica, filterAmerica, filterAsia, filterEurope, filterOceania, countriesHomePage);
    allcountries = mc.getcountries();
    mc.render(allcountries, countriesHomePage);
}