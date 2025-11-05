import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen">
      <h1>Home</h1>
      <Link href={`/album/${process.env.SPOTIFY_TEST_ID}`}>Go to album</Link>
    </main>
  );
}
