
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const WelcomeMessage: React.FC = () => {
  return (
    <Card className="mb-8 bg-black border-cyan-500/50 shadow-lg shadow-cyan-500/20">
      <CardContent className="pt-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text">
            Welcome! 👋
          </h2>
          <p className="text-cyan-100/90 text-lg max-w-2xl mx-auto">
            Select a strategy category to get started or use any slash command like{' '}
            <code className="bg-gray-900 border border-cyan-500/50 px-2 py-1 rounded text-cyan-400 shadow-lg shadow-cyan-500/20">
              /ironcondor
            </code>{' '}
            for a direct explanation.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default WelcomeMessage;
