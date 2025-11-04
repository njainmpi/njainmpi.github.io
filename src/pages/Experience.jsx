import data from "../data/content.json";
import Card from "../components/Card";

export default function Experience() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-4 text-center">Experience</h2>
      {data.experience.map((ex, i) => (
        <Card key={i} {...ex} />
      ))}
    </section>
  );
}
