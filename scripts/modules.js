var allCountrys = [];

export async function render(countrysUsed, countrysHomePage) {
    await homePage(countrysUsed, countrysHomePage);
}

export async function getCountrysAPI(url) {
    await fetch(url)
        .then((resp) => resp.json()).then(data => {
            for (let i = 0; i < Object.keys(data).length; i++) {
                allCountrys.push(data[i])
            }
        }).catch(function (error) {
            console.log(error);
        });        
}

export function getCountrys() {
    return allCountrys;
}

export function addEventSearch(input, countrysHomePage) {
    let countrys = [];

    input.addEventListener("keyup", function () {
        countrys = allCountrys.filter(function (country) {
            const countryName = country.name.toLowerCase();
            if (countryName.includes(input.value)) {
                return country;
            }
        })
        render(countrys, countrysHomePage);
    })
}

async function homePage(countrys, countrysHomePage) {
    countrysHomePage.innerText = "";

    countrys.forEach(country => {
        const card = document.createElement("div");
        insertImage(card, country.flag);
        insertDetais(card, country);
        insertEventCard(card, country);
        card.classList.add("card");
        countrysHomePage.appendChild(card);
    });


}



export function addEventsFilters(filterDefault, filterAfrica, filterAmerica, filterAsia, filterEurope, filterOceania, countrysHomePage) {

    let countrys = [];

    filterDefault.addEventListener("click", function () {
        render(allCountrys, countrysHomePage);
    });

    filterAfrica.addEventListener("click", function () {
        countrys = allCountrys.filter(country => ("Africa" === country.region))
        render(countrys, countrysHomePage);
    });
    filterAmerica.addEventListener("click", function () {
        countrys = allCountrys.filter(country => ("Americas" === country.region))
        render(countrys, countrysHomePage);
    });
    filterAsia.addEventListener("click", function () {
        countrys = allCountrys.filter(country => ("Asia" === country.region))
        render(countrys, countrysHomePage);
    });
    filterEurope.addEventListener("click", function () {
        countrys = allCountrys.filter(country => ("Europe" === country.region))
        render(countrys, countrysHomePage);
    });
    filterOceania.addEventListener("click", function () {
        countrys = allCountrys.filter(country => ("Oceania" === country.region))
        render(countrys, countrysHomePage);
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
        //Para funcionar no GITHUB
        //const urlDetails = location.href + "details.html";
        //location.assign(urlDetails);
        
        //Para testes
        localStorage.setItem("country", JSON.stringify(country));
        location.href = "http://127.0.0.1:5500/details.html";
    });
}