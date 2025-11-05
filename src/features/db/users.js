const { SERVER_URL: url } = process.env;
const endpoint = `${url}/users`;

export async function getUsers() {
  return await fetch(endpoint)
    .then((res) => res.json())
    .then((data) => console.log(data));
}
