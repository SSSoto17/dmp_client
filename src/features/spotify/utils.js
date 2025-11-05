import { genBase64 } from "@/lib/utils";

const { SPOTIFY_ACCESS_URL, SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } =
  process.env;

export async function getToken() {
  const payload = {
    grant_type: "client_credentials",
    client_id: SPOTIFY_CLIENT_ID,
    client_secret: SPOTIFY_CLIENT_SECRET,
  };

  const { access_token, token_type } = await fetch(SPOTIFY_ACCESS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(payload),
  }).then((res) => res.json());

  return {
    headers: {
      Authorization: `${token_type} ${access_token}`,
    },
  };
}

export async function accessToken(payload) {
  const credentials = genBase64(SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET);

  const result = await fetch(SPOTIFY_ACCESS_URL, {
    method: "POST",
    headers: {
      Authorization: credentials,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(payload),
  }).then((res) => res.json());

  return result;
}

export async function refreshToken(key) {
  const payload = {
    grant_type: "refresh_token",
    refresh_token: key,
    client_id: SPOTIFY_CLIENT_ID,
  };

  const result = await fetch(SPOTIFY_ACCESS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(payload),
  }).then((res) => res.json());

  return result;
}
