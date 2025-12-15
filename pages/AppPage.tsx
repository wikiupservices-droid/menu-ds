import React, { FormEvent } from 'react';
import { Button } from '../components/Button';
import { Input, Select } from '../components/Input';
import { Tablet, WifiOff, BarChart3, ChefHat, CheckCircle2 } from 'lucide-react';

export const AppPage: React.FC = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Thanks for your interest! We've added you to the waitlist.");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Intro */}
      <section className="bg-brand-dark text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-accent rounded-full opacity-10 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            The Missing Link in <br/>
            <span className="text-brand-accent">Restaurant Management</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            A simplified Point of Sale (POS) and Kitchen Display System (KDS) designed for small restaurants, coffee shops, and food trucks. No expensive hardware required.
          </p>
          <div className="flex justify-center">
            <Button size="lg" onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}>
              Join the Beta Waitlist
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-gray-900">Built for Speed & Reliability</h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { icon: Tablet, title: 'Smart POS', text: 'Take orders quickly on any tablet. Custom modifiers, table management, and instant syncing.' },
               { icon: ChefHat, title: 'Kitchen Display', text: 'Replace paper tickets. Orders appear instantly in the kitchen with color-coded timers.' },
               { icon: BarChart3, title: 'Daily Insights', text: 'Know your best sellers, peak hours, and daily revenue at a glance.' },
               { icon: WifiOff, title: 'Offline First', text: 'Internet down? No problem. Continue taking orders and sync when online.' }
             ].map((feature, idx) => (
               <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-brand-accent/30 transition-colors">
                 <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-brand-accent mb-6">
                   <feature.icon className="w-6 h-6" />
                 </div>
                 <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                 <p className="text-gray-600 leading-relaxed">{feature.text}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
             {/* Connector Line */}
             <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-gray-200 -z-10"></div>

             {[
               { step: '01', title: 'Set Up Menu', text: 'Import products, set prices, and add options in the web dashboard.' },
               { step: '02', title: 'Take Orders', text: 'Staff use the tablet app to punch in orders at the counter or table.' },
               { step: '03', title: 'Kitchen Preps', text: 'Chefs see orders immediately on the kitchen screen and mark as ready.' }
             ].map((item, idx) => (
               <div key={idx} className="flex flex-col items-center text-center bg-white p-4">
                 <div className="w-16 h-16 rounded-full bg-brand-dark text-white flex items-center justify-center text-2xl font-bold mb-6 border-4 border-white shadow-lg">
                   {item.step}
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                 <p className="text-gray-600">{item.text}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="py-24 bg-brand-dark text-white">
         <div className="max-w-2xl mx-auto px-4">
           <div className="text-center mb-10">
             <h2 className="text-3xl font-bold mb-4">Be the First to Know</h2>
             <p className="text-gray-400">Join our exclusive waiting list to get early access and special pricing when we launch.</p>
           </div>
           
           <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-2xl border border-gray-700 shadow-2xl space-y-4">
             <Input label="Full Name" placeholder="John Doe" className="bg-gray-700 border-gray-600 text-white focus:ring-brand-accent placeholder-gray-400" />
             <Input label="Email Address" type="email" placeholder="john@restaurant.com" className="bg-gray-700 border-gray-600 text-white focus:ring-brand-accent placeholder-gray-400" />
             <Select 
               label="Business Type" 
               options={[
                 {value: 'restaurant', label: 'Restaurant'},
                 {value: 'cafe', label: 'Coffee Shop'},
                 {value: 'foodtruck', label: 'Food Truck'},
                 {value: 'other', label: 'Other'}
               ]}
               className="bg-gray-700 border-gray-600 text-white focus:ring-brand-accent"
             />
             <div className="pt-2">
               <Button type="submit" fullWidth size="lg">Join Waitlist</Button>
             </div>
           </form>
         </div>
      </section>
    </div>
  );
};