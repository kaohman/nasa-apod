export const fetchData = async (params = '') => {
  let url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.VUE_APP_API_KEY}`;

  if (params.length) {
    url = url + '&date=' + params;
  }

  const response = await fetch(url);
  const json = await response.json();

  if (response.ok) {
    return json;
  } else {
    throw Error(json);
  }
}
