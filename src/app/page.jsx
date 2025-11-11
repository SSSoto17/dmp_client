import { cookies } from "next/headers";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="h-screen">
      <h1>Home</h1>
      <Link className="block" href="/login">
        Login
      </Link>
      <Link className="block" href={`/album/${process.env.SPOTIFY_TEST_ALBUM}`}>
        Go to album
      </Link>
      <Suspense>
        <Test />
      </Suspense>
    </main>
  );
}

async function Test() {
  const store = await cookies();
  const user = store.get("user_id")?.value | null;

  if (user == null) return;
  console.log(user);

  // const test = await fetch(`${process.env.SERVER_URL}/auth/token`).then((res) =>
  //   res.json()
  // );

  return <div></div>;
}
