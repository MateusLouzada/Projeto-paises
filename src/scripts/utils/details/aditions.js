export function addLanguages(country) {
  const languages = country.languages;
  let languagesText = "";

  for (let language in languages) {
    if (languagesText == "") {
      languagesText = language;
    } else {
      languagesText = languagesText + ", " + language;
    }
  }

  return languagesText;
}

export function addCurrencies(country) {
  const currencies = country.currencies;
  let currencieInside = "";
  let currencieText = "";
  for (let currencie in currencies) {
    currencieInside = currencie;
    currencieText === ""
      ? (currencieText = currencies[currencieInside].name)
      : (currencieText = `${currencieText} ${currencies[currencieInside].name}`);
  }

  return currencieText;
}
