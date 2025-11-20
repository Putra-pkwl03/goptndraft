import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="bg-white p-3 rounded-full shadow-xl flex flex-col md:flex-row gap-3 items-center">
      <select className="flex-1 px-4 py-2 border rounded-full text-gray-600">
        <option>Pilih lokasi...</option>
      </select>

      <select className="flex-1 px-4 py-2 border rounded-full text-gray-600">
        <option>Pilih jenis tempat...</option>
      </select>

      <button className="bg-orange-500 text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-orange-600 transition">
        <Search size={18} />
        Cari
      </button>
    </div>
  );
}
