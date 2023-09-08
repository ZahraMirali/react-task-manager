import React from "react";
import {
  HeaderContainer,
  TaskIcon,
  Title,
  ToggleText,
  ToggleIcon,
} from "./styled";

interface AccordionHeaderProps {
  title: string;
  onClick: () => void;
  isOpen: boolean;
  completed?: boolean;
}

const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  title,
  onClick,
  isOpen,
  completed,
}) => {
  return (
    <HeaderContainer onClick={onClick}>
      <TaskIcon
        $completed={completed}
        viewBox="0 0 32 32"
        height="20px"
        width="20px"
      >
        {completed ? (
          <path d="M 16 2 C 14.742188 2 13.847656 2.890625 13.40625 4 L 5 4 L 5 29 L 27 29 L 27 4 L 18.59375 4 C 18.152344 2.890625 17.257813 2 16 2 Z M 16 4 C 16.554688 4 17 4.445313 17 5 L 17 6 L 20 6 L 20 8 L 12 8 L 12 6 L 15 6 L 15 5 C 15 4.445313 15.445313 4 16 4 Z M 7 6 L 10 6 L 10 10 L 22 10 L 22 6 L 25 6 L 25 27 L 7 27 Z M 21.28125 13.28125 L 15 19.5625 L 11.71875 16.28125 L 10.28125 17.71875 L 14.28125 21.71875 L 15 22.40625 L 15.71875 21.71875 L 22.71875 14.71875 Z" />
        ) : (
          <path d="M 16 2 C 14.74 2 13.850156 2.89 13.410156 4 L 5 4 L 5 29 L 27 29 L 27 4 L 18.589844 4 C 18.149844 2.89 17.26 2 16 2 z M 16 4 C 16.55 4 17 4.45 17 5 L 17 6 L 20 6 L 20 8 L 12 8 L 12 6 L 15 6 L 15 5 C 15 4.45 15.45 4 16 4 z M 7 6 L 10 6 L 10 10 L 22 10 L 22 6 L 25 6 L 25 27 L 7 27 L 7 6 z M 9 13 L 9 15 L 11 15 L 11 13 L 9 13 z M 13 13 L 13 15 L 23 15 L 23 13 L 13 13 z M 9 17 L 9 19 L 11 19 L 11 17 L 9 17 z M 13 17 L 13 19 L 23 19 L 23 17 L 13 17 z M 9 21 L 9 23 L 11 23 L 11 21 L 9 21 z M 13 21 L 13 23 L 23 23 L 23 21 L 13 21 z" />
        )}
      </TaskIcon>
      <Title $completed={completed}>{title}</Title>
      <ToggleText>{isOpen ? "Hide" : "Show"}</ToggleText>
      <ToggleIcon
        $isOpen={isOpen}
        viewBox="0 0 48 48"
        height="16px"
        width="16px"
      >
        <polygon
          fill="#999999"
          points="43,17.1 39.9,14 24,29.9 8.1,14 5,17.1 24,36"
        />
      </ToggleIcon>
    </HeaderContainer>
  );
};

export default AccordionHeader;
