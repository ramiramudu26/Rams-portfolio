import React, { useState } from 'react';
import Terminal from './components/Terminal';
import Resume from './components/Resume';

function App() {
  const [showResume, setShowResume] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat bg-blend-overlay">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      <div className="relative z-10 w-full flex justify-center">
        <Terminal onOpenResume={() => setShowResume(true)} />
      </div>

      {showResume && <Resume onClose={() => setShowResume(false)} />}
    </div>
  );
}

export default App;
