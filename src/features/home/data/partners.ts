export type PartnerImage = {
  src: string;
  alt: string;
};

export type PartnerProject = {
  id: string;
  name: string;
  type: string;
  description: string;
  logo: string;
  logoTone: "dark" | "ivory" | "forest" | "charcoal" | "sage" | "white";
  images: readonly PartnerImage[];
};

export const partnerProjects: readonly PartnerProject[] = [
  {
    id: "grand-elysee",
    name: "Grand Elysée",
    type: "Palat de evenimente",
    description:
      "Perdele și draperii realizate pentru interioarele elegante ale Grand Elysée, cu textile adaptate ferestrelor ample și atmosferei rafinate a locației.",
    logo: "/images/partners/logos/grand-elysee.png",
    logoTone: "dark",
    images: Array.from({ length: 11 }, (_, index) => ({
      src: `/images/partners/grand-elysee/${String(index + 1).padStart(2, "0")}.jpg`,
      alt: `Amenajare cu perdele și draperii la Grand Elysée — fotografia ${index + 1}`,
    })),
  },
  {
    id: "casa-victoria",
    name: "Casa de Nunți Victoria",
    type: "Sală de evenimente",
    description:
      "Amenajare textilă creată pentru sala Casei de Nunți Victoria, cu drapaje decorative care conturează ferestrele și completează spațiul festiv.",
    logo: "/images/partners/logos/casa-victoria.svg",
    logoTone: "ivory",
    images: [
      {
        src: "/images/partners/casa-victoria/01.jpg",
        alt: "Draperii realizate pentru Casa de Nunți Victoria",
      },
      {
        src: "/images/partners/casa-victoria/02.jpg",
        alt: "Drapaje verzi în sala Casei de Nunți Victoria",
      },
    ],
  },
  {
    id: "orhideea",
    name: "Sala de Ceremonii Orhideea",
    type: "Sală de ceremonii",
    description:
      "Perdele și draperii montate în spațiile luminoase ale Sălii de Ceremonii Orhideea, într-o compoziție sobră și echilibrată.",
    logo: "/images/partners/logos/orhideea.png",
    logoTone: "forest",
    images: [
      {
        src: "/images/partners/orhideea/01.jpg",
        alt: "Draperii gri în Sala de Ceremonii Orhideea",
      },
      {
        src: "/images/partners/orhideea/02.jpg",
        alt: "Amenajare textilă realizată pentru Sala de Ceremonii Orhideea",
      },
    ],
  },
  {
    id: "crown-palace",
    name: "Crown Palace",
    type: "Sală de evenimente",
    description:
      "Draperii ample și perdele diafane realizate pentru Crown Palace, integrate în arhitectura luminoasă și decorul clasic al sălii.",
    logo: "/images/partners/logos/crown-palace.png",
    logoTone: "charcoal",
    images: [
      {
        src: "/images/partners/crown-palace/01.jpg",
        alt: "Draperii realizate pentru salonul Crown Palace",
      },
      {
        src: "/images/partners/crown-palace/02.jpg",
        alt: "Perdele și draperii în sala Crown Palace",
      },
    ],
  },
  {
    id: "sanatoriul-speranta",
    name: "Sanatoriul Speranța",
    type: "Instituție de recuperare",
    description:
      "Proiect textil realizat pentru Sanatoriul Speranța din Vadul lui Vodă. Structura galeriei este pregătită, iar fotografiile proiectului pot fi adăugate imediat ce devin disponibile.",
    logo: "/images/partners/logos/sanatoriul-speranta.svg",
    logoTone: "sage",
    images: [],
  },
  {
    id: "inamp",
    name: "Institutul Național de Administrație și Management Public",
    type: "Instituție publică",
    description:
      "Amenajare cu perdele și draperii pentru spațiile administrative și de protocol ale Institutului Național de Administrație și Management Public.",
    logo: "/images/partners/logos/inamp.svg",
    logoTone: "white",
    images: [
      {
        src: "/images/partners/inamp/01.jpg",
        alt: "Perdele și draperii realizate pentru spațiul de protocol INAMP",
      },
    ],
  },
] as const;
