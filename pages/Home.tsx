import React from 'react';
import { Page } from '../types';
import { Button } from '../components/Button';
import { Utensils, Coffee, Truck, Monitor, FileText, Layout, ExternalLink, ArrowRight } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative bg-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-20 pb-24 md:pt-32 md:pb-36">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-6 text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl mb-6">
                Digital Menus & <br/>
                <span className="text-brand-accent">Restaurant OS</span>
              </h1>
              <p className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto lg:mx-0">
                Boost sales with professional Canva templates for TV screens and printable menus. 
                Streamline operations with our upcoming management app.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Button size="lg" onClick={() => onNavigate(Page.TEMPLATES)}>
                  Browse Menu Templates
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => onNavigate(Page.APP)}>
                  Restaurant App (Soon)
                </Button>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-6 flex items-center justify-center">
              <div className="relative rounded-lg shadow-2xl bg-gray-800 p-4 border border-gray-700 w-full max-w-md transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="aspect-video bg-gray-700 rounded flex items-center justify-center relative overflow-hidden group">
                  <img src="https://picsum.photos/800/600" alt="Digital Menu Example" className="object-cover w-full h-full opacity-80" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-black/50 px-4 py-2 rounded text-white font-medium">Digital TV Menu Preview</span>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-700 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Designed for Food Businesses
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Save time and improve your brand image with ready-to-use solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 text-brand-accent mb-6">
                <Utensils className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Restaurants</h3>
              <p className="text-gray-600">Perfect for dine-in establishments needing elegant printable menus and wine lists.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 text-brand-accent mb-6">
                <Coffee className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cafés</h3>
              <p className="text-gray-600">Dynamic TV boards for your coffee shop to highlight specials and seasonal drinks.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 text-brand-accent mb-6">
                <Truck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Food Trucks</h3>
              <p className="text-gray-600">High-contrast, easy-to-read flyers and boards that grab attention on the street.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex justify-between items-end mb-12">
             <div>
               <h2 className="text-3xl font-extrabold text-gray-900">Explore Templates</h2>
               <p className="mt-2 text-gray-600">Professional designs you can edit in Canva.</p>
             </div>
             <Button variant="ghost" onClick={() => onNavigate(Page.TEMPLATES)} className="hidden sm:inline-flex">
               View All <ArrowRight className="ml-2 w-4 h-4" />
             </Button>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { icon: Monitor, label: 'TV Menu Boards', desc: 'Optimized for 1080p screens' },
               { icon: FileText, label: 'Printable Menus', desc: 'A4, Letter & Long formats' },
               { icon: Layout, label: 'Flyers & Promos', desc: 'Social media & street marketing' },
               { icon: Coffee, label: 'Social Packs', desc: 'Instagram stories & posts' },
             ].map((cat, idx) => (
               <div key={idx} 
                    onClick={() => onNavigate(Page.TEMPLATES)}
                    className="group bg-white rounded-lg p-6 shadow-sm border border-gray-100 cursor-pointer hover:border-brand-accent transition-all hover:shadow-md">
                 <div className="flex items-center justify-between mb-4">
                   <cat.icon className="w-8 h-8 text-gray-400 group-hover:text-brand-accent transition-colors" />
                   <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-brand-accent transition-colors opacity-0 group-hover:opacity-100" />
                 </div>
                 <h3 className="font-bold text-lg text-gray-900">{cat.label}</h3>
                 <p className="text-sm text-gray-500 mt-1">{cat.desc}</p>
               </div>
             ))}
           </div>
           
           <div className="mt-8 text-center sm:hidden">
             <Button variant="ghost" onClick={() => onNavigate(Page.TEMPLATES)}>
               View All Templates <ArrowRight className="ml-2 w-4 h-4" />
             </Button>
           </div>
        </div>
      </section>

      {/* Connected with Etsy */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-dark rounded-2xl overflow-hidden shadow-xl lg:grid lg:grid-cols-2">
            <div className="p-10 lg:p-16 flex flex-col justify-center">
              <div className="uppercase tracking-wide text-sm text-brand-accent font-semibold mb-2">Trusted Platform</div>
              <h2 className="text-3xl font-bold text-white mb-4">Shop Securely on Etsy</h2>
              <p className="text-gray-300 text-lg mb-8">
                All our digital templates are sold through our verified Etsy shop, ensuring secure payments, instant downloads, and buyer protection.
              </p>
              <div>
                <Button variant="primary" size="lg" onClick={() => window.open('https://menuds.etsy.com', '_blank')}>
                  Visit MenuDS on Etsy <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="relative h-64 lg:h-auto bg-gray-800">
               <img 
                 src="https://images.unsplash.com/photo-1464307555106-9df9b32cb396?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                 alt="Etsy Store Preview" 
                 className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white opacity-20">Etsy</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future App Teaser */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-semibold mb-6">
            Coming Soon
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            The Operating System for Your Restaurant
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            We are building MenuDS Manager. A simple, powerful app to manage orders, 
            send tickets to the kitchen, and track your daily success.
          </p>
          <form className="max-w-md mx-auto flex gap-2" onSubmit={(e) => { e.preventDefault(); alert('Thanks for joining!'); }}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-accent outline-none"
              required
            />
            <Button type="submit">Join Waitlist</Button>
          </form>
        </div>
      </section>

    </div>
  );
};