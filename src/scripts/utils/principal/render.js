import { homePage } from "./homepage.js";

export async function render(countriesUsed, countriesHomePage) {
  await homePage(countriesUsed, countriesHomePage);
}
