import Image from "next/image";
import SearchBar from "./SearchBar";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        className="
            pt-32 pb-30 
            bg-[linear-gradient(to_bottom,#53A9BC,#5C89C3,#8292DC,#FBF3F3)]
        "
        >
        <div className="grid md:grid-cols-2 gap-10 items-center container mx-auto px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Menuju kampus impian? <br />
              Mulai dari <span className="text-yellow-300">GO PTN</span>.
            </h1>

            <div className="mt-6">
              <SearchBar />
            </div>
          </div>
          <div className="flex justify-center relative">
            <Image
              src="/assets/b1.png"
              alt="Background Shape"
              width={350}
              height={350}
              className="absolute z-10 top-0 right-0 md:-top-10 md:right-30 object-contain"
            />
            <Image
              src="/assets/s1.png"
              alt="Students"
              width={420}
              height={420}
              className="relative z-20 object-contain top-0 right-0 md:top-10 md:-right-10"
            />
          </div>

        </div>
      </section>
    </>
  );
}
