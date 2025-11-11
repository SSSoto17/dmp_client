import { getUser } from "@/features/auth/dal";
import { redirect } from "next/navigation";

export default async function AuthSession({ children }) {
  const user = await getUser();

  if (!user) redirect("/login");

  return children;
}
