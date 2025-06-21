
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface QuickCommandsProps {
  onStrategySelect: (strategyId: string) => void;
}

const QuickCommands: React.FC<QuickCommandsProps> = ({ onStrategySelect }) => {
  return (
    <Card className="mt-8 bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white">Quick Commands</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
          {['ironcondor', 'strangle', 'bullputspread', 'debitspread'].map((cmd) => (
            <Button
              key={cmd}
              variant="ghost"
              size="sm"
              className="justify-start font-mono text-purple-400 hover:bg-gray-700"
              onClick={() => onStrategySelect(cmd)}
            >
              /{cmd}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickCommands;
