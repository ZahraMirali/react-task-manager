import React, { useState } from "react";
import { AccordionItemContainer, AccordionItemContent } from "./styled";
import { Task } from "../../types/task";
import AccordionHeader from "./AccordionHeader";
import Checkbox from "../Checkbox";

interface AccordionItemProps {
  title: string;
  tasks: Task[];
  onCheckboxChange: (taskIndex: number, checked: boolean) => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  tasks,
  onCheckboxChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const completed = tasks.every((task) => task.checked);

  return (
    <AccordionItemContainer>
      <AccordionHeader
        isOpen={isOpen}
        onClick={toggleAccordion}
        title={title}
        completed={completed}
      />
      <AccordionItemContent $isOpen={isOpen}>
        <div>
          {tasks.map((task, index) => (
            <Checkbox
              key={index}
              title={task.description}
              checked={task.checked}
              onChange={(e) => onCheckboxChange(index, e.target.checked)}
            />
          ))}
        </div>
      </AccordionItemContent>
    </AccordionItemContainer>
  );
};

export default AccordionItem;
