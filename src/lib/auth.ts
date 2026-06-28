import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

import { db } from "@/db";
import { users } from "@/src/database/schemas/user.schema";

export async function requireDatabaseUser() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const [user] = await db.select().from(users).where(eq(users.id, userId)).limit(1);

  if (!user) {
    redirect("/sign-up?missing_database_user=true");
  }

  return user;
}
