import React from "react";

type IProps = {
  label: string;
  options: { value: string; label: string }[] | undefined;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  propsSelect?: React.SelectHTMLAttributes<HTMLSelectElement>;
};

const Select: React.FC<IProps> = (props) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={props.label}>{props.label}</label>
      <select
        id={props.label}
        className="border-2 rounded-md"
        onChange={props.onChange}
      >
        {props?.options?.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
