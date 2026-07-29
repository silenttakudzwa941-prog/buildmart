"use client";

import { createContext, useContext, useState, useEffect } from 'react';
import { products, type Product } from '../../components/data/products';

type QuoteItem = Product & { quantity: number };

type QuoteContextType = {
  quoteItems: QuoteItem[];
  addToQuote: (product: Product) => void;
  removeFromQuote: (id: string) => void;
  clearQuote: () => void;
  getTotalItems: () => number;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>([]);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('kazmat-quote');
    if (saved) setQuoteItems(JSON.parse(saved));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('kazmat-quote', JSON.stringify(quoteItems));
  }, [quoteItems]);

  const addToQuote = (product: Product) => {
    setQuoteItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id? {...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, {...product, quantity: 1 }];
    });
  };

  const removeFromQuote = (id: string) => {
    setQuoteItems(prev => prev.filter(item => item.id!== id));
  };

  const clearQuote = () => setQuoteItems([]);
  const getTotalItems = () => quoteItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <QuoteContext.Provider value={{ quoteItems, addToQuote, removeFromQuote, clearQuote, getTotalItems }}>
      {children}
    </QuoteContext.Provider>
  );
}

export const useQuote = () => {
  const context = useContext(QuoteContext);
  if (!context) throw new Error('useQuote must be used within QuoteProvider');
  return context;
};