import Footer from "../../components/home/Footer";
import Navbar from "../../components/home/Navbar";
import { KampusDetailPage } from "@/app/components/kampus/KampusDetailPage";
import { getKampusById } from "@/lib/kampus/kampus";
import { Kampus } from "@/types/kampus";

interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
  const kampus: Kampus = await getKampusById(Number(params.id));

  return (
    <>
      <Navbar />
      <KampusDetailPage kampus={kampus} />
      <Footer />
    </>
  );
}
