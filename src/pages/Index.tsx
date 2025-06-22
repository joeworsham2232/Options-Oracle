
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
    <div className="min-h-screen bg-black text-cyan-100 relative overflow-hidden">
      {/* Neon background effects */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-10">
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
    </div>
  );
};

export default Index;
