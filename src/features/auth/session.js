import "server-only";
import { cookies } from "next/headers";
import { refreshToken } from "../spotify/utils";

export async function createSession(
  access_token,
  token_type,
  expires_in,
  refresh_token
) {
  const store = await cookies();

  store.set("access_token", access_token, {
    maxAge: expires_in,
  });
  store.set("token_type", token_type);
  store.set("refresh_token", refresh_token);
}

export async function updateSession(refresh_token) {
  const store = await cookies();

  if (!refresh_token) {
    return { error: "Unauthorized: Please sign in." };
  }

  const { access_token, expire_in, error } = await refreshToken(refresh_token);

  if (error) {
    store.delete("refresh_token");
    return { error: "Invalid token." };
  }

  store.set("access_token", access_token, {
    maxAge: expire_in,
  });
}

export async function deleteSession() {
  const store = await cookies();
  store.delete("access_token");
  store.delete("token_type");
  store.delete("refresh_token");
}
