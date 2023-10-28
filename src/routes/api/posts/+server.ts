import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

import db from "$lib/database";

export const GET: RequestHandler = async (event) => {
  const posts = await db.post.findMany({
    take: Math.round(Math.random() * 30),
  });

  return json(posts);
};
