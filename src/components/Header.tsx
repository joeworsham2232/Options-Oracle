
import React from 'react';
import { Hash } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="bg-gray-800 border-b border-gray-700 px-6 py-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
            <Hash className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Options Strategy Bot</h1>
            <p className="text-gray-400 text-sm">Teaching advanced options strategies with professional mechanics</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <span>Online • Ready for commands</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
