import styled from "styled-components";

export const HeaderContainer = styled.button`
  display: flex;
  align-items: flex-end;
  padding: 16px;
  cursor: pointer;
  width: 100%;
  outline: none;
  background: transparent;
  border: 0;
  text-align: left;
`;

export const Title = styled.span<{ $completed?: boolean }>`
  flex: 1;
  margin: 0 10px;
  font-size: 0.9rem;
  color: ${({ $completed }) => ($completed ? "#00b797" : "black")};
`;

export const ToggleText = styled.span`
  color: #999999;
  margin: 0 10px;
  font-size: 0.85rem;
`;

export const ToggleIcon = styled.svg<{ $isOpen: boolean }>`
  transition: transform 0.4s;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(-180deg)" : "rotate(0deg)")};
  transform-origin: center;
`;

export const TaskIcon = styled.svg<{ $completed?: boolean }>`
  fill: ${({ $completed }) => ($completed ? "#00b797" : "black")};
`;

export const AccordionItemContainer = styled.div`
  border-bottom: 1px solid #dddddd;

  &:last-child {
    border-bottom: none;
  }
`;

export const AccordionItemContent = styled.div<{ $isOpen: boolean }>`
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  max-height: ${({ $isOpen }) => ($isOpen ? "500px" : "0")};

  & > div {
    padding: 10px;
  }
`;

export const AccordionContainer = styled.div`
  border: 1px solid #dddddd;
  border-radius: 10px;
  overflow: hidden;
`;
