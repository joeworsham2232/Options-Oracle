
import React from 'react';
import { Hash } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="bg-black border-b border-cyan-500/50 px-6 py-4 shadow-lg shadow-cyan-500/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/50">
            <Hash className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
              Options Strategy Bot
            </h1>
            <p className="text-cyan-300/80 text-sm">Teaching advanced options strategies with professional mechanics</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-cyan-400">
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></span>
          <span>Online • Ready for commands</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
