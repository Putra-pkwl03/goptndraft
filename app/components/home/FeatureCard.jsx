import Image from "next/image";

export default function FeatureCard({ icon, title, desc }) {
  return (
    <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition bg-white text-center">
      <h3 className="font-semibold text-gray-800 text-lg mb-4">{title}</h3>
      <Image
        src={icon}
        alt={title}
        width={70}
        height={70}
        className="mx-auto"
      />
      <p className="text-gray-500 text-sm mt-4">{desc}</p>
    </div>
  );
}
