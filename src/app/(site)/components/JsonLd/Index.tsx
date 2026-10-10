type JsonLdProps = {
  data: Record<string, unknown>;
};

const JsonLd = ({ data }: JsonLdProps) => (
  <script
    type="application/ld+json"
    // "<" escapado para o conteúdo nunca fechar a tag <script>.
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
  />
);

export default JsonLd;
