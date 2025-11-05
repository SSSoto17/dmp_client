import { getToken } from "@/features/spotify/utils";
import { verifySession } from "../auth/dal";

export async function getAlbums(id) {
  const test = await verifySession();
  const payload = await getToken();
  console.log(test);

  return await fetch(
    `${process.env.SPOTIFY_BASE_URL}/v1/albums/${id}`,
    payload
  ).then((res) => res.json());
}

export async function getCategories() {
  const payload = await getToken();
  return await fetch(
    `${process.env.SPOTIFY_BASE_URL}/v1/browse/categories`,
    payload
  ).then((res) => res.json());

  // http GET https://api.spotify.com/v1/browse/categories \
  // Authorization:'Bearer 1POdFZRZbvb...qqillRxMr2z'
}
