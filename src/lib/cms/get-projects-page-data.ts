import { cache } from "react";
import { getPayload } from "payload";

import config from "@payload-config";

export const getProjectsPageData = cache(async () => {
  const payload = await getPayload({
    config,
  });

  const [profileResult, projectsResult] =
    await Promise.all([
      payload.find({
        collection: "profile",
        where: {
          and: [
            {
              _status: {
                equals: "published",
              },
            },
            {
              featured: {
                equals: true,
              },
            },
          ],
        },
        depth: 2,
        limit: 1,
        sort: "-updatedAt",
        draft: false,
      }),

      payload.find({
        collection: "projects",
        where: {
          _status: {
            equals: "published",
          },
        },
        depth: 2,
        limit: 20,
        sort: "displayOrder",
        draft: false,
      }),
    ]);

  return {
    profile: profileResult.docs[0] ?? null,
    projects: projectsResult.docs,
  };
});