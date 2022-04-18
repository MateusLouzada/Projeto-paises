export async function borderCountries(country, borderCountries) {
  const borders = country.borders;

  if (borders) {
    await borders.forEach((border) => {
      const elementBorder = document.createElement("p");
      elementBorder.value === undefined
        ? (elementBorder.innerHTML = border)
        : (elementBorder.innerHTML = elementBorder.value + border);
      elementBorder.classList.add("borders");
      borderCountries.appendChild(elementBorder);
    });
  }
}
