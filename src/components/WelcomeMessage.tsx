
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const WelcomeMessage: React.FC = () => {
  return (
    <Card className="mb-8 bg-gray-800 border-gray-700">
      <CardContent className="pt-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-white">Welcome! 👋</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Select a strategy category to get started or use any slash command like <code className="bg-gray-700 px-2 py-1 rounded text-purple-400">/ironcondor</code> for a direct explanation.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default WelcomeMessage;
