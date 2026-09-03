import { bandsData } from "@/data/bands";
import BandCard from "@/components/BandCard";

export default function FavoriteBandsPage() {
  return (
    <main className="page">
      <h1>วงดนตรีที่ชื่นชอบ (Favorite Bands)</h1>

      <section className="bands-grid">
        {bandsData.map((band) => (
          <BandCard key={band.id} band={band} />
        ))}
      </section>
    </main>
  );
}