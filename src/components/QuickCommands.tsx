
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface QuickCommandsProps {
  onStrategySelect: (strategyId: string) => void;
}

const QuickCommands: React.FC<QuickCommandsProps> = ({ onStrategySelect }) => {
  return (
    <Card className="mt-8 bg-black border-cyan-500/50 shadow-lg shadow-cyan-500/20">
      <CardHeader>
        <CardTitle className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
          Quick Commands
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
          {['ironcondor', 'strangle', 'bullputspread', 'debitspread'].map((cmd) => (
            <Button
              key={cmd}
              variant="ghost"
              size="sm"
              className="justify-start font-mono text-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 transition-all duration-300"
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
