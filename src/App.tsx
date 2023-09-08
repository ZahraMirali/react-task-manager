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

  const calculateNormalizedValue = (): number => {
    const totalValue = taskCategories
      .flatMap((category) => category.tasks)
      .filter((task) => task.checked)
      .reduce((sum, task) => sum + task.value, 0);

    const normalizedValue =
      (totalValue * 100) /
      taskCategories
        .flatMap((category) => category.tasks)
        .reduce((sum, task) => sum + task.value, 0);

    return normalizedValue;
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <Alert message={error} />;
  }

  return (
    <LayoutContainer>
      <LayoutHeader>
        <h1>Lodgify Grouped Tasks</h1>
        <ProgressBar value={calculateNormalizedValue()} />
      </LayoutHeader>
      <Accordion data={taskCategories} onCheckboxChange={onCheckboxChange} />
    </LayoutContainer>
  );
}

export default App;
