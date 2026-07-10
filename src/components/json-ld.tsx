import type { Thing, WithContext } from "schema-dts";

/**
 * Renders JSON-LD structured data. Server component — emitted into the HTML so
 * crawlers see it without executing JS.
 */
export function JsonLd({ data }: { data: WithContext<Thing> | WithContext<Thing>[] }) {
  const json = JSON.stringify(data);
  return (
    <script
      type="application/ld+json"
      // Data is built from our own typed config — safe to inline.
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
