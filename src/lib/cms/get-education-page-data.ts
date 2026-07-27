import { cache } from "react";
import { getPayload } from "payload";

import config from "@payload-config";

export const getEducationPageData = cache(async () => {
  const payload = await getPayload({
    config,
  });

  const [
    profileResult,
    educationResult,
    skillsResult,
    projectsResult,
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
      collection: "education",
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

    payload.find({
      collection: "skills",
      where: {
        _status: {
          equals: "published",
        },
      },
      depth: 1,
      limit: 12,
      sort: "displayOrder",
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
      limit: 6,
      sort: "displayOrder",
      draft: false,
    }),
  ]);

  return {
    profile: profileResult.docs[0] ?? null,
    education: educationResult.docs,
    skills: skillsResult.docs,
    projects: projectsResult.docs,
  };
});