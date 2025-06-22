
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { categories } from '@/data/categories';

interface StrategyButtonsProps {
  selectedCategory: string;
  onStrategySelect: (strategyId: string) => void;
}

const StrategyButtons: React.FC<StrategyButtonsProps> = ({ selectedCategory, onStrategySelect }) => {
  if (!selectedCategory) return null;

  const category = categories[selectedCategory as keyof typeof categories];

  return (
    <Card className="mb-8 bg-black border-cyan-500/50 shadow-lg shadow-cyan-500/20">
      <CardHeader>
        <div className="flex items-center gap-2">
          {React.createElement(category.icon, { className: "w-5 h-5 text-cyan-400" })}
          <CardTitle className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
            {category.label}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {category.strategies.map((strategy) => (
            <Button
              key={strategy.id}
              variant="outline"
              className="justify-start h-auto p-4 bg-gray-900 border-cyan-500/50 hover:bg-cyan-500/10 hover:border-cyan-400 text-left transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
              onClick={() => onStrategySelect(strategy.id)}
            >
              <div>
                <div className="font-medium text-cyan-100">{strategy.name}</div>
                <div className="text-xs text-cyan-400 mt-1">{strategy.command}</div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default StrategyButtons;
