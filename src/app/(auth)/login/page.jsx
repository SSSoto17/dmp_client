// import LogInForm from "./client";

import { redirect } from "next/navigation";

export default function Page() {
  const loginUrl = process.env.SERVER_URL + "/auth/login";

  async function LogIn(formData) {
    "use server";

    const user = await fetch(loginUrl, {
      method: "POST",
      body: new URLSearchParams(formData),
    }).then((res) => res.json());

    if (user) redirect("/api/auth/login");
  }

  return (
    <main>
      <form action={LogIn}>
        <label htmlFor="user_email">Email:</label>
        <input name="user_email" type="email" defaultValue="sssoto@live.dk" />
        <label htmlFor="user_password">Password:</label>
        <input name="user_password" type="password" defaultValue="password" />
        <button>Login</button>
      </form>
    </main>
  );
}
