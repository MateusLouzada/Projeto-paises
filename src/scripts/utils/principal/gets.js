let allcountries = [];

export async function getcountriesAPI(url) {
  const response = await fetch(url);
  const data = await response.json();
  const result = (data) => {
    for (let value in data) {
      allcountries.push(data[value]);
    }
  };
  result(data);
}

export function getcountries() {
  return allcountries;
}
