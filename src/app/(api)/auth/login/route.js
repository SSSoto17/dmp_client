import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { generateRandomString } from "@/lib/utils";

export async function GET() {
  const store = await cookies();

  const scope = "streaming user-read-email user-read-private";
  const state = generateRandomString(16);

  store.set("state", state);

  const q = new URLSearchParams({
    response_type: "code",
    client_id: process.env.SPOTIFY_CLIENT_ID,
    scope: scope,
    redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
    state: state,
  });
  const auth_url = `https://accounts.spotify.com/authorize?${q.toString()}`;

  redirect(auth_url);
}
