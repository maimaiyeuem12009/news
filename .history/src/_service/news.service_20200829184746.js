const apiUrl = 'https://newsapi.org/v2/'
const apiKey = '9d454cc045c44aa290ecf7c15d09ca4b'

export const newsService = {
  getHeadline
}

function getHeadline (country) {
  const requestUrl = `${apiUrl}top-headlines?country=${country}&apiKey=${apiKey}`
  let request = new Request(requestUrl)
  console.log(request)
  return fetch(request.url,request.headers)
    .then(response => {
      return response.json()
    })
    .then(data => data.articles)
    .catch((error) => {
      console.error(error);
    });
}

