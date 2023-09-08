import React from "react";
import { ProgressBarContainer, ProgressBarFill } from "./styled";

interface ProgressBarProps {
  value: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value }) => {
  return (
    <ProgressBarContainer>
      <ProgressBarFill value={value}>
        {value.toFixed()}%&nbsp;&nbsp;
      </ProgressBarFill>
    </ProgressBarContainer>
  );
};

export default ProgressBar;
