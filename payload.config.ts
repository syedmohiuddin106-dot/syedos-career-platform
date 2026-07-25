import { postgresAdapter } from "@payloadcms/db-postgres";
import { buildConfig } from "payload";

import { Users } from "./src/collections/Users";
import { Projects } from "./src/collections/Projects";
import { Skills } from "./src/collections/Skills";
import { Education } from "./src/collections/Education";
import { Certifications } from "./src/collections/Certifications";

const databaseURL = process.env.DATABASE_URL;
const payloadSecret = process.env.PAYLOAD_SECRET;

if (!databaseURL) {
  throw new Error(
    "DATABASE_URL is required. Add it to .env.local before starting Payload.",
  );
}

if (!payloadSecret) {
  throw new Error(
    "PAYLOAD_SECRET is required. Add it to .env.local before starting Payload.",
  );
}

export default buildConfig({
  secret: payloadSecret,

  serverURL:
    process.env.PAYLOAD_PUBLIC_SERVER_URL ??
    process.env.NEXT_PUBLIC_SITE_URL ??
    "http://localhost:3000",

  admin: {
    user: "users",

    routes: {
      createFirstUser: "/setup",
    },

    components: {
      views: {
        dashboard: {
          Component:
            "/src/components/admin/dashboard/syedos-dashboard",
        },

        syedosFirstUserSetup: {
          Component:
            "/src/components/admin/setup/first-user-view",
          path: "/setup",
          exact: true,
        },
      },
    },
  },

  collections: [Users, Projects, Skills, Education, Certifications],

  db: postgresAdapter({
    pool: {
      connectionString: databaseURL,
    },
  }),

  typescript: {
    outputFile: "src/payload-types.ts",
  },
});