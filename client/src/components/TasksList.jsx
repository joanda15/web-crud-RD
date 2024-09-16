import { useState, useEffect } from "react";
import { TaskCard } from "./TaskCard";
import { TaskFilter } from "./TaskFilter";
import { getAllTasks } from "../api/tasks.api";

export function TasksList() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const { data } = await getAllTasks();
      setTasks(data);
      setFilteredTasks(data);
    }
    loadTasks();
  }, []);

  const handleFilterChange = ({ priority, severity }) => {
    let filtered = tasks;

    if (priority) {
      filtered = filtered.filter(task => task.priority === parseInt(priority));
    }

    if (severity) {
      filtered = filtered.filter(task => task.severidad === parseInt(severity));
    }

    setFilteredTasks(filtered);
  };

  return (
    <div>
      {/* Botón de filtro */}
      <TaskFilter onFilterChange={handleFilterChange} />

      {/* Lista de tareas filtradas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {filteredTasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
