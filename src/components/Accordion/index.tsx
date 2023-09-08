import React from "react";
import AccordionItem from "./AccordionItem";
import { AccordionContainer } from "./styled";
import { TaskCategory } from "../../types/task";

interface AccordionProps {
  data: TaskCategory[];
  onCheckboxChange: (
    categoryIndex: number,
    taskIndex: number,
    checked: boolean
  ) => void;
}

const Accordion: React.FC<AccordionProps> = ({ data, onCheckboxChange }) => {
  return (
    <AccordionContainer>
      {data.map((category, index) => (
        <AccordionItem
          key={category.name}
          title={category.name}
          tasks={category.tasks}
          onCheckboxChange={(taskIndex, checked) =>
            onCheckboxChange(index, taskIndex, checked)
          }
        />
      ))}
    </AccordionContainer>
  );
};

export default Accordion;
