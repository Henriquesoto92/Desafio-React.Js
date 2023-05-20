"use client";

import { dataCoutryCity, dataCurse } from "@/Mock/Ingressantes";
import { Select } from "@/components";
import Input from "@/components/Input";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState<string>("");
  const [CurseSelected, setCurseSelected] = useState<number>(1);
  const [countrySelected, setCountrySelected] = useState<number>(1);
  const [citySelected, setCitySelected] = useState<number>(1);

  return (
    <form>
      <Input
        label=""
        propsInput={{
          disabled: false,
          value: name,
          onChange: (e) => setName(e.target.value),
        }}
      />

      <Select
        label="Curso"
        options={dataCurse}
        propsSelect={{
          disabled: false,
          value: dataCurse[CurseSelected - 1]?.id.toString(),
          onChange: (e) => setCurseSelected(Number(e.target.value)),
        }}
      />
      <Select
        label="Estado"
        options={dataCoutryCity}
        propsSelect={{
          disabled: false,
          value: dataCoutryCity[countrySelected - 1]?.id.toString(),
          onChange: (e) => setCountrySelected(Number(e.target.value)),
        }}
      />
      <Select
        label="Cidade"
        options={
          dataCoutryCity.find((country) => country.id === countrySelected)
            ?.citys
        }
        propsSelect={{
          required: true,
          disabled: false,
          value:
            dataCoutryCity[countrySelected - 1]?.citys[
              citySelected - 1
            ]?.id.toString(),
          onChange: (e) => setCitySelected(Number(e.target.value)),
        }}
      />
    </form>
  );
};

export default Form;
