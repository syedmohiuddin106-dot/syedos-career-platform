import config from "@payload-config";
import {
  handleServerFunctions,
  RootLayout,
} from "@payloadcms/next/layouts";
import "@payloadcms/next/css";
import type { ServerFunctionClient } from "payload";
import type { ReactNode } from "react";

import { importMap } from "./admin/importMap.js";

type PayloadLayoutProps = {
  children: ReactNode;
};

const serverFunction: ServerFunctionClient = async (args) => {
  "use server";

  return handleServerFunctions({
    ...args,
    config,
    importMap,
  });
};

export default function PayloadLayout({
  children,
}: PayloadLayoutProps) {
  return (
    <RootLayout
      config={config}
      importMap={importMap}
      serverFunction={serverFunction}
    >
      {children}
    </RootLayout>
  );
}