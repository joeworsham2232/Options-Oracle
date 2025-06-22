
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { categories } from '@/data/categories';

interface CategorySelectorProps {
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({ selectedCategory, onCategoryChange }) => {
  return (
    <Card className="mb-8 bg-black border-cyan-500/50 shadow-lg shadow-cyan-500/20">
      <CardHeader>
        <CardTitle className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
          Select Strategy Type
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Select value={selectedCategory} onValueChange={onCategoryChange}>
          <SelectTrigger className="bg-gray-900 border-cyan-500/50 text-cyan-100 shadow-lg shadow-cyan-500/10">
            <SelectValue placeholder="Choose a strategy category..." />
          </SelectTrigger>
          <SelectContent className="bg-gray-900 border-cyan-500/50 shadow-lg shadow-cyan-500/20">
            {Object.entries(categories).map(([key, category]) => (
              <SelectItem key={key} value={key} className="text-cyan-100 focus:bg-cyan-500/20 focus:text-cyan-300">
                {category.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardContent>
    </Card>
  );
};

export default CategorySelector;
