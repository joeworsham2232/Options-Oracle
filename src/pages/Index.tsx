
import React, { useState } from 'react';
import Header from '@/components/Header';
import WelcomeMessage from '@/components/WelcomeMessage';
import CategorySelector from '@/components/CategorySelector';
import StrategyButtons from '@/components/StrategyButtons';
import StrategyDetail from '@/components/StrategyDetail';
import QuickCommands from '@/components/QuickCommands';
import { strategyDetails } from '@/data/strategyData';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedStrategy, setSelectedStrategy] = useState<string>('');

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setSelectedStrategy('');
  };

  const handleStrategySelect = (strategyId: string) => {
    setSelectedStrategy(strategyId);
  };

  const currentStrategy = selectedStrategy ? strategyDetails[selectedStrategy as keyof typeof strategyDetails] : null;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header />

      <div className="max-w-6xl mx-auto px-6 py-8">
        {!selectedCategory && <WelcomeMessage />}

        <CategorySelector 
          selectedCategory={selectedCategory} 
          onCategoryChange={handleCategoryChange} 
        />

        <StrategyButtons 
          selectedCategory={selectedCategory} 
          onStrategySelect={handleStrategySelect} 
        />

        {currentStrategy && (
          <div className="animate-in slide-in-from-bottom-4">
            <StrategyDetail strategy={currentStrategy} />
          </div>
        )}

        <QuickCommands onStrategySelect={handleStrategySelect} />
      </div>
    </div>
  );
};

export default Index;
