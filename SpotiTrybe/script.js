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

window.onload = async () => {
  token = await getToken();
};

