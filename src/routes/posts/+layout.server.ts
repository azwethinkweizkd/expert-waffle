import type { LayoutServerLoad } from "./$types";

import db from "$lib/database";

export const load: LayoutServerLoad = async (event) => {
  const posts = await db.post.findMany({
    select: {
      title: true,
      slug: true,
    },
    take: 4,
  });
  return { posts };
};
