import { cache } from "react";
import { getPayload } from "payload";

import config from "@payload-config";

export const getProjectCaseStudyData = cache(
  async (slug: string) => {
    const payload = await getPayload({
      config,
    });

    const [projectResult, profileResult] =
      await Promise.all([
        payload.find({
          collection: "projects",
          where: {
            and: [
              {
                slug: {
                  equals: slug,
                },
              },
              {
                _status: {
                  equals: "published",
                },
              },
            ],
          },
          depth: 2,
          limit: 1,
          draft: false,
        }),

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
      ]);

    return {
      project: projectResult.docs[0] ?? null,
      profile: profileResult.docs[0] ?? null,
    };
  },
);