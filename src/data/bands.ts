import { Band } from "@/types/band";

export const bandsData: Band[] = [
  {
    id: 1,
    name: "Coldplay",
    genre: "Alternative Rock / Pop",
    image: "/images/bands/coldplay.jpg",
    members: [
      { id: 101, name: "Chris Martin", role: "Lead Vocals", image: "/images/members/101.jpg" },
      { id: 102, name: "Jonny Buckland", role: "Lead Guitar", image: "/images/members/102.jpg" },
      { id: 103, name: "Guy Berryman", role: "Bass", image: "/images/members/103.jpg" },
      { id: 104, name: "Will Champion", role: "Drums", image: "/images/members/104.jpg" },
    ],
  },
  {
    id: 2,
    name: "Polyphia",
    genre: "Progressive Rock / Instrumental / Math Rock",
    image: "/images/bands/polyphia.jpg",
    members: [
      { id: 201, name: "Tim Henson", role: "Guitar", image: "/images/members/201.jpg" },
      { id: 202, name: "Scott LePage", role: "Guitar", image: "/images/members/202.jpg" },
      { id: 203, name: "Clay Gober", role: "Bass", image: "/images/members/203.jpg" },
      { id: 204, name: "Clay Aeschliman", role: "Drums", image: "/images/members/204.jpg" },
    ],
  },

{
    id: 3,
    name: "Oasis",
    genre: "Britpop / Rock",
    image: "/images/bands/oasis.webp",
    members: [
      { id: 301, name: "Liam Gallagher", role: "Lead Vocals", image: "/images/members/301.jpg" },
      { id: 302, name: "Noel Gallagher", role: "Lead Guitar / Vocals", image: "/images/members/302.jpg" },
      { id: 303, name: "Gem Archer", role: "Rhythm Guitar", image: "/images/members/303.jpg" },
      { id: 304, name: "Andy Bell", role: "Bass", image: "/images/members/304.jpg" },
    ],
  },
];