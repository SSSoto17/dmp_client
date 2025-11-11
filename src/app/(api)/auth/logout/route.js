import { deleteSession } from "@/features/auth/session";
import { redirect } from "next/navigation";

export async function GET() {
  await deleteSession();

  redirect("/");
}
