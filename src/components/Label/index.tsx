import React from "react";

type IProps = {
  label: string;
  propsLabel?: React.LabelHTMLAttributes<HTMLLabelElement>;
};

const Label: React.FC<IProps> = (props) => {
  return (
    <label
      htmlFor={props.label}
      {...props.propsLabel}
      className="font-semibold"
    >
      {props.label}
    </label>
  );
};

export default Label;
