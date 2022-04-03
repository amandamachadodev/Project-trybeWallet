const ENDPOINT = 'https://economia.awesomeapi.com.br/json/all';

async function getCurrency() {
  const response = await fetch(ENDPOINT);
  const data = await response.json();
  return data;
}

export default getCurrency;
