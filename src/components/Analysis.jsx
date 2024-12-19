import { Brain, Loader2 } from 'lucide-react';

export default function Analysis({ loading, analysis }) {
  if (!loading && !analysis) return null;

  return (
    <div className="mt-6">
      {loading ? (
        <div className="flex items-center justify-center gap-2 text-primary">
          <Loader2 className="w-5 h-5 animate-spin" />
          <span className="animate-pulse">Analyzing task...</span>
        </div>
      ) : (
        <div className="alert alert-info shadow-lg backdrop-blur-sm bg-info/30">
          <Brain className="w-5 h-5 text-info-content" />
          <div className="prose prose-sm">
            <p className="text-info-content">{analysis}</p>
          </div>
        </div>
      )}
    </div>
  );
}