import { CheckCircle, Circle, Trash2 } from 'lucide-react';

export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <div className="group hover:bg-base-200 rounded-lg p-4 transition-all duration-300">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1">
          <button
            onClick={() => toggleTodo(todo.id)}
            className="btn btn-circle btn-ghost btn-sm hover:bg-primary/20"
          >
            {todo.completed ? (
              <CheckCircle className="w-5 h-5 text-success" />
            ) : (
              <Circle className="w-5 h-5 group-hover:text-primary transition-colors" />
            )}
          </button>
          <div className="flex-1">
            <p 
              className={`text-lg transition-all duration-300 ${
                todo.completed 
                  ? 'line-through text-base-300' 
                  : 'group-hover:text-primary'
              }`}
            >
              {todo.text}
            </p>
            <p className="text-sm text-base-content/60">
              {todo.timestamp}
            </p>
          </div>
        </div>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="btn btn-ghost btn-circle opacity-0 group-hover:opacity-100 hover:bg-error/20 transition-all duration-300"
        >
          <Trash2 className="w-5 h-5 text-error" />
        </button>
      </div>
    </div>
  );
}