const baseUrl =
  process.env.SYEDOS_AUDIT_URL ??
  "http://localhost:3000";

const routes = [
  "/",
  "/about",
  "/projects",
  "/projects/syedos",
  "/projects/syedai-assistant",
  "/projects/campushire",
  "/skills",
  "/education",
  "/certificates",
  "/contact",
  "/sitemap.xml",
  "/robots.txt",
  "/icon",
  "/apple-icon",
  "/opengraph-image",
  "/twitter-image",
];

const requestTimeout = 10_000;

async function checkRoute(route) {
  const url = new URL(route, baseUrl);

  const controller = new AbortController();

  const timeout = setTimeout(() => {
    controller.abort();
  }, requestTimeout);

  try {
    const response = await fetch(url, {
      method: "GET",
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "User-Agent": "SyedOS-Link-Audit/1.0",
      },
    });

    return {
      route,
      url: url.toString(),
      status: response.status,
      ok: response.ok,
    };
  } catch (error) {
    return {
      route,
      url: url.toString(),
      status: null,
      ok: false,
      error:
        error instanceof Error
          ? error.message
          : "Unknown request error",
    };
  } finally {
    clearTimeout(timeout);
  }
}

async function runAudit() {
  console.log("\nSyedOS internal-link audit");
  console.log(`Target: ${baseUrl}\n`);

  const results = await Promise.all(
    routes.map(checkRoute),
  );

  let failedCount = 0;

  for (const result of results) {
    if (result.ok) {
      console.log(
        `✓ ${String(result.status).padEnd(3)} ${result.route}`,
      );

      continue;
    }

    failedCount += 1;

    const status =
      result.status === null
        ? "ERR"
        : String(result.status);

    console.error(
      `✗ ${status.padEnd(3)} ${result.route}`,
    );

    if (result.error) {
      console.error(`  ${result.error}`);
    }
  }

  console.log(
    `\nChecked ${results.length} routes.`,
  );

  if (failedCount > 0) {
    console.error(
      `${failedCount} route${
        failedCount === 1 ? "" : "s"
      } failed.`,
    );

    process.exitCode = 1;
    return;
  }

  console.log(
    "All audited SyedOS routes are working.",
  );
}

runAudit().catch((error) => {
  console.error(
    "The SyedOS audit could not be completed.",
  );

  console.error(error);
  process.exitCode = 1;
});