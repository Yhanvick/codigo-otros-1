const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

async function displayUser(username) { //un await fetch deberia llevar un async al principio de la función 
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  $n.textContent = '${data.name}'; //se deben usar comillas inveridas
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
}
//falta procesar la respuesta, despues de usat fetch se podria usar un await response.json()
const data = await response.json();


function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);