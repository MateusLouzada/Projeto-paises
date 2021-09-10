
const imageCountrys = document.getElementById("imageCountry");
const detailsCountrys = document.getElementById("detailsCountry");
let url = "https://restcountries.eu/rest/v2/all";
var allCountrys = [];

init();

async function init() {
    await getCountrys();
    await addEventSearch();
    render(allCountrys);
    addEventsFilters();
}

function render(countrysUsed) {
    homePage(countrysUsed);
}

async function getCountrys() {
    await fetch(url)
        .then((resp) => resp.json()).then(data => {
            for (i = 0; i < Object.keys(data).length; i++) {
                allCountrys.push(data[i])

            }
        }).catch(function (error) {
            console.log(error);
        });
}

async function addEventSearch() {
    const input = document.getElementById("search");
    let countrys = [];

    input.addEventListener("keyup", function() {
        countrys = allCountrys.filter(function (country) {
            const countryName = country.name.toLowerCase();
            if(countryName.includes(input.value)){
                return country;
            }
        })
        render(countrys);
    })
}

function homePage(countrys) {
    const countrysHomePage = document.getElementById("countrys");
    countrysHomePage.innerText = "";

    countrys.forEach(country => {
        const card = document.createElement("div");
        insertImage(card, country.flag);
        insertDetais(card, country);
        card.classList.add("card");
        countrysHomePage.appendChild(card);
    });


}



function addEventsFilters() {
    const filterDefault = document.getElementById("filterDefault");
    const filterAfrica = document.getElementById("filterAfrica");
    const filterAmerica = document.getElementById("filterAmerica");
    const filterAsia = document.getElementById("filterAsia");
    const filterEurope = document.getElementById("filterEurope");
    const filterOceania = document.getElementById("filterOceania");
    let countrys = [];

    filterDefault.addEventListener("click", function () {
        render(allCountrys);
    });

    filterAfrica.addEventListener("click", function () {
        countrys = allCountrys.filter(country => ("Africa" === country.region))
        render(countrys);
    });
    filterAmerica.addEventListener("click", function () {
        countrys = allCountrys.filter(country => ("Americas" === country.region))
        render(countrys);
    });
    filterAsia.addEventListener("click", function () {
        countrys = allCountrys.filter(country => ("Asia" === country.region))
        render(countrys);
    });
    filterEurope.addEventListener("click", function () {
        countrys = allCountrys.filter(country => ("Europe" === country.region))
        render(countrys);
    });
    filterOceania.addEventListener("click", function () {
        countrys = allCountrys.filter(country => ("Oceania" === country.region))
        render(countrys);
    });
}

function insertImage(card, linkImage) {
    const image = document.createElement("img");
    image.src = linkImage;
    image.classList.add("image-country");
    card.appendChild(image);
}

function insertDetais(card, country) {
    const detailsContainer = document.createElement("div");
    const title = document.createElement("h3");
    const population = document.createElement("p");
    const region = document.createElement("p");
    const capital = document.createElement("p");

    title.innerHTML = country.name;
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