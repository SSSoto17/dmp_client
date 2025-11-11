"use server";
import { authenticateUser } from "@/features/db/users";

export async function LogIn(formData) {
  const errors = {};
  const user = await authenticateUser(formData);

  if (user) {
    // TODO: OAuth with Spotify and redirect to auth-scoped content
  }

  errors.user = "User doesn't exist.";

  return errors;
}

export async function SignUp(formData) {
  // PATCH USER DETAILS IN DB
  const user = formData;
  return user;
}
