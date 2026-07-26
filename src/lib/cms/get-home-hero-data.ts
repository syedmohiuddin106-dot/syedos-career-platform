import { cache } from "react";
import { getPayload } from "payload";

import config from "@payload-config";

export const getHomeHeroData = cache(async () => {
  const payload = await getPayload({
    config,
  });

  const [profileResult, skillsResult, educationResult, siteSettings] =
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
        collection: "skills",
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
        depth: 1,
        limit: 6,
        sort: "displayOrder",
        draft: false,
      }),

      payload.find({
        collection: "education",
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
        depth: 1,
        limit: 1,
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
    featuredSkills: skillsResult.docs,
    education: educationResult.docs[0] ?? null,
    siteSettings,
  };
});