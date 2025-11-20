import FeatureCard from "./FeatureCard";

const features = [
  { title: "Tes Potensi", icon: "/assets/i1.png", desc: "Computer our easy online applicaTion and pay with credit card or palpay." },
  { title: "Kampus", icon: "/assets/i4.png", desc: "No  need to deal with the embasy. we do it for you so you don’t lose valuable time.Informasi lengkap kampus." },
  { title: "Jurusan", icon: "/assets/i3.png", desc: "Presend your Passport anddocument we provide uupon entry to destination country" },
  { title: "Try Out", icon: "/assets/i1.png", desc: "Latihan soal UTBK." },
  { title: "Beasiswa", icon: "/assets/i2.png", desc: "No  need to deal with the embasy. we do it for you so you don’t lose valuable time.." },
  { title: "Jadwal Pendaftaran", icon: "/assets/i2.png", desc: "No  need to deal with the embasy. we do it for you so you don’t lose valuable time." },
];

export default function FeatureGrid() {
  return (
    <section
      className="relative py-16"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #00416B 100%)",
      }}
    >
      <div className="container mx-auto px-4">
        <div
          className="
            bg-white shadow-xl rounded-2xl p-8
            relative -mt-24 z-30
          "
        >
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <FeatureCard key={i} {...f} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

