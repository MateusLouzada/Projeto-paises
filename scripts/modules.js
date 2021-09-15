var allcountries = [];

export async function render(countriesUsed, countriesHomePage) {
    await homePage(countriesUsed, countriesHomePage);
}

export async function getcountriesAPI(url) {
    await fetch(url)
        .then((resp) => resp.json()).then(data => {
            for (let i = 0; i < Object.keys(data).length; i++) {
                allcountries.push(data[i])
            }
        }).catch(function (error) {
            console.log(error);
        });        
}

export function getcountries() {
    return allcountries;
}

export function addEventSearch(input, countriesHomePage) {
    let countries = [];

    input.addEventListener("keyup", function () {
        countries = allcountries.filter(function (country) {
            const countryName = country.name.toLowerCase();
            if (countryName.includes(input.value)) {
                return country;
            }
        })
        render(countries, countriesHomePage);
    })
}

async function homePage(countries, countriesHomePage) {
    countriesHomePage.innerText = "";

    countries.forEach(country => {
        const card = document.createElement("div");
        insertImage(card, country.flag);
        insertDetais(card, country);
        insertEventCard(card, country);
        card.classList.add("card");
        countriesHomePage.appendChild(card);
    });


}



export function addEventsFilters(filterDefault, filterAfrica, filterAmerica, filterAsia, filterEurope, filterOceania, countriesHomePage) {

    let countries = [];

    filterDefault.addEventListener("click", function () {
        render(allcountries, countriesHomePage);
    });

    filterAfrica.addEventListener("click", function () {
        countries = allcountries.filter(country => ("Africa" === country.region))
        render(countries, countriesHomePage);
    });
    filterAmerica.addEventListener("click", function () {
        countries = allcountries.filter(country => ("Americas" === country.region))
        render(countries, countriesHomePage);
    });
    filterAsia.addEventListener("click", function () {
        countries = allcountries.filter(country => ("Asia" === country.region))
        render(countries, countriesHomePage);
    });
    filterEurope.addEventListener("click", function () {
        countries = allcountries.filter(country => ("Europe" === country.region))
        render(countries, countriesHomePage);
    });
    filterOceania.addEventListener("click", function () {
        countries = allcountries.filter(country => ("Oceania" === country.region))
        render(countries, countriesHomePage);
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

function insertEventCard(card, country) {
    card.addEventListener("click", function () {
        localStorage.setItem("country", JSON.stringify(country));
        const urlDetails = "https://mateuslouzada.github.io/Projeto-paises/details.html";
        location.assign(urlDetails);  
    });
}

export function eventBack(button) {
    button.addEventListener("click", function() {
        localStorage.removeItem("country");
        //GitHub
        const urlDetails = "https://mateuslouzada.github.io/Projeto-paises/";
        location.assign(urlDetails);
        
        //Para testes
        //const urlDetails = "";
        //location.assign(urlDetails);
    });
}

export function positionFlag(country, divFlag){
    const flag = country.flag;
    const img = document.createElement("img");

    img.src = flag;
    img.classList.add("image-country");
    divFlag.appendChild(img);
}

export function positionDetails(country, childrens){
    addLanguages(country);
    childrens[0].innerHTML = "Native Name: " + country.nativeName;
    childrens[1].innerHTML = "Population: " + country.population;
    childrens[2].innerHTML = "Region: " + country.region;
    childrens[3].innerHTML = "Sub Region: " + country.subregion;
    childrens[4].innerHTML = "Capital: " + country.capital;
    childrens[5].innerHTML = "Top Level Domains: " + country.topLevelDomain;
    childrens[6].innerHTML = "Currencies: " + addCurrencies(country);
    childrens[7].innerHTML = "Languages: " + addLanguages(country);
}

function addLanguages(country) {
    const languages = country.languages;
    let languagesText = "";
    
    languages.forEach(language => {
        if(languagesText == ""){
            languagesText = language.name;
        }else{
            languagesText = languagesText + ", " + language.name;
        }
    });

    return languagesText;
}

function addCurrencies(country){
    const currencies = country.currencies;
    let currenciesText = "";
    
    currencies.forEach(currencie => {
        if(currenciesText == ""){
            currenciesText = currencie.name;
        }else{
            currenciesText = currenciesText + ", " + currencie.name;
        }
    });

    return currenciesText;
}

export function titleCountry(country, title){
    title.innerText = country.name
}

export async function borderCountries(country, borderCountries) {
    const borders = country.borders;

    await borders.forEach(border => {
        const url = "https://restcountries.eu/rest/v2/alpha/" + border;

        fetch(url)
        .then((resp) => resp.json()).then(data => {
            const countryBorder = data.name;
            
            const elementBorder = document.createElement("p");
            elementBorder.innerHTML = countryBorder;
            elementBorder.classList.add("borders");
            borderCountries.appendChild(elementBorder);
        }).catch(function (error) {
            console.log(error);
        });
        
    });

    
}
