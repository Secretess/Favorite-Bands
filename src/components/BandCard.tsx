import Image from "next/image";
import { Band } from "@/types/band";

type BandCardProps = {
  band: Band;
};

export default function BandCard({ band }: BandCardProps) {
  return (
    <article className="band-card">
      <div className="image-container">
        <Image
          src={band.image}
          alt={band.name}
          width={400}
          height={250}
          style={{ objectFit: "cover" }}
        />
      </div>
      <h2>{band.name}</h2>
      <p className="genre">แนวเพลง: {band.genre}</p>

      <h3>สมาชิกในวง:</h3>
      <ul className="member-list">
        {band.members.map((member) => (
          <li key={member.id}>
            <Image
              src={member.image}
              alt={member.name}
              width={56}
              height={56}
              className="member-image"
            />
            <span>
              <strong>{member.name}</strong>
              <small>{member.role}</small>
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}