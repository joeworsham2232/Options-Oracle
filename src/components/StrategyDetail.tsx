
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Hash } from 'lucide-react';

interface StrategyContent {
  whatItIs: string;
  whenToUse: string;
  setup: string[];
  management: string[];
  maxProfit: string;
  maxLoss: string;
  proTip: string;
}

interface Strategy {
  title: string;
  description: string;
  content: StrategyContent;
}

interface StrategyDetailProps {
  strategy: Strategy;
}

const StrategyDetail: React.FC<StrategyDetailProps> = ({ strategy }) => {
  return (
    <Card className="w-full bg-gray-800 border-gray-700 text-gray-100">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Hash className="w-4 h-4 text-purple-400" />
          <Badge variant="outline" className="text-purple-400 border-purple-400">
            Strategy
          </Badge>
        </div>
        <CardTitle className="text-2xl font-bold text-white">{strategy.title}</CardTitle>
        <p className="text-gray-400">{strategy.description}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="font-semibold text-lg text-blue-400 mb-2">What It Is:</h4>
          <p className="text-gray-300 leading-relaxed">{strategy.content.whatItIs}</p>
        </div>

        <div>
          <h4 className="font-semibold text-lg text-green-400 mb-2">When to Use It:</h4>
          <p className="text-gray-300 leading-relaxed">{strategy.content.whenToUse}</p>
        </div>

        <div>
          <h4 className="font-semibold text-lg text-yellow-400 mb-2">How to Set It Up:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            {strategy.content.setup.map((step: string, index: number) => (
              <li key={index} className="leading-relaxed">{step}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg text-orange-400 mb-2">Trade Management:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            {strategy.content.management.map((rule: string, index: number) => (
              <li key={index} className="leading-relaxed">{rule}</li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-900/20 border border-green-700 rounded-lg p-4">
            <h5 className="font-semibold text-green-400 mb-1">Max Profit:</h5>
            <p className="text-gray-300 text-sm">{strategy.content.maxProfit}</p>
          </div>
          <div className="bg-red-900/20 border border-red-700 rounded-lg p-4">
            <h5 className="font-semibold text-red-400 mb-1">Max Loss:</h5>
            <p className="text-gray-300 text-sm">{strategy.content.maxLoss}</p>
          </div>
        </div>

        <div className="bg-purple-900/20 border border-purple-700 rounded-lg p-4">
          <h5 className="font-semibold text-purple-400 mb-2">Pro Tip:</h5>
          <p className="text-gray-300 text-sm leading-relaxed">{strategy.content.proTip}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default StrategyDetail;
