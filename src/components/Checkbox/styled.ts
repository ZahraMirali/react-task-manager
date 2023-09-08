import styled from "styled-components";

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin: 10px;
  margin-bottom: 15px;
  cursor: pointer;
`;

export const CheckboxInput = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

export const Checkmark = styled.span<{ $isChecked: boolean }>`
  width: 16px;
  height: 16px;
  border: 1px solid ${(props) => (props.$isChecked ? "#00b797" : "#999999")};
  background-color: ${(props) =>
    props.$isChecked ? "#00b797" : "transparent"};
  border-radius: 5px;
  margin-right: 10px;
  position: relative;
  transition: all 0.2s ease;

  &::before {
    content: ${(props) => (props.$isChecked ? '""' : "none")};
    position: absolute;
    top: 40%;
    left: 50%;
    width: 4px;
    height: 8px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: translate(-50%, -50%) rotate(45deg);
    opacity: ${(props) => (props.$isChecked ? "1" : "0")};
  }
`;
