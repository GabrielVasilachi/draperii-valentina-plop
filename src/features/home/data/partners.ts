export type PartnerImage = {
  src: string;
  alt: string;
};

export type PartnerProject = {
  id: string;
  name: string;
  type: string;
  description: string;
  logo: string | null;
  logoAlt?: string;
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
        src: "/images/partners/casa-victoria/01-restored.jpg",
        alt: "Draperii realizate pentru Casa de Nunți Victoria",
      },
      {
        src: "/images/partners/casa-victoria/02-restored.jpg",
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
        src: "/images/partners/crown-palace/01-restored.jpg",
        alt: "Draperii realizate pentru salonul Crown Palace",
      },
      {
        src: "/images/partners/crown-palace/02-restored.jpg",
        alt: "Perdele și draperii în sala Crown Palace",
      },
    ],
  },
  {
    id: "sanatoriul-speranta",
    name: "Sanatoriul Speranța",
    type: "Instituție de recuperare",
    description:
      "Colaborare cu Sanatoriul Speranța din Vadul lui Vodă.",
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
        src: "/images/partners/inamp/01-restored.jpg",
        alt: "Perdele și draperii realizate pentru spațiul de protocol INAMP",
      },
    ],
  },
  {
    id: "green-park",
    name: "Green Park Bar & Terrace",
    type: "Bar și terasă",
    description: "Perdele pentru terasa Green Park, integrate în structura din lemn și în decorul natural al spațiului.",
    logo: null,
    logoTone: "white",
    images: [
      { src: "/images/partners/green-park/01-restored.jpg", alt: "Green Park Bar & Terrace — amenajare textilă, fotografia 1" },
      { src: "/images/partners/green-park/02-restored.jpg", alt: "Green Park Bar & Terrace — amenajare textilă, fotografia 2" },
      { src: "/images/partners/green-park/03-restored.jpg", alt: "Green Park Bar & Terrace — amenajare textilă, fotografia 3" },
      { src: "/images/partners/green-park/04-restored.jpg", alt: "Green Park Bar & Terrace — amenajare textilă, fotografia 4" },
    ],
  },
  {
    id: "clinica-sante",
    name: "Clinica Sante",
    type: "Instituție medicală",
    description: "Perdele de compartimentare pentru spațiile medicale ale Clinicii Sante. Fotografia surprinde etapa de montaj.",
    logo: "/images/partners/logos/clinica-sante.svg",
    logoTone: "white",
    images: [
      { src: "/images/partners/clinica-sante/01-restored.jpg", alt: "Clinica Sante — amenajare textilă, fotografia 1" },
    ],
  },
  {
    id: "casa-sarbatorii",
    name: "Restaurant Casa Sărbătorii",
    type: "Restaurant · Ștefan Vodă",
    description: "Perdele brodate și draperii în tonuri calde pentru Restaurant Casa Sărbătorii, parte a complexului Marion din Ștefan Vodă.",
    logo: "/images/partners/logos/casa-sarbatorii.png",
    logoAlt: "Logo Complex Marion, din care face parte Restaurant Casa Sărbătorii",
    logoTone: "white",
    images: [
      { src: "/images/partners/casa-sarbatorii/01-restored.jpg", alt: "Restaurant Casa Sărbătorii — amenajare textilă, fotografia 1" },
      { src: "/images/partners/casa-sarbatorii/02-restored.jpg", alt: "Restaurant Casa Sărbătorii — amenajare textilă, fotografia 2" },
      { src: "/images/partners/casa-sarbatorii/03-restored.jpg", alt: "Restaurant Casa Sărbătorii — amenajare textilă, fotografia 3" },
    ],
  },
  {
    id: "paradis",
    name: "Restaurant Paradis",
    type: "Restaurant · La Queue-en-Brie, Franța",
    description: "Amenajări cu perdele și draperii pentru Restaurant Paradis din La Queue-en-Brie, în regiunea Parisului.",
    logo: "/images/partners/logos/paradis.webp",
    logoTone: "dark",
    images: [
      { src: "/images/partners/paradis/01-restored.jpg", alt: "Restaurant Paradis — amenajare textilă, fotografia 1" },
      { src: "/images/partners/paradis/02-restored.jpg", alt: "Restaurant Paradis — amenajare textilă, fotografia 2" },
      { src: "/images/partners/paradis/03-restored.jpg", alt: "Restaurant Paradis — amenajare textilă, fotografia 3" },
      { src: "/images/partners/paradis/04-restored.jpg", alt: "Restaurant Paradis — amenajare textilă, fotografia 4" },
    ],
  },
  {
    id: "nicolae-sulac",
    name: "Liceul Teoretic cu Profil de Arte „Nicolae Sulac”",
    type: "Instituție de învățământ · Chișinău",
    description: "Colaborare cu Liceul Teoretic cu Profil de Arte „Nicolae Sulac” din Chișinău.",
    logo: "/images/partners/logos/nicolae-sulac.png",
    logoTone: "white",
    images: [
    ],
  },
  {
    id: "dacia-balti",
    name: "Restaurant Dacia",
    type: "Restaurant · Bălți",
    description: "Colaborare cu Restaurant Dacia din Bălți, strada I. Franco.",
    logo: null,
    logoTone: "white",
    images: [
    ],
  },
  {
    id: "iefs",
    name: "Institutul de Educație Fizică și Sport",
    type: "Instituție de învățământ · Chișinău",
    description: "Colaborare cu Universitatea de Stat de Educație Fizică și Sport (USEFS), astăzi Institutul de Educație Fizică și Sport al USM.",
    logo: "/images/partners/logos/iefs.jpg",
    logoAlt: "Emblema USEFS, publicată pe site-ul Institutului de Educație Fizică și Sport",
    logoTone: "white",
    images: [
    ],
  },
] as const;
