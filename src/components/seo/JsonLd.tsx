/**
 * Tiny server component that renders a JSON-LD <script> tag.
 *
 * Pass any schema object (or array of schemas). When an array is passed,
 * each schema is emitted as its own <script> tag so each is independently
 * parseable by validators.
 */
type Schema = Record<string, unknown>;

export default function JsonLd({ data }: { data: Schema | Schema[] }) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          // JSON.stringify is safe here — no user input in these schemas.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
