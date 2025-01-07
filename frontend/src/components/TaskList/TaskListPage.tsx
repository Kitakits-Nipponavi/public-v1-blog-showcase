import { TaskListProps } from '../../types'; // Adjust the path if needed
import { useState } from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, title, onAddTask, onDeleteTaskList}: TaskListProps) => {
  // Local state to manage the current list of tasks
  const [taskList, setTaskList] = useState(tasks);
  // Local state for new task description
  const [newTaskDescription, setNewTaskDescription] = useState("");


  // Handler to toggle the completion status of a task
  const handleToggleComplete = (taskId: string) => {
    setTaskList((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  // Handler to delete a task from the task list
  const handleDeleteTask = (taskId: string) => {
    setTaskList((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  // Handler to edit the description of a task
  const handleEditTask = (taskId: string, newDescription: string) => {
    setTaskList((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, description: newDescription } : task
      )
    );
  };

  const handleAddTask = () => {
    if (newTaskDescription.trim()) {
      onAddTask(newTaskDescription);
      // Clear input field after adding
      setNewTaskDescription("");
    } else {
      alert("Please enter a task description.");
    }
  };

  return (
    <>
      {/* Title Section */}
      <div className="flex items-center justify-between border-b border-gray-300 pb-2 mb-4">
        <h1 className="text-bodyLG font-semibold">Task List</h1>
        <button className="p-2 rounded-full">
          {/* Assuming this is an edit button */}
        </button>
      </div>

      {/* Task Container */}
      <div className="w-[344px] border-base p-4 shadow-md bg-white">
        {/* Task Title */}
        <div className="shadow-sm text-xl font-medium">
          {title}
        </div>

        {/* Task List */}
        <div className="bg-task-bg border rounded-md shadow-inner p-4 mt-4">
          {taskList.map((task) => (
            <TaskItem
              key={task.id}
              {...task}
              onToggleTaskComplete={handleToggleComplete}
              onDelete={handleDeleteTask}
              onEdit={handleEditTask}
            />
          ))}

          {/* Add and Delete Task List Buttons */}
          <div className="flex space-x-4 mt-4">
            <button onClick={handleAddTask} className="add-task-btn bg-blue-500 text-white rounded px-4 py-2">
              +
            </button>
            <button onClick={onDeleteTaskList} className="bg-red-500 text-white rounded px-4 py-2">
              🗑️
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskList;
