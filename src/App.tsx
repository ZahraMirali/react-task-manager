import { useEffect, useState } from "react";
import { TaskCategory } from "./types/task";
import { getTasks } from "./api/task";
import LoadingSpinner from "./components/LoadingSpinner";
import Alert from "./components/Alert";
import Accordion from "./components/Accordion";
import ProgressBar from "./components/ProgressBar";
import { LayoutContainer, LayoutHeader } from "./components/Layout";

function App() {
  const [taskCategories, setTaskCategories] = useState<TaskCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>(undefined);

  const totalCount = taskCategories.flatMap(
    (category) => category.tasks
  ).length;

  useEffect(() => {
    getTasks()
      .then((response) => {
        setTaskCategories(response.data);
      })
      .catch(() => {
        setError("Something went wrong!");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const onCheckboxChange = (
    categoryIndex: number,
    taskIndex: number,
    checked: boolean
  ) => {
    setTaskCategories((prev) => {
      const newTaskCategories = [...prev];
      newTaskCategories[categoryIndex].tasks[taskIndex].checked = checked;
      return newTaskCategories;
    });
  };

  const calculateNormalizedValue = (): {
    normalizedValue: number;
    count: number;
  } => {
    const totalDoneTasks = taskCategories
      .flatMap((category) => category.tasks)
      .filter((task) => task.checked);

    const totalValue = totalDoneTasks.reduce(
      (sum, task) => sum + task.value,
      0
    );

    const normalizedValue =
      (totalValue * 100) /
      taskCategories
        .flatMap((category) => category.tasks)
        .reduce((sum, task) => sum + task.value, 0);

    return { normalizedValue, count: totalDoneTasks.length };
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <Alert message={error} />;
  }

  const taskValue = calculateNormalizedValue();

  return (
    <LayoutContainer>
      <LayoutHeader>
        <h1>Lodgify Grouped Tasks</h1>
        <ProgressBar value={taskValue.normalizedValue} />
        <p>
          you have done {taskValue.count} out of {totalCount} tasks
        </p>
      </LayoutHeader>
      <Accordion data={taskCategories} onCheckboxChange={onCheckboxChange} />
    </LayoutContainer>
  );
}

export default App;
