export type ServiceStep = {
  number: string;
  title: string;
  text: string;
  image: string;
  benefits: string[];
};

export const serviceSteps: ServiceStep[] = [
  {
    number: "01",
    title: "Consultanță",
    text: "Alegem textura, nuanța și sistemul potrivit.",
    image: "/images/consultanta.jpg",
    benefits: ["Materiale", "Culori", "Controlul luminii"],
  },
  {
    number: "02",
    title: "Măsurători",
    text: "Măsurăm precis fiecare fereastră la locație.",
    image: "/images/montare.jpg",
    benefits: ["Deplasare", "Prindere", "Calcul material"],
  },
  {
    number: "03",
    title: "Coasere la comandă",
    text: "Croim și coasem fiecare piesă în atelier.",
    image: "/images/coasere.jpg",
    benefits: ["Croire precisă", "Pliuri", "Finisaj"],
  },
  {
    number: "04",
    title: "Montare",
    text: "Instalăm, aranjăm și verificăm fiecare detaliu.",
    image: "/images/montare.jpg",
    benefits: ["Instalare", "Aranjare", "Verificare"],
  },
];
