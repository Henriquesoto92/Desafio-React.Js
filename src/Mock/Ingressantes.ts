import { CoutryCity, Curse } from "@/interface";

const dataCurse: Curse = [
  { id: 1, label: "Matemática" },
  { id: 2, label: "Letras" },
  { id: 3, label: "Geografia" },
];

const dataCoutryCity: CoutryCity = [
  {
    id: 1,
    label: "São Paulo",
    citys: [
      { id: 1, label: "Mogi das Cruzes" },
      { id: 2, label: "Suzano" },
      { id: 3, label: "Poá" },
      { id: 4, label: "Guararema" },
    ],
  },
  {
    id: 2,
    label: "Rio de Janeiro",
    citys: [
      { id: 1, label: "Angra dos Reis" },
      { id: 2, label: "Niterói" },
      { id: 3, label: "Itaboraí" },
    ],
  },
  {
    id: 3,
    label: "Minas Gerais",
    citys: [
      { id: 1, label: "Belo Horizonte" },
      { id: 2, label: "Monte Azul" },
      { id: 3, label: "Muzambinho" },
    ],
  },
];

export { dataCoutryCity, dataCurse };
