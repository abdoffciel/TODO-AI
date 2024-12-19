import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import Analysis from './components/Analysis';
import TodoList from './components/TodoList';
import { playSound } from './utils/audio';

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [newTodo, setNewTodo] = useState('');
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const analyzeTask = async (task) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyAeq48qJQ2TYCg3AJLDN3txOMGkcb0uv6c`,
        {
          contents: [{
            parts: [{
              text: `Analyze this task and provide a brief suggestion on how to approach it effectively: "${task}"`
            }]
          }]
        }
      );
      setAnalysis(response.data.candidates[0].content.parts[0].text);
    } catch (error) {
      console.error('Error analyzing task:', error);
      setAnalysis('Failed to analyze task. Please try again.');
    }
    setLoading(false);
  };

  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    
    const todo = {
      id: Date.now(),
      text: newTodo,
      completed: false,
      timestamp: new Date().toLocaleString()
    };
    
    setTodos([...todos, todo]);
    setNewTodo('');
    analyzeTask(newTodo);
    playSound('add');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        const newCompleted = !todo.completed;
        if (newCompleted) {
          playSound('complete');
        }
        return { ...todo, completed: newCompleted };
      }
      return todo;
    }));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
    playSound('delete');
  };

  return (
    <div className="min-h-screen bg-base-200 py-8 px-4 transition-colors duration-300">
      <div className="max-w-2xl mx-auto">
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-500">
          <div className="card-body">
            <Header />
            <TodoForm 
              newTodo={newTodo}
              setNewTodo={setNewTodo}
              addTodo={addTodo}
            />
            <Analysis 
              loading={loading}
              analysis={analysis}
            />
            <div className="divider my-8"></div>
            <TodoList 
              todos={todos}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;