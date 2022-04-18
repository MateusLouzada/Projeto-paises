import { borderCountries } from "./utils/details/borders.js";
import { eventBack } from "./utils/details/eventback.js";
import { positionDetails, positionFlag } from "./utils/details/positions.js";
import { titleCountry } from "./utils/details/gettitle.js";

const country = JSON.parse(localStorage.getItem("country"));

const buttonBack = document.getElementById("buttonBack");
const flag = document.getElementById("flag");
const details = document.getElementById("detailsCountry");
const childrens = details.children;
const title = document.getElementById("title");
const borderCountriesElement = document.getElementById("borderCountries");

borderCountries(country, borderCountriesElement);
eventBack(buttonBack);
positionFlag(country, flag);
positionDetails(country, childrens);
titleCountry(country, title);
