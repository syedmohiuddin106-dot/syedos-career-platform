import { cache } from "react";
import { getPayload } from "payload";

import config from "@payload-config";

export const getContactPageData = cache(async () => {
  const payload = await getPayload({
    config,
  });

  const [
    profileResult,
    projectsResult,
    skillsResult,
  ] = await Promise.all([
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
      depth: 1,
      limit: 4,
      sort: "displayOrder",
      draft: false,
    }),

    payload.find({
      collection: "skills",
      where: {
        _status: {
          equals: "published",
        },
      },
      depth: 1,
      limit: 8,
      sort: "displayOrder",
      draft: false,
    }),
  ]);

  return {
    profile: profileResult.docs[0] ?? null,
    projects: projectsResult.docs,
    skills: skillsResult.docs,
  };
});