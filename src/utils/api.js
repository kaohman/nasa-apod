import { apiKey } from './api-key';

export const fetchData = async (params = '') => {
  let url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

  if (params.length) {
    url = url + '&date=' + params;
  }
  console.log(url)
  const response = await fetch(url);
  const json = await response.json();

  if (response.ok) {
    return json;
  } else {
    throw Error(json);
  }
}
