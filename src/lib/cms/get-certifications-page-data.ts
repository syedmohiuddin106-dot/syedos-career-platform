import { cache } from "react";
import { getPayload } from "payload";

import config from "@payload-config";

export const getCertificationsPageData = cache(async () => {
  const payload = await getPayload({
    config,
  });

  const [certificationsResult, projectsResult] =
    await Promise.all([
      payload.find({
        collection: "certifications",
        where: {
          _status: {
            equals: "published",
          },
        },
        depth: 2,
        limit: 50,
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
        limit: 3,
        sort: "displayOrder",
        draft: false,
      }),
    ]);

  return {
    certifications: certificationsResult.docs,
    projects: projectsResult.docs,
  };
});