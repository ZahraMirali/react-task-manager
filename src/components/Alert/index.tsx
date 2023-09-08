import React from "react";
import styled from "styled-components";

const AlertContainer = styled.div`
  border: 1px solid #e57373;
  padding: 10px;
  border-radius: 4px;
  color: #5f2120;
  width: 300px;
  margin: auto;
  margin-top: 30px;
`;

interface AlertProps {
  message: string;
}

const Alert: React.FC<AlertProps> = ({ message }) => {
  return <AlertContainer>{message}</AlertContainer>;
};

export default Alert;
