import data from "../data/content.json";
import Card from "../components/Card";

export default function Awards() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-4 text-center">Awards</h2>
      {data.awards.map((aw, i) => (
        <Card key={i} {...aw} />
      ))}
    </section>
  );
}
