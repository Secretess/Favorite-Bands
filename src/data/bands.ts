import { Band } from "@/types/band";

export const bandsData: Band[] = [
  {
    id: 1,
    name: "Coldplay",
    genre: "Alternative Rock / Pop",
    image: "/images/bands/coldplay.jpg",
    members: [
      { id: 101, name: "Chris Martin", role: "Lead Vocals" },
      { id: 102, name: "Jonny Buckland", role: "Lead Guitar" },
      { id: 103, name: "Guy Berryman", role: "Bass" },
      { id: 104, name: "Will Champion", role: "Drums" },
    ],
  },
  {
    id: 2,
    name: "Polyphia",
    genre: "Progressive Rock / Instrumental / Math Rock",
    image: "/images/bands/polyphia.jpg",
    members: [
      { id: 201, name: "Tim Henson", role: "Guitar" },
      { id: 202, name: "Scott LePage", role: "Guitar" },
      { id: 203, name: "Clay Gober", role: "Bass" },
      { id: 204, name: "Clay Aeschliman", role: "Drums" },
    ],
  },

{
    id: 3,
    name: "Oasis",
    genre: "Britpop / Rock",
    image: "/images/bands/oasis.webp",
    members: [
      { id: 301, name: "Liam Gallagher", role: "Lead Vocals" },
      { id: 302, name: "Noel Gallagher", role: "Lead Guitar / Vocals" },
      { id: 303, name: "Gem Archer", role: "Rhythm Guitar" },
      { id: 304, name: "Andy Bell", role: "Bass" },
    ],
  },
];