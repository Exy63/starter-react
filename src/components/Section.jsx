export default function Section({ title, children, ...proprs }) {
  return (
    <section {...proprs}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
