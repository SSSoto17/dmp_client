import { formatDuration } from "@/lib/utils";
import { getAlbums } from "@/features/spotify/api";
import WebPlayer from "@/components/WebPlayback";
import { FaPlay } from "react-icons/fa";
import { Suspense } from "react";
import Link from "next/link";
export default async function page({ params }) {
  const { id } = await params;
  const access_token = null;

  return (
    <Suspense>
      <WebPlayer albumID={id} token={access_token} />
      <DisplayAlbum albumID={id} />
    </Suspense>
  );
}

async function DisplayAlbum({ albumID }) {
  // const result = await getAlbums(albumID);
  const { name, artists, tracks } = await getAlbums(albumID);

  // console.log(result);

  // return <Link href="/api/auth/logout">Sign out</Link>;

  return (
    <section className="p-8 bg-amber-50">
      <Link href="/api/auth/logout">Sign out</Link>
      <header className="py-6">
        <div>
          <Link href="/">Go back</Link>
          <p>
            <span className="opacity-80">{artists[0].name} /</span> {name}
          </p>
        </div>
        <h2 className="text-4xl font-semibold font-display">{name}</h2>
      </header>
      <TrackList {...tracks} />
    </section>
  );
}

export const TrackList = ({ items }) => {
  return (
    <ol className="py-8 *:not-first:mt-2">
      {items.map((track) => (
        <Track key={track.id} {...track} />
      ))}
    </ol>
  );
};

export const Track = ({ name, duration_ms, track_number }) => {
  return (
    <li className="flex align-bottom gap-2 w-full py-4 px-1 hover:bg-white/60 cursor-pointer">
      <button>
        <FaPlay size={12} />
      </button>
      <p className="grow">
        <span className="text-xs mr-2">
          {`${track_number}`.padStart(2, "0")}
        </span>{" "}
        {name}
      </p>
      <p className="text-xs">{formatDuration(duration_ms)}</p>
    </li>
  );
};
