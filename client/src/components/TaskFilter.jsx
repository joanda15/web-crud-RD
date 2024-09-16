import { useState } from "react";

export function TaskFilter({ onFilterChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [priorityFilter, setPriorityFilter] = useState("");
  const [severityFilter, setSeverityFilter] = useState("");

  const handlePriorityChange = (e) => {
    const selectedPriority = e.target.value;
    setPriorityFilter(selectedPriority);
    onFilterChange({ priority: selectedPriority, severity: severityFilter });
  };

  const handleSeverityChange = (e) => {
    const selectedSeverity = e.target.value;
    setSeverityFilter(selectedSeverity);
    onFilterChange({ priority: priorityFilter, severity: selectedSeverity });
  };

  return (
    <div className="relative">
      {/* Botón que abre el desplegable */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-indigo-500 text-white px-4 py-2 rounded-lg"
      >
        Filtro
      </button>

      {/* Menú desplegable */}
      {isOpen && (
        <div className="absolute bg-indigo-500 shadow-lg rounded-lg p-4 mt-2">
          <div className="mb-4">
            <label className="mr-2">Prioridad:</label>
            <select
              value={priorityFilter}
              onChange={handlePriorityChange}
              className="bg-black px-2 py-1 rounded"
            >
              <option value="">Todas</option>
              <option value="1">Alta</option>
              <option value="2">Media</option>
              <option value="3">Baja</option>
            </select>
          </div>

          <div>
            <label className="mr-2">Severidad:</label>
            <select
              value={severityFilter}
              onChange={handleSeverityChange}
              className="bg-black px-2 py-1 rounded"
            >
              <option value="">Todas</option>
              <option value="1">Urgente</option>
              <option value="2">Importante</option>
              <option value="3">Normal</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}
