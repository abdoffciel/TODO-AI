import TodoItem from './TodoItem';

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
  if (todos.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-base-content/60 text-lg">
          No tasks yet. Add one above! ✨
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}