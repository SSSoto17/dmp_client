import Image from "next/image";

export default function ArtistPage() {
  const dummyArtist = {
    name: "SVRCINA",
    stats: "6,000,000",
    similar: ["Artist 01", "Artist 02"],
    genre: "Pop",
    albums: ["Album 01", "Album 02"],
    tracks: ["Track one", "Track two"],
    bio: "",
    src: "https://i.scdn.co/image/ab67616d0000b2737b40ae4983079c61c3012e80",
  };

  return (
    <main className="grid md:grid-cols-2 h-screen">
      <section>
        <header>
          <h2>{dummyArtist.name}</h2>
          <p>Number of listens</p>
        </header>
        <Image
          src={dummyArtist.src}
          alt="Album cover"
          width={600}
          height={600}
          className="object-cover place-self-center"
        />
        <article>
          <p>{dummyArtist.bio}</p>
          <h3>Similar artists</h3>
          <ul>
            {dummyArtist.similar.map((artist, id) => (
              <li key={id}>{artist}</li>
            ))}
          </ul>
        </article>
      </section>
      <section>
        <h3>Top Albums</h3>
        <ul>
          {dummyArtist.albums.map((album, id) => (
            <li key={id}>{album}</li>
          ))}
        </ul>
        <h3>Top Tracks</h3>
        <ul>
          {dummyArtist.tracks.map((track, id) => (
            <li key={id}>{track}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
