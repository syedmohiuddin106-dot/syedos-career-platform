import { cache } from "react";
import { getPayload } from "payload";

import config from "@payload-config";

export const getExperiencePageData = cache(async () => {
  const payload = await getPayload({
    config,
  });

  const experienceResult = await payload.find({
    collection: "experience",
    where: {
      _status: {
        equals: "published",
      },
    },
    depth: 2,
    limit: 50,
    sort: "displayOrder",
    draft: false,
  });

  return {
    experiences: experienceResult.docs,
  };
});