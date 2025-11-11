import "server-only";
import { cookies } from "next/headers";
import { cache } from "react";

export const verifySession = cache(async () => {
  // TODO: verify session with backend
  const store = await cookies();
  const session = {};

  const access_token = store.get("access_token")?.value;
  const token_type = store.get("token_type")?.value;

  if (!access_token) {
    session.isAuth = false;

    return session;
  }

  session.isAuth = true;
  session.access_token = `${token_type} ${access_token}`;
  session.userID = "testUser"; // replace with user fetched from backend db

  return session;
});

export const authCheck = cache(async () => {
  const { isAuth, userID } = await verifySession();

  if (!isAuth) return; // possibly redirect?

  return userID;
});
