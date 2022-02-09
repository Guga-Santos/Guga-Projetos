const CLIENT_ID = '8297def4362d4f30b658b90c5ece35d7';
const CLIENT_SECRET = '0f5d8cf78bfb4411b6512dba7d5c3d93';
let token;

// ----------------------Faz a requisição do Token------------------------
const getToken = async () => {
  const requestInfo = {
    method: 'POST',
    headers: {
      Authorization: 'Basic' + btoa(CLIENT_ID + ':' + CLIENT_SECRET),
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials',
  };


  const response = await fetch('https://accounts.spotify.com/api/token', requestInfo)
  const data = await response.json();
  return data.access_token;
};
// -----------------------------------------------------------------------

//------------------Faz a Requisição das categorias-----------------------
const getGenres = async (token) => {
  const requestInfo = {
    method: 'GET',
    headers: {
      Authorization:`Bearer ${token}`
    }
  };

  const url = 'https://api.spotify.com/v1/browse/categories?locale=pt-br'
  const response = await fetch(url, requestInfo);
  const data = await response.json();
  return data.categories.items;
  
};
// -----------------------------------------------------------------------

const renderGenres = (genres) => {
  const genresCards = document.querySelector('.genre-cards');

  genresCards.forEach((genre) => {
    const section = document.createElement('section');
    section.className = 'genre';
    section.id = genre.id;

    const paragraph = document.createElement('p');
    paragraph.className = 'genre-title';
    paragraph.innerHTML = genre.name;

    const img = document.createElement('img');
    img.className = 'genre-image';
    img.src = genre.icons[0].url;
  });

  

};

window.onload = async () => {
  token = await getToken();
  const genres = await getGenres(token);
};

