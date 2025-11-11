const { API_BASE_URL: url, SERVER_URL } = process.env;

export async function getUsers() {
  return await fetch(`${url}/users`)
    .then((res) => res.json())
    .then((data) => console.log(data));
}

export async function registerUser(data) {
  const url = `${SERVER_URL}/auth/register`;
  const payload = {
    method: "POST",
    body: new URLSearchParams(data),
  };

  const response = await fetch(url, payload);

  if (response.status == 405)
    return {
      error: await response.json(),
    };

  if (response.status == 200) {
    const auth_url = `${SERVER_URL}/auth/authorize`;
    const user = await response.json();
    return { user, url: auth_url };
  }
}

export async function authenticateUser(data) {
  const url = `${SERVER_URL}/auth/login`;
  const payload = {
    method: "POST",
    body: new URLSearchParams(data),
  };

  return await fetch(url, payload).then((res) => res.json());
}
