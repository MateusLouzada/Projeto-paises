const countrys = document.getElementById("countrys");
const imageCountrys = document.getElementById("imageCountry");
const detailsCountrys = document.getElementById("detailsCountry");
var url = "https://restcountries.eu/rest/v2/all";

render();
addEventsFilters();

function render() {
    homePage();
}

function homePage() {
fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        data.forEach(country => {
            const card = document.createElement("div");
            insertImage(card, country.flag);
            insertDetais(card, country);
            card.classList.add("card");
            countrys.appendChild(card);
        });
    })
.catch(function(error){
    console.log(error)
});
}

function addEventsFilters() {
    const filterDefault = document.getElementById("filterDefault");
    const filterAfrica = document.getElementById("filterAfrica");
    const filterAmerica = document.getElementById("filterAmerica");
    const filterAsia = document.getElementById("filterAsia");
    const filterEurope = document.getElementById("filterEurope");
    const filterOceania = document.getElementById("filterOceania");


    filterDefault.addEventListener("click", function(){
        url = "https://restcountries.eu/rest/v2/all";
        countrys.innerText = "";
        render();
    });

    filterAfrica.addEventListener("click", function() { 
        url = "https://restcountries.eu/rest/v2/region/africa";
        countrys.innerText = "";
        render();
    });
    filterAmerica.addEventListener("click", function() { 
        url = "https://restcountries.eu/rest/v2/region/americas";
        countrys.innerText = "";
        render();
    });
    filterAsia.addEventListener("click", function() { 
        url = "https://restcountries.eu/rest/v2/region/asia";
        countrys.innerText = "";
        render();
    });
    filterEurope.addEventListener("click", function() { 
        url = "https://restcountries.eu/rest/v2/region/europe";
        countrys.innerText = "";
        render();
    });
    filterOceania.addEventListener("click", function() { 
        url = "https://restcountries.eu/rest/v2/region/oceania";
        countrys.innerText = "";
        render();
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