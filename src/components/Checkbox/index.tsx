import React, { ChangeEventHandler } from "react";
import { CheckboxInput, Checkmark, CheckboxLabel } from "./styled";

interface CheckboxProps {
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked = false, onChange }) => {
  return (
    <CheckboxLabel>
      <CheckboxInput type="checkbox" checked={checked} onChange={onChange} />
      <Checkmark $isChecked={checked} />
      Your Text Here
    </CheckboxLabel>
  );
};

export default Checkbox;
