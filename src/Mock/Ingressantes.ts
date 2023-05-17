export type Curse = string[];

export type CoutryCity = { name: string; city: string[] }[];

const dataCurse: Curse = ["Matemática", "Letras", "Geografia"];

const dataCoutryCity: CoutryCity = [
  {
    name: "São Paulo",
    city: ["Mogi das Cruzes", "Suzano", "Poá", "Guararema"],
  },
  { name: "Rio de Janeiro", city: ["Angra dos Reis", "Niterói", "Itaboraí"] },
  {
    name: "Minas Gerais",
    city: ["Belo Horizonte", "Monte Azul", "Muzambinho"],
  },
];

export { dataCoutryCity, dataCurse };
