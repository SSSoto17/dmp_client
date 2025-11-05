import Image from "next/image";

import ImgMusic from "@/assets/img/erik-mclean-QzpgqElvSiA-unsplash.jpg";

export default function SignUp() {
  const fields = [
    {
      name: "user_username",
      label: "Username",
      type: "text",
      testValue: "sssoto",
    },
    {
      name: "user_email",
      label: "Email",
      type: "email",
      testValue: "sssoto@live.dk",
    },
    {
      name: "user_password",
      label: "Password",
      type: "password",
      testValue: "password",
    },
    {
      name: "user_password_check",
      label: "Confirm password",
      type: "password",
      testValue: "password",
    },
  ];

  const submitUrl = process.env.SERVER_URL + "/auth/register";

  return (
    <main className="grid place-content-center place-items-center h-screen bg-linear-to-b from-amber-50 to-fuchsia-100">
      <section className="bg-white rounded-md overflow-clip grid grid-cols-2 mx-20 drop-shadow-xl">
        <Image
          src={ImgMusic}
          alt=""
          className="w-full max-w-xl h-full max-h-200 object-cover"
        />
        <article className="px-16 py-12">
          <header className="mb-8">
            <h1 className="text-3xl font-extrabold font-display text-amber-500">
              Sign Up
            </h1>
          </header>
          <form action={submitUrl}>
            {fields.map(({ name, label, type, testValue }, id) => {
              return (
                <div className="grid gap-y-1 py-1.5" key={id}>
                  <label className="font-medium text-slate-800" htmlFor={name}>
                    {label}
                  </label>
                  <input
                    name={name}
                    className="outline-1 outline-slate-200 rounded-xs py-1 px-2 hover:outline-slate-300 focus:outline-slate-400"
                    type={type}
                    defaultValue={testValue}
                  />
                </div>
              );
            })}
            <button className="mt-8 py-3 px-5 cursor-pointer rounded-md bg-fuchsia-700 hover:bg-fuchsia-600 text-white text-sm font-semibold uppercase font-display">
              Sign up now
            </button>
          </form>
        </article>
      </section>
    </main>
  );
}
