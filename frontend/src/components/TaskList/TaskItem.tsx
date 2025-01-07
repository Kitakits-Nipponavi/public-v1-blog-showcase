import { TaskItemProps } from '../../types'; // Adjust the path if needed

const Task= ({ id, description, icon, isCompleted, isDefault, onToggleTaskComplete, onDelete, onEdit }: TaskItemProps) => {
  return (
    <div
      key={id}
      className={`flex items-center p-4 mb-2 rounded-lg ${isCompleted ? 'bg-green-100' : 'bg-gray-100'}`}
    >
       {/* Completion Checkbox */}
       <div onClick={() => onToggleTaskComplete(id)} className="cursor-pointer mr-4">
        {isCompleted ? (
          <span className="text-green-600 font-body text-bodyXS">✔️{icon}</span>
        ) : (
          <span className="text-gray-600 font-body text-bodyXS">◯{icon}</span>
        )}
      </div>

      <div className="flex-1 font-body text-bodyXS">
        <p>{description}</p>
      </div>

       {/* Action Buttons */}
       {!isDefault && (
        <>
          <button onClick={() => onEdit(id, "Updated Description")} className="ml-2 text-blue-500" aria-label="Edit Task">
            ✏️
          </button>
          <button onClick={() => onDelete(id)} className="ml-2 text-red-500" aria-label="Delete Task">
            🗑️
          </button>
        </>
      )}
    </div>
  );
};

export default Task;
