import React from 'react';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-brand-dark text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center text-brand-dark font-bold text-xl">
                M
              </div>
              <span className="font-bold text-xl tracking-tight">MenuDS</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-6">
              Empowering modern restaurants with professional digital menus and smart management tools.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => onNavigate(Page.TEMPLATES)} className="text-gray-400 hover:text-white transition-colors">
                  Templates
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate(Page.APP)} className="text-gray-400 hover:text-white transition-colors">
                  Restaurant App
                </button>
              </li>
              <li>
                 <a href="https://menuds.etsy.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Etsy Shop</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => onNavigate(Page.BLOG)} className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate(Page.CONTACT)} className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </button>
              </li>
              <li>
                <span className="text-gray-500">Privacy Policy</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} MenuDS. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             {/* Social placeholders */}
             <div className="w-5 h-5 bg-gray-700 rounded-full"></div>
             <div className="w-5 h-5 bg-gray-700 rounded-full"></div>
             <div className="w-5 h-5 bg-gray-700 rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};