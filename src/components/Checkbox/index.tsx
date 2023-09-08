import React, { ChangeEventHandler } from "react";
import { CheckboxInput, Checkmark, CheckboxLabel } from "./styled";

interface CheckboxProps {
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  title: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  onChange,
  title,
}) => {
  return (
    <CheckboxLabel>
      <CheckboxInput type="checkbox" checked={checked} onChange={onChange} />
      <Checkmark $isChecked={checked} />
      {title}
    </CheckboxLabel>
  );
};

export default Checkbox;
