
export const strategyDetails = {
  ironcondor: {
    title: "Iron Condor",
    description: "Breakdown of the Iron Condor strategy with professional mechanics",
    content: {
      whatItIs: "A defined-risk, neutral options strategy combining a short put spread and a short call spread. It profits if the stock stays within a specific range through expiration.",
      whenToUse: "Ideal in high IV environments when a stock is expected to stay range-bound. Best with 45 DTE, selling strikes just outside the expected move.",
      setup: [
        "Sell an OTM put",
        "Buy a further OTM put (for protection)",
        "Sell an OTM call", 
        "Buy a further OTM call (for protection)",
        "Keep both spreads equal width (e.g., $5 wide) for balanced risk and reward."
      ],
      management: [
        "Close early at 50% max profit",
        "If tested, don't panic — the strategy allows for time",
        "Avoid holding through expiration to reduce assignment risk"
      ],
      maxProfit: "Net credit received",
      maxLoss: "Spread width minus credit received",
      proTip: "Center your short strikes around the underlying's price or just outside the expected move. High IV rank is your friend — sell premium when it's expensive."
    }
  },
  ironbutterfly: {
    title: "Iron Butterfly",
    description: "Iron Butterfly strategy for high IV environments with limited risk",
    content: {
      whatItIs: "A defined-risk, range-bound strategy that combines a short straddle with long wings for protection. It offers higher premium than a condor, but a tighter range for max profit.",
      whenToUse: "Use in high IV environments when you expect the stock to stay very close to the strike price. Great around earnings or binary events when you want to take the other side of inflated IV.",
      setup: [
        "Sell an at-the-money call",
        "Sell an at-the-money put",
        "Buy an OTM call (higher than short call)",
        "Buy an OTM put (lower than short put)",
        "This creates a \"body\" at the stock price with \"wings\" for defined risk."
      ],
      management: [
        "Manage at 25%–50% max profit",
        "If one side is tested, don't over-adjust — time decay can still work in your favor",
        "Exit before expiration if price moves fast"
      ],
      maxProfit: "Net credit received",
      maxLoss: "Spread width minus credit received",
      proTip: "This setup is best when IV is elevated and the expected move is small. Stay mechanical and take profits early — this is a premium selling strategy, not a home run hitter."
    }
  },
  bullputspread: {
    title: "Bull Put Spread",
    description: "Bullish credit spread with defined risk",
    content: {
      whatItIs: "A defined-risk, bullish credit spread where you sell a put and buy a further OTM put for protection. You're taking a directional stance while limiting downside risk.",
      whenToUse: "Use when you're bullish on a stock but want a high-probability trade with limited risk. Best in high IV environments with 30–45 DTE.",
      setup: [
        "Sell a put around the 30 delta",
        "Buy a lower strike put to define risk",
        "Pick a spread width that fits your risk profile — common widths are $5 or $10."
      ],
      management: [
        "Manage at 50% max profit",
        "If tested, hold your mechanics unless breach is severe",
        "Avoid adjusting unless thesis has changed"
      ],
      maxProfit: "Net credit received",
      maxLoss: "Spread width minus credit received",
      proTip: "These work best when the market overprices downside moves. Use them when IV rank is elevated and stay mechanical on profit-taking."
    }
  },
  poormanscall: {
    title: "Poor Man's Covered Call",
    description: "Synthetic covered call for small accounts",
    content: {
      whatItIs: "A long call diagonal spread that replicates a covered call using much less capital. You buy a deep ITM long call and sell a short-term call against it.",
      whenToUse: "Great for bullish setups when you want to simulate stock ownership and generate income, but without tying up the cash to buy 100 shares.",
      setup: [
        "Buy a deep ITM call with 100+ DTE (0.80+ delta)",
        "Sell a short-term OTM call against it (weekly/monthly)",
        "The long call acts like synthetic stock and the short call collects income."
      ],
      management: [
        "Roll the short call regularly to keep collecting premium",
        "Manage at 50% max profit or adjust based on move",
        "Close or convert if the long call gets deep ITM"
      ],
      maxProfit: "Limited by short call and intrinsic value of long call",
      maxLoss: "Premium paid for the long call minus credit received",
      proTip: "Treat it like a stock substitute. It's best used when IV is low in the long-dated option and high in the short-term cycle."
    }
  },
  callcalendar: {
    title: "Call Calendar Spread",
    description: "Time-based strategy using call options at same strike",
    content: {
      whatItIs: "A time-based, neutral strategy where you sell a near-term call and buy a longer-dated call at the same strike. It benefits from time decay in the front leg and vega in the back leg.",
      whenToUse: "Ideal when IV is low in the back-month and higher in the near-term expiration. Use when you expect the stock to stay near the strike until the short leg expires.",
      setup: [
        "Sell a near-term call at ATM strike",
        "Buy a longer-term call at the same strike",
        "Typically done with 7–10 DTE front and 30+ DTE back."
      ],
      management: [
        "Manage when short leg nears expiration",
        "Roll or close depending on price behavior and IV",
        "Avoid into earnings unless planned"
      ],
      maxProfit: "Occurs when stock is right at the strike of both options at short leg expiration",
      maxLoss: "Net debit paid",
      proTip: "This is a vega-positive, theta-neutral trade early on. Use it when you're expecting sideways movement and potential IV expansion."
    }
  },
  calldebit: {
    title: "Call Debit Spread",
    description: "Bullish defined-risk trade with fixed cost",
    content: {
      whatItIs: "A defined-risk bullish strategy where you buy a call and sell a higher strike call to offset the cost. It limits both risk and reward.",
      whenToUse: "Use when IV is low and you want to express bullish bias with minimal capital outlay. Works best when looking for a clean upward move.",
      setup: [
        "Buy an ITM or ATM call",
        "Sell a higher strike call",
        "You pay a debit for the spread and cap your profit at the short strike."
      ],
      management: [
        "Manage near max profit if stock moves toward short strike",
        "Can hold through expiration since risk is defined",
        "Close if thesis changes or stock reverses"
      ],
      maxProfit: "Width of strikes minus debit paid",
      maxLoss: "Debit paid to enter",
      proTip: "Use call debit spreads when you want clean, bullish setups and IV is low. Great for low IV breakouts or earnings plays where premium is cheap."
    }
  },
  strangle: {
    title: "Short Strangle",
    description: "Premium-selling strategy for neutral to directional plays",
    content: {
      whatItIs: "An undefined-risk, neutral to directional strategy that sells an OTM call and OTM put. You're collecting premium and betting the stock stays between your strikes.",
      whenToUse: "Ideal in high IV rank environments with 45 DTE. Works best when you expect contraction in volatility or limited directional movement.",
      setup: [
        "Sell an OTM put around 16–20 delta",
        "Sell an OTM call around 16–20 delta",
        "This creates a wide profit zone — you keep the full credit if the stock finishes between both strikes."
      ],
      management: [
        "Manage at 25%–50% max profit",
        "Roll tested side to extend duration",
        "Be mindful of undefined risk and large moves"
      ],
      maxProfit: "Net credit received",
      maxLoss: "Theoretically unlimited on upside or downside",
      proTip: "This is a premium harvesting strategy. Stay small, stay mechanical, and let time and IV contraction work in your favor."
    }
  },
  straddle: {
    title: "Straddle",
    description: "Aggressive premium-seller for tight-range plays",
    content: {
      whatItIs: "An undefined-risk, neutral strategy where you sell an at-the-money call and an at-the-money put. You're collecting max premium but taking on more directional and IV exposure.",
      whenToUse: "Use when IV is very high and you expect minimal movement. This is a bold strategy, best for experienced traders in very specific setups like earnings or post-event IV crush.",
      setup: [
        "Sell an ATM put",
        "Sell an ATM call",
        "This gives you a large credit and profits if the stock stays close to the strike."
      ],
      management: [
        "Manage early at 25%–50% max profit",
        "Roll tested side if the move is slow and controlled",
        "Be cautious of large directional moves"
      ],
      maxProfit: "Net credit received",
      maxLoss: "Theoretically unlimited on upside or downside",
      proTip: "Straddles are powerful but risky. Use when IV is inflated and stay disciplined. They're great when you think the move is overdone and want to fade volatility."
    }
  },
  calendar: {
    title: "Calendar Spread",
    description: "Neutral, time-based strategy using different expirations",
    content: {
      whatItIs: "A time-based, neutral strategy where you sell a near-term option and buy a longer-dated option at the same strike. It benefits from time decay in the front leg and vega in the back leg.",
      whenToUse: "Ideal when IV is low in the back-month and higher in the near-term expiration. Use when you expect the stock to stay near the strike until the short leg expires.",
      setup: [
        "Sell a near-term option at ATM strike",
        "Buy a longer-term option at the same strike",
        "Typically done with 7–10 DTE front and 30+ DTE back."
      ],
      management: [
        "Manage when short leg nears expiration",
        "Roll or close depending on price behavior and IV",
        "Avoid into earnings unless planned"
      ],
      maxProfit: "Occurs when stock is right at the strike of both options at short leg expiration",
      maxLoss: "Net debit paid",
      proTip: "This is a vega-positive, theta-neutral trade early on. Use it when you're expecting sideways movement and potential IV expansion."
    }
  },
  diagonal: {
    title: "Diagonal Spread",
    description: "Time-spread with a directional bias",
    content: {
      whatItIs: "A variation of a calendar where you buy and sell options at different expirations and different strikes. It adds a directional tilt to the time-based strategy.",
      whenToUse: "Use when you're mildly bullish or bearish and want to benefit from time decay and directional movement. Look for setups where the front-month has high IV.",
      setup: [
        "Buy a longer-dated option",
        "Sell a nearer-term option at a different strike",
        "Can be structured as debit or credit depending on IV and skew."
      ],
      management: [
        "Manage short leg before expiration",
        "Roll or re-center if underlying moves",
        "Watch for changes in volatility and time decay"
      ],
      maxProfit: "Occurs when the underlying finishes near the short strike at short expiration",
      maxLoss: "Debit paid to enter",
      proTip: "Diagonals let you express a directional view while collecting premium. Keep duration and volatility in mind — it's a hybrid of time and movement."
    }
  },
  brokenwing: {
    title: "Broken Wing Butterfly",
    description: "Directional strategy with limited risk and better credit",
    content: {
      whatItIs: "A variation of the standard butterfly where one wing is moved to collect more credit or reduce risk on one side. It has a directional bias and defined risk.",
      whenToUse: "Use when you want to express a directional view with high probability and low cost. Ideal when IV is elevated and you want to lean bullish or bearish.",
      setup: [
        "Sell 2 options at the middle strike",
        "Buy 1 ITM option",
        "Buy 1 OTM option further out than equidistant",
        "Move the \"broken\" wing far enough to collect a credit or reduce cost basis."
      ],
      management: [
        "Manage at 25–50% profit or when tested",
        "Consider holding near expiration if risk is minimal",
        "Close if underlying moves past short strikes"
      ],
      maxProfit: "At the middle short strike",
      maxLoss: "Between the long wing and short strikes (on broken side)",
      proTip: "Use this when you want to create a skewed payoff curve with a directional lean. Favor credit versions so you start with positive P/L even if wrong."
    }
  },
  jadelizard: {
    title: "Jade Lizard",
    description: "Short premium strategy with no upside risk",
    content: {
      whatItIs: "A defined-risk, premium selling strategy that combines a short put and a short call spread. It has no upside risk and is great for neutral to slightly bullish outlooks.",
      whenToUse: "Best when IV is high and you're neutral to bullish. Works well when the underlying is range-bound but with potential for a pop.",
      setup: [
        "Sell a short put (typically around 30 delta)",
        "Sell a call spread above the stock price",
        "Ensure the total credit is greater than the width of the call spread — that's what gives you no upside risk."
      ],
      management: [
        "Manage at 25–50% profit",
        "Roll the put if tested or breached",
        "Watch downside risk carefully"
      ],
      maxProfit: "Net credit received",
      maxLoss: "Occurs if the underlying drops significantly below the short put",
      proTip: "This is a smart way to collect premium without upside risk. Be sure your credit is high enough — that's what gives the setup its edge."
    }
  },
  debitspread: {
    title: "Call or Put Debit Spread",
    description: "Directional defined-risk trade with fixed cost",
    content: {
      whatItIs: "A defined-risk directional strategy where you buy an option and sell another further OTM to offset the cost. It limits both risk and reward.",
      whenToUse: "Use when IV is low and you want to express directional bias with minimal capital outlay. Works best when looking for a clean move in a specific direction.",
      setup: [
        "Buy an ITM or ATM option",
        "Sell a further OTM option of the same type",
        "You pay a debit for the spread and cap your profit at the short strike."
      ],
      management: [
        "Manage near max profit if stock moves toward short strike",
        "Can hold through expiration since risk is defined",
        "Close if thesis changes or stock reverses"
      ],
      maxProfit: "Width of strikes minus debit paid",
      maxLoss: "Debit paid to enter",
      proTip: "Use debit spreads when you want clean, directional setups and IV is low. Great for low IV breakouts or earnings plays where premium is cheap."
    }
  },
  bearcall: {
    title: "Bear Call Spread",
    description: "Bearish credit spread with limited risk",
    content: {
      whatItIs: "A defined-risk, bearish credit spread where you sell a call and buy a further OTM call to cap risk. You're collecting premium and betting the stock stays below your short strike.",
      whenToUse: "Use when IV is high and you're neutral to bearish. Great for overbought names or resistance zones. 30–45 DTE works best.",
      setup: [
        "Sell a call around the 30 delta",
        "Buy a higher strike call for protection",
        "Choose equal-width spreads for balanced risk/reward."
      ],
      management: [
        "Manage at 50% max profit",
        "If tested, assess your directional thesis before adjusting",
        "Don't hold too close to expiration when risk increases"
      ],
      maxProfit: "Net credit received",
      maxLoss: "Spread width minus credit received",
      proTip: "Use this when you're bearish but want to define your risk. Higher IV boosts the premium — lean into that when selecting strikes."
    }
  },
  putcalendar: {
    title: "Put Calendar Spread",
    description: "Time-based strategy using put options at same strike",
    content: {
      whatItIs: "A time-based, neutral strategy where you sell a near-term put and buy a longer-dated put at the same strike. It benefits from time decay in the front leg and vega in the back leg.",
      whenToUse: "Ideal when IV is low in the back-month and higher in the near-term expiration. Use when you expect the stock to stay near the strike until the short leg expires.",
      setup: [
        "Sell a near-term put at ATM strike",
        "Buy a longer-term put at the same strike",
        "Typically done with 7–10 DTE front and 30+ DTE back."
      ],
      management: [
        "Manage when short leg nears expiration",
        "Roll or close depending on price behavior and IV",
        "Avoid into earnings unless planned"
      ],
      maxProfit: "Occurs when stock is right at the strike of both options at short leg expiration",
      maxLoss: "Net debit paid",
      proTip: "This is a vega-positive, theta-neutral trade early on. Use it when you're expecting sideways movement and potential IV expansion."
    }
  },
  putdebit: {
    title: "Put Debit Spread",
    description: "Bearish defined-risk trade with fixed cost",
    content: {
      whatItIs: "A defined-risk bearish strategy where you buy a put and sell a lower strike put to offset the cost. It limits both risk and reward.",
      whenToUse: "Use when IV is low and you want to express bearish bias with minimal capital outlay. Works best when looking for a clean downward move.",
      setup: [
        "Buy an ITM or ATM put",
        "Sell a lower strike put",
        "You pay a debit for the spread and cap your profit at the short strike."
      ],
      management: [
        "Manage near max profit if stock moves toward short strike",
        "Can hold through expiration since risk is defined",
        "Close if thesis changes or stock reverses"
      ],
      maxProfit: "Width of strikes minus debit paid",
      maxLoss: "Debit paid to enter",
      proTip: "Use put debit spreads when you want clean, bearish setups and IV is low. Great for low IV breakouts or earnings plays where premium is cheap."
    }
  },
  invertedstrangle: {
    title: "Inverted Strangle",
    description: "Aggressive, high-theta strategy with directional lean",
    content: {
      whatItIs: "An undefined-risk, directional short premium trade where the short call strike is below the short put strike. This creates negative delta exposure and high theta decay.",
      whenToUse: "Use when you're bearish and want to aggressively sell premium, especially after a big upside move. Best in high IV environments with directional conviction.",
      setup: [
        "Sell a call below current stock price",
        "Sell a put above the call strike",
        "This flips the strangle into a bearish theta-focused setup with assignment risk."
      ],
      management: [
        "Manage profits early or close when tested",
        "Be cautious — both sides can be breached",
        "Ideal for experienced traders only"
      ],
      maxProfit: "Net credit received if stock lands between strikes",
      maxLoss: "Theoretically unlimited",
      proTip: "Not for beginners — use when you want to lean into bearish high-IV setups and harvest aggressive premium. Stay mechanical or close quickly."
    }
  },
  ratiospread: {
    title: "Ratio Spread",
    description: "Directional strategy that can benefit from a move or contraction",
    content: {
      whatItIs: "An advanced, semi-directional strategy where you sell multiple options and buy fewer to create a ratio. Usually built for a credit or small debit.",
      whenToUse: "Use when IV is elevated and you want to benefit from a directional move with a high probability of keeping premium if the stock stays near your short strikes.",
      setup: [
        "Buy 1 OTM option",
        "Sell 2 further OTM options",
        "Commonly done with puts, and skewed bullish when done for a credit."
      ],
      management: [
        "Manage early if tested or if profit appears quickly",
        "Be careful if the underlying blows through your short strikes",
        "Close before gamma risk increases near expiration"
      ],
      maxProfit: "Occurs near the short strikes",
      maxLoss: "If done for a credit, risk is limited but can be large if breached",
      proTip: "Use these only when you're okay with potential assignment or directional exposure. Great for IV crush or defined moves after events."
    }
  }
};
