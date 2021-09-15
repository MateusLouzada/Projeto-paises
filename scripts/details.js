import * as md from "./modules.js";

const country =  JSON.parse(localStorage.getItem("country"));

const buttonBack = document.getElementById("buttonBack");
const flag = document.getElementById("flag");
const details = document.getElementById("detailsCountry");
const childrens = details.children;
const title = document.getElementById("title");
const borderCountries = document.getElementById("borderCountries");

await md.borderCountries(country, borderCountries);
md.eventBack(buttonBack);
md.positionFlag(country, flag);
md.positionDetails(country, childrens);
md.titleCountry(country, title);
