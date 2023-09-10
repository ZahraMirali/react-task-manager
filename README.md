# React Task Manager

This React application displays grouped tasks and allows you to interact with them.

## Start

Start the application:
npm start

This will launch the app, and you can access it in your web browser at http://localhost:3000.

## Features

The Lodgify Grouped Tasks App includes the following features:

- Display of tasks grouped by categories.
- Ability to mark tasks as completed or incomplete.
- Calculation and display of a progress bar based on task completion.

## Data Source

The task data is fetched from an external API using the `getTasks` function, which returns a Promise with a generic type of `AxiosResponse<TaskCategory[]>`. This indicates that it will fetch an array of `TaskCategory` objects and return an Axios response. The application is designed to work with data structured in categories and tasks.

```jsx
interface TaskCategory {
  name: string; // A string representing the category's name
  tasks: Task[]; // An array of tasks belonging to this category
}
```

```jsx
interface Task {
  description: string; // A string describing the task
  value: number; // A numerical value associated with the task
  checked: boolean; // A boolean indicating whether the task is checked or not
}
```

## Components

The following components are used in this application:

- **LoadingSpinner**: A component that displays a loading spinner.
- **Alert**: A component for displaying error messages.
- **Accordion**: An accordion component for displaying task categories.
- **ProgressBar**: A progress bar component for visualizing task completion

## Checkbox Component

The **Checkbox** component is a versatile React component for creating custom-styled checkboxes with labels.

```jsx
<Checkbox
  - checked={true} // Optional: Set to 'true' or 'false' to control the checkbox state
  - onChange={handleChange} // Optional: Specify a function to handle checkbox state changes
  - title="I agree to the terms and conditions" // Specify the label text
/>
```

## Accordion Component

A React component for creating an accordion interface. The component displays a list of tasks categorized into sections, with the ability to toggle task completion.

```jsx
<Accordion
  - data={taskData} // An array of task categories and their tasks
  - onCheckboxChange={handleCheckboxChange} // Function to handle checkbox state changes
/>
```
