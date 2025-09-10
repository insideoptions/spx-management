"use client";

import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface SPXData {
  price: number;
  change: number;
  changePercent: number;
  isMarketOpen: boolean;
}

const SPXPrice = () => {
  const [spxData, setSPXData] = useState<SPXData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSPXPrice = async () => {
      try {
        // Use Next.js API route to keep API key secure
        const response = await fetch('/api/spx-price');
        
        if (!response.ok) {
          throw new Error('Failed to fetch SPX data');
        }
        
        const data = await response.json();
        setSPXData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch SPX data');
      } finally {
        setLoading(false);
      }
    };

    // Fetch price only once on component mount
    fetchSPXPrice();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span>SPX</span>
        <div className="w-16 h-4 bg-muted animate-pulse rounded"></div>
      </div>
    );
  }

  if (error || !spxData) {
    return (
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span>SPX</span>
        <span>--</span>
      </div>
    );
  }

  const isPositive = spxData.change >= 0;

  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="text-muted-foreground">SPX</span>
      <span className="font-medium">
        ${spxData.price.toFixed(2)}
      </span>
      <div className={`flex items-center gap-1 ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
        {isPositive ? (
          <TrendingUp className="w-3 h-3" />
        ) : (
          <TrendingDown className="w-3 h-3" />
        )}
        <span className="text-xs">
          {isPositive ? '+' : ''}{spxData.change.toFixed(2)} ({isPositive ? '+' : ''}{spxData.changePercent.toFixed(2)}%)
        </span>
      </div>
    </div>
  );
};

export default SPXPrice;
