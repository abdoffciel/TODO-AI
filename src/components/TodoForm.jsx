import { PlusCircle } from 'lucide-react';

export default function TodoForm({ newTodo, setNewTodo, addTodo }) {
  return (
    <form onSubmit={addTodo} className="group">
      <div className="flex gap-2 p-2 rounded-lg bg-base-200 hover:bg-base-300 transition-all duration-300">
        <input
          type="text"
          placeholder="Add a new task..."
          className="input input-bordered flex-1 bg-transparent border-2 focus:border-primary"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button 
          type="submit" 
          className="btn btn-primary btn-circle group-hover:rotate-180 transition-transform duration-500"
        >
          <PlusCircle className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
}