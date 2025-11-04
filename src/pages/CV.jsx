export default function CV() {
  return (
    <section className="text-center">
      <h2 className="text-3xl font-bold mb-6">Curriculum Vitae</h2>
      <a
        href="/assets/cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg text-white transition-all"
      >
        Download CV (PDF)
      </a>
    </section>
  );
}
