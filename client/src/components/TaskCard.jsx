import { useNavigate } from "react-router-dom";

export function TaskCard({ task }) {
  const navigate = useNavigate();

  // Mapea los valores de prioridad y severidad
  const priorityMap = {
    1: "Alta",
    2: "Media",
    3: "Baja"
  };

  const severityMap = {
    1: "Urgente",
    2: "Importante",
    3: "Normal"
  };

  return (
    <div className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
      onClick={() => {
        navigate(`/tasks/${task.id}`);
      }}
    >
      <h1 className="font-bold uppercase">{task.title}</h1>
      <p className="text-slate-400">{task.description}</p>
      {/* Muestra la prioridad y la severidad */}
      <p className="text-slate-400">
        <strong>Prioridad:</strong> {priorityMap[task.priority] || "No definida"}
      </p>
      <p className="text-slate-400">
        <strong>Severidad:</strong> {severityMap[task.severidad] || "No definida"}
      </p>
    </div>
  );
}
