"use client";

import { dataCoutryCity, dataCurse } from "@/Mock/Ingressantes";
import { Select } from "@/components";
import { useState } from "react";

export default function RegisterPage() {
  const [countrySelected, setCountrySelected] = useState<string>("saoPaulo");
  const [citySelected, setCitySelected] = useState<string>("mogiDasCruzes");
  console.log(
    "🚀 ~ file: page.tsx:10 ~ RegisterPage ~ citySelected:",
    citySelected
  );

  console.log(
    "🚀 ~ file: page.tsx:9 ~ RegisterPage ~ countrySelected:",
    countrySelected
  );

  return (
    <div className="w-fit">
      <div className="flex flex-col gap-2">
        <div> Cadastro de Ingressantes</div>
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Nome</label>
          <input id="name" type="text" className="border-2 rounded-md" />
        </div>

        <Select label="Curso" options={dataCurse} />
        <Select
          label="Estado"
          options={dataCoutryCity}
          value={countrySelected}
          onChange={(e) => setCountrySelected(e.target.value)}
        />
        <Select
          label="Cidade"
          options={
            dataCoutryCity.find((country) => country.value === countrySelected)
              ?.citys
          }
          onChange={(e) => setCitySelected(e.target.value)}
        />
      </div>
    </div>
  );
}
