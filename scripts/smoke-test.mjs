import assert from "node:assert/strict";
import { setTimeout } from "node:timers/promises";

const base = new URL(process.argv[2] ?? "http://127.0.0.1:3000");
let response;
for (let attempt = 0; attempt < 40; attempt++) {
  try {
    response = await fetch(base, { signal: AbortSignal.timeout(5000) });
    if (response.ok) break;
  } catch {
    // A freshly started production server may still be binding its port.
  }
  await setTimeout(500);
}
assert.ok(response?.ok, `Portfolio did not become ready at ${base.origin}`);
const html = await response.text();
assert.match(
  html,
  /Good systems\./,
  "Server-rendered portfolio content is missing",
);
assert.equal(
  (html.match(/<h1\b/g) ?? []).length,
  1,
  "Expected one primary heading",
);
for (const id of [
  "main-content",
  "home",
  "work",
  "open-source",
  "about",
  "contact",
]) {
  assert.match(
    html,
    new RegExp(`id="${id}"`),
    `Missing navigation target: ${id}`,
  );
}
assert.match(html, /rel="canonical"/, "Canonical URL is missing");
assert.match(html, /property="og:image"/, "Social sharing image is missing");
assert.match(
  html,
  /application\/ld\+json/,
  "Person structured data is missing",
);
assert.equal(response.headers.get("x-content-type-options"), "nosniff");
assert.equal(response.headers.get("x-frame-options"), "DENY");

await Promise.all(
  [
    ["/resume.pdf", "application/pdf", "%PDF"],
    ["/opengraph-image", "image/png"],
    ["/icon.svg", "image/svg+xml"],
    ["/robots.txt", "text/plain", "sitemap.xml"],
    ["/sitemap.xml", "application/xml", "portfolio-shady17.vercel.app"],
  ].map(async ([path, contentType, expected]) => {
    const asset = await fetch(new URL(path, base), {
      signal: AbortSignal.timeout(15000),
    });
    assert.equal(asset.status, 200, `${path} did not return 200`);
    assert.ok(
      asset.headers.get("content-type")?.includes(contentType),
      `${path} has the wrong content type`,
    );
    const bytes = new Uint8Array(await asset.arrayBuffer());
    assert.ok(bytes.length > 0, `${path} is empty`);
    if (expected)
      assert.ok(
        new TextDecoder().decode(bytes).includes(expected),
        `${path} is missing expected content`,
      );
  }),
);
const missing = await fetch(new URL("/this-page-does-not-exist", base));
assert.equal(missing.status, 404, "Missing routes must return a real 404");
assert.match(
  await missing.text(),
  /Back to the portfolio/,
  "Custom 404 recovery link is missing",
);
console.log(`Portfolio smoke checks passed: ${base.origin}`);
