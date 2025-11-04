import data from "../data/content.json";
import Card from "../components/Card";

export default function Education() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-4 text-center">Education</h2>
      {data.education.map((ed, i) => (
        <Card key={i} {...ed} />
      ))}
    </section>
  );
}
