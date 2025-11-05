import AuthSession from "../(auth)/_components/AuthWrapper";
import { Suspense } from "react";

export default async function Layout({ children }) {
  return (
    <Suspense>
      <AuthSession>
        <main className="grid md:grid-cols-2 h-screen">{children}</main>;
      </AuthSession>
    </Suspense>
  );
}
