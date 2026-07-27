import { cache } from "react";
import { getPayload } from "payload";

import config from "@payload-config";

export const getFooterData = cache(async () => {
  const payload = await getPayload({
    config,
  });

  const [profileResult, projectsResult, siteSettings] =
    await Promise.all([
      payload.find({
        collection: "profile",
        where: {
          _status: {
            equals: "published",
          },
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
        depth: 1,
        limit: 3,
        sort: "displayOrder",
        draft: false,
      }),

      payload.findGlobal({
        slug: "site-settings",
        depth: 2,
        draft: false,
      }),
    ]);

  return {
    profile: profileResult.docs[0] ?? null,
    projects: projectsResult.docs,
    siteSettings,
  };
});