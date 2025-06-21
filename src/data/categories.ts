
import { TrendingUp, TrendingDown, BarChart3, Target } from 'lucide-react';

export const categories = {
  bullish: {
    label: '📈 Bullish Strategies',
    icon: TrendingUp,
    strategies: [
      { id: 'bullputspread', name: 'Bull Put Spread', command: '/bullputspread' },
      { id: 'poormanscall', name: "Poor Man's Covered Call", command: '/poorMansCoveredCall' },
      { id: 'callcalendar', name: 'Call Calendar Spread', command: '/callcalendar' },
      { id: 'calldebit', name: 'Call Debit Spread', command: '/debitspread' }
    ]
  },
  neutral: {
    label: '📊 Neutral / Non-Directional',
    icon: BarChart3,
    strategies: [
      { id: 'ironcondor', name: 'Iron Condor', command: '/ironcondor' },
      { id: 'ironbutterfly', name: 'Iron Butterfly', command: '/ironbutterfly' },
      { id: 'strangle', name: 'Short Strangle', command: '/strangle' },
      { id: 'straddle', name: 'Straddle', command: '/straddle' },
      { id: 'calendar', name: 'Calendar Spread', command: '/calendar' },
      { id: 'diagonal', name: 'Diagonal Spread', command: '/diagonal' },
      { id: 'brokenwing', name: 'Broken Wing Butterfly', command: '/brokenwingbutterfly' },
      { id: 'jadelizard', name: 'Jade Lizard', command: '/jadeLizard' }
    ]
  },
  bearish: {
    label: '📉 Bearish Strategies',
    icon: TrendingDown,
    strategies: [
      { id: 'bearcall', name: 'Bear Call Spread', command: '/bearcallspread' },
      { id: 'putcalendar', name: 'Put Calendar Spread', command: '/putcalendar' },
      { id: 'putdebit', name: 'Put Debit Spread', command: '/debitspread' },
      { id: 'invertedstrangle', name: 'Inverted Strangle', command: '/invertedstrangle' },
      { id: 'ratiospread', name: 'Ratio Spread', command: '/ratioSpread' }
    ]
  },
  directional: {
    label: '🎯 Directional / Aggressive',
    icon: Target,
    strategies: [
      { id: 'debitspread', name: 'Call/Put Debit Spread', command: '/debitspread' },
      { id: 'ratiospread2', name: 'Ratio Spread', command: '/ratioSpread' },
      { id: 'brokenwing2', name: 'Broken Wing Butterfly', command: '/brokenwingbutterfly' },
      { id: 'invertedstrangle2', name: 'Inverted Strangle', command: '/invertedstrangle' },
      { id: 'poormanscall2', name: "Poor Man's Covered Call", command: '/poorMansCoveredCall' },
      { id: 'diagonal2', name: 'Diagonal Spread', command: '/diagonal' }
    ]
  }
};
