import * as mc from "./modules.js"

let url = "https://restcountries.eu/rest/v2/all";
var allCountrys = [];
const countrysHomePage = document.getElementById("countrys");
const input = document.getElementById("search");
const filterDefault = document.getElementById("filterDefault");
const filterAfrica = document.getElementById("filterAfrica");
const filterAmerica = document.getElementById("filterAmerica");
const filterAsia = document.getElementById("filterAsia");
const filterEurope = document.getElementById("filterEurope");
const filterOceania = document.getElementById("filterOceania");

init();

async function init() {
    await mc.getCountrysAPI(url);
    mc.addEventSearch(input, countrysHomePage);
    mc.addEventsFilters(filterDefault, filterAfrica, filterAmerica, filterAsia, filterEurope, filterOceania, countrysHomePage);
    allCountrys = mc.getCountrys();
    mc.render(allCountrys, countrysHomePage);
}