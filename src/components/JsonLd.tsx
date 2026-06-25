/**
 * Renders a schema.org JSON-LD <script>. Pass an object from lib/jsonld.ts.
 * Server-rendered, so the markup is present in the initial HTML for crawlers.
 */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to inline; no user input flows in here.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
