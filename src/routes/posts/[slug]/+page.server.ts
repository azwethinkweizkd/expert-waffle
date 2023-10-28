import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types.js";
import db from "$lib/database.js";

export const load: PageServerLoad = async ({ params, parent }) => {
  const parentData = await parent();
  console.log("parentData", parentData);
  const post = await db.post.findUnique({
    where: { slug: params.slug },
  });

  if (!post) {
    return error(404, "Post not found");
  }
  return { post };
};
