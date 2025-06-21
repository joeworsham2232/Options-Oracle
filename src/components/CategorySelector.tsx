
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
    <Card className="mb-8 bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white">Select Strategy Type</CardTitle>
      </CardHeader>
      <CardContent>
        <Select value={selectedCategory} onValueChange={onCategoryChange}>
          <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
            <SelectValue placeholder="Choose a strategy category..." />
          </SelectTrigger>
          <SelectContent className="bg-gray-700 border-gray-600">
            {Object.entries(categories).map(([key, category]) => (
              <SelectItem key={key} value={key} className="text-white focus:bg-gray-600">
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
