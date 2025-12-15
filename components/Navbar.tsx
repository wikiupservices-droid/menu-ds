import React, { useState } from 'react';
import { Page } from '../types';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Button } from './Button';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', value: Page.HOME },
    { label: 'Templates', value: Page.TEMPLATES },
    { label: 'App', value: Page.APP },
    { label: 'Blog', value: Page.BLOG },
    { label: 'Contact', value: Page.CONTACT },
  ];

  const handleNav = (page: Page) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => handleNav(Page.HOME)}>
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-dark rounded-md flex items-center justify-center text-brand-accent font-bold text-xl">
                M
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900">MenuDS</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNav(item.value)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.value
                    ? 'text-brand-accent'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button size="sm" variant="primary" onClick={() => window.open('https://menuds.etsy.com', '_blank')}>
              <ShoppingBag className="w-4 h-4 mr-2" />
              Shop on Etsy
            </Button>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNav(item.value)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  currentPage === item.value
                    ? 'bg-brand-light text-brand-accent'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="mt-4 px-3">
               <Button fullWidth size="sm" onClick={() => window.open('https://menuds.etsy.com', '_blank')}>
                <ShoppingBag className="w-4 h-4 mr-2" />
                Shop on Etsy
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};