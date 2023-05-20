import React from "react";
import { OptionsProps } from "@/interface";

type IProps = {
  label: string;
  options: OptionsProps[] | undefined;
  propsSelect: React.SelectHTMLAttributes<HTMLSelectElement>;
};

const Select: React.FC<IProps> = (props) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={props.label}>{props.label}</label>
      <select
        id={props.label}
        className="border-2 rounded-md"
        {...props.propsSelect}
      >
        {props?.options?.map((option) => (
          <option value={option.id} key={`${option.label}${option.id}`}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
