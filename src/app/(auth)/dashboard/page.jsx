import { Suspense } from "react";
import AuthSession from "../_components/AuthWrapper";
import Link from "next/link";

export default function dashboard() {
  return (
    <Suspense>
      <AuthSession>
        <main>
          <h1>Welcome to the user dashboard.</h1>
          <Link href={`/album/${process.env.SPOTIFY_TEST_ID}`}>
            Go to album
          </Link>
        </main>
      </AuthSession>
    </Suspense>
  );
}
