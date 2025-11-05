import { createSession, updateSession } from "@/features/auth/session";
import { accessToken } from "@/features/spotify/utils";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function GET({ nextUrl: { searchParams } }) {
  const store = await cookies();

  const code = searchParams.get("code");
  const state = searchParams.get("state");

  console.log("test");

  if (!code) {
    console.log("test w/code");
    const refresh_token = store.get("refresh_token")?.value;

    if (!refresh_token) redirect("/login");

    const response = await updateSession(refresh_token);

    if (response?.error) redirect("/login");

    return new Response("Testing.");
  }
  console.log("test");

  if (searchParams.has("error"))
    return new Response("Unauthorized: Access denied.");

  // const cookieState = store.get("state")?.value;
  // const isValidState = cookieState.trim() === state.trim();

  // if (!cookieState || !isValidState) return new Response("An error occurred.");

  const payload = {
    grant_type: "authorization_code",
    code: code,
    redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
  };

  const { access_token, token_type, expires_in, refresh_token } =
    await accessToken(payload);

  await createSession(access_token, token_type, expires_in, refresh_token);

  store.delete("state");

  redirect("/dashboard");
}
