import { CoutryCity, Curse } from "@/interface";

const dataCurse: Curse = [
  { value: "matematica", label: "Matemática" },
  { value: "letras", label: "Letras" },
  { value: "geografia", label: "Geografia" },
];

const dataCoutryCity: CoutryCity = [
  {
    value: "saoPaulo",
    label: "São Paulo",
    citys: [
      { value: "mogiDasCruzes", label: "Mogi das Cruzes" },
      { value: "suzano", label: "Suzano" },
      { value: "poa", label: "Poá" },
      { value: "guararema", label: "Guararema" },
    ],
  },
  {
    value: "rioDeJaneiro",
    label: "Rio de Janeiro",
    citys: [
      { value: "angradosReis", label: "Angra dos Reis" },
      { value: "niterói", label: "Niterói" },
      { value: "itaboraí", label: "Itaboraí" },
    ],
  },
  {
    value: "MinasGerais",
    label: "Minas Gerais",
    citys: [
      { value: "beloHorizonte", label: "Belo Horizonte" },
      { value: "monteAzul", label: "Monte Azul" },
      { value: "Muzambinho", label: "Muzambinho" },
    ],
  },
];

export { dataCoutryCity, dataCurse };
