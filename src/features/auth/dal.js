import "server-only";
import { cookies } from "next/headers";
import { cache } from "react";

export const verifySession = async () => {
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
  session.userID = "testUser";

  return session;
};

export const getUser = cache(async () => {
  const { isAuth, userID } = await verifySession();

  if (!isAuth) return null;

  return userID;
});

export const getToken = cache(async () => {
  const { isAuth, access_token } = await verifySession();

  if (!isAuth || !access_token) return null;

  return {
    headers: {
      Authorization: access_token,
    },
  };
});
