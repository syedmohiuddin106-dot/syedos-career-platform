import { cache } from "react";
import { getPayload } from "payload";

import config from "@payload-config";

export const getNavbarData = cache(async () => {
  const payload = await getPayload({
    config,
  });

  const [profileResult, siteSettings] = await Promise.all([
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

    payload.findGlobal({
      slug: "site-settings",
      depth: 2,
      draft: false,
    }),
  ]);

  return {
    profile: profileResult.docs[0] ?? null,
    siteSettings,
  };
});