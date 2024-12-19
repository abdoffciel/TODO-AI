import { Brain } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-3">
        <Brain className="w-8 h-8 text-primary animate-pulse" />
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Smart Todo List
        </h1>
      </div>
      <ThemeToggle />
    </div>
  );
}