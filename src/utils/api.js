import { apiKey } from './api-key';

export const fetchData = async (params = '') => {
  let url = `https://api.nasa.gov/planetary/apod?date=2019-04-02&api_key=${apiKey}`;

  if (params.length) {
    url = url + params;
  }
  
  const response = await fetch(url);
  const json = await response.json();
  
  if (response.ok) {
    return json;
  } else {
    throw Error(json);
  }
}
