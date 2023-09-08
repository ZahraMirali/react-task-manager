export type Task = {
  description: string;
  value: number;
  checked: boolean;
};

export type TaskCategory = {
  name: string;
  tasks: Task[];
};
