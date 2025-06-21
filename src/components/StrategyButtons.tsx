
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
    <Card className="mb-8 bg-gray-800 border-gray-700">
      <CardHeader>
        <div className="flex items-center gap-2">
          {React.createElement(category.icon, { className: "w-5 h-5 text-purple-400" })}
          <CardTitle className="text-white">{category.label}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {category.strategies.map((strategy) => (
            <Button
              key={strategy.id}
              variant="outline"
              className="justify-start h-auto p-4 bg-gray-700 border-gray-600 hover:bg-gray-600 text-left"
              onClick={() => onStrategySelect(strategy.id)}
            >
              <div>
                <div className="font-medium text-white">{strategy.name}</div>
                <div className="text-xs text-purple-400 mt-1">{strategy.command}</div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default StrategyButtons;
