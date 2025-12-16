import React, { useState } from 'react';
import { BlogPost } from '../types';
import { Button } from '../components/Button';
import { Calendar, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

const POSTS: BlogPost[] = [
  // --- Digital Menus ---
  { 
    id: '1', 
    category: 'Digital Menus',
    title: '15 Reasons Every Modern Restaurant Needs Digital Menu Boards', 
    summary: 'From instant price updates to scheduling happy hours automatically, discover why digital screens are replacing paper everywhere.', 
    date: 'Oct 24, 2023', 
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1542385508-c89b88496739?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p class="lead text-xl text-gray-600 mb-8">The restaurant industry is evolving rapidly. Gone are the days when a static paper menu was enough to capture a customer's attention. In today's fast-paced digital world, <strong>Digital Menu Boards</strong> have become the standard for modern food establishments, offering flexibility, engagement, and operational efficiency that print simply cannot match.</p>

      <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">Why the Shift to Digital?</h2>
      <p class="mb-6">It's not just about looking "tech-savvy." It's about operational efficiency and increasing your bottom line. A digital menu is a living, breathing part of your restaurant's ecosystem. Here are 15 compelling reasons why you should make the switch today.</p>

      <h3 class="text-2xl font-bold text-gray-800 mt-8 mb-4">1. Instant Price Updates</h3>
      <p class="mb-4 text-gray-700">Ingredient costs fluctuate weekly. With paper menus, you either eat the cost or pay for reprints. With digital menus, you can update the price of your avocado toast or ribeye steak in seconds across all screens, protecting your margins immediately.</p>

      <h3 class="text-2xl font-bold text-gray-800 mt-8 mb-4">2. Automated Dayparting</h3>
      <p class="mb-4 text-gray-700">Stop manually flipping boards between breakfast, lunch, and dinner. Digital systems allow you to schedule menus to change automatically at specific times, ensuring customers only see what is currently available.</p>

      <h3 class="text-2xl font-bold text-gray-800 mt-8 mb-4">3. Manage Sold-Out Items Instantly</h3>
      <p class="mb-4 text-gray-700">Nothing frustrates a customer more than ordering a dish only to be told it's "86'd." With a digital system, you can remove sold-out items from the screen instantly, preventing disappointment and speeding up ordering.</p>

      <h3 class="text-2xl font-bold text-gray-800 mt-8 mb-4">4. High-Impact Visuals</h3>
      <p class="mb-4 text-gray-700">Humans eat with their eyes. High-definition images of your signature burgers or cocktails can trigger appetite and impulse buys far better than text descriptions. Motion graphics can further draw attention to high-margin specials.</p>

      <h3 class="text-2xl font-bold text-gray-800 mt-8 mb-4">5. Reduce Perceived Wait Times</h3>
      <p class="mb-4 text-gray-700">Digital signage can double as entertainment. Displaying engaging content, chef videos, or community news reduces the perceived wait time for customers standing in line.</p>

      <h3 class="text-2xl font-bold text-gray-800 mt-8 mb-4">6. Promote High-Margin Items</h3>
      <p class="mb-4 text-gray-700">Use "Menu Engineering" to highlight items with the highest profit margins. A subtle animation or a "Chef's Choice" badge on a digital screen steers customers toward the dishes you want to sell most.</p>

      <h3 class="text-2xl font-bold text-gray-800 mt-8 mb-4">7. Eliminating Printing Costs</h3>
      <p class="mb-4 text-gray-700">While the initial hardware investment exists, digital menus eliminate the recurring cost of designing, printing, and laminating paper menus every time you change a dish or price.</p>

      <h3 class="text-2xl font-bold text-gray-800 mt-8 mb-4">8. Remote Management</h3>
      <p class="mb-4 text-gray-700">If you own a franchise or multiple locations, you can manage all menus from a single laptop. Push a new seasonal promotion to all 10 locations with one click.</p>

      <h3 class="text-2xl font-bold text-gray-800 mt-8 mb-4">9. Better Allergen Compliance</h3>
      <p class="mb-4 text-gray-700">Easily add clear icons for gluten-free, vegan, or nut-free options. You can also display a calorie count disclaimer in the footer without cluttering the main design, ensuring compliance with local laws.</p>

      <h3 class="text-2xl font-bold text-gray-800 mt-8 mb-4">10. Seamless Upselling</h3>
      <p class="mb-4 text-gray-700">Digital boards can be programmed to suggest pairings. If it's lunch time, show a "Make it a Combo" prompt. If it's evening, highlight your wine list or dessert selection.</p>

      <h3 class="text-2xl font-bold text-gray-800 mt-8 mb-4">11. Eco-Friendly Operation</h3>
      <p class="mb-4 text-gray-700">Reducing paper waste aligns with modern sustainability goals. Customers appreciate businesses that take steps to reduce their environmental footprint.</p>

      <h3 class="text-2xl font-bold text-gray-800 mt-8 mb-4">12. Modern Brand Image</h3>
      <p class="mb-4 text-gray-700">Sleek screens signal that your establishment is modern, clean, and efficient. It elevates the perceived value of the dining experience before the food even arrives.</p>

      <h3 class="text-2xl font-bold text-gray-800 mt-8 mb-4">13. Test New Items Easily</h3>
      <p class="mb-4 text-gray-700">Want to try a new "Spicy Sriracha Burger" for a week? Add it to the digital board instantly. If it doesn't sell, remove it without any printing waste.</p>

      <h3 class="text-2xl font-bold text-gray-800 mt-8 mb-4">14. Emergency Messaging</h3>
      <p class="mb-4 text-gray-700">In the event of an emergency or simply a sudden closure due to weather, screens can display important messages to customers and staff quickly.</p>

      <h3 class="text-2xl font-bold text-gray-800 mt-8 mb-4">15. Integration with POS</h3>
      <p class="mb-4 text-gray-700">Advanced systems integrate directly with your Point of Sale. When you ring up the last slice of pie, the digital menu automatically marks it as sold out.</p>

      <div class="bg-indigo-50 p-8 rounded-xl mt-12 border border-indigo-100">
        <h4 class="text-xl font-bold text-brand-dark mb-3">Ready to upgrade your restaurant?</h4>
        <p class="mb-6 text-gray-600">You don't need expensive software to get started. Check out our collection of professional Digital Menu Board templates that work with standard USB TVs.</p>
        <a href="https://menuds.etsy.com" target="_blank" class="inline-flex items-center justify-center bg-brand-accent text-white px-8 py-3 rounded-lg font-bold hover:bg-brand-accentHover transition-colors">Browse Templates</a>
      </div>
    `
  },
  {
    id: 'dm-2',
    category: 'Digital Menus',
    title: 'How TV Menu Screens Can Boost Your Restaurant Sales by 20%',
    summary: 'Learn the science behind motion graphics and dynamic content that triggers impulse buys.',
    date: 'Oct 22, 2023',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    content: ''
  },
  {
    id: 'dm-3',
    category: 'Digital Menus',
    title: 'Digital Menu Boards vs Paper Menus: What Actually Increases Profit?',
    summary: 'A direct cost-benefit analysis comparing traditional printing costs with digital infrastructure.',
    date: 'Oct 18, 2023',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&w=1200&q=80',
    content: ''
  },
  {
    id: 'dm-4',
    category: 'Digital Menus',
    title: 'The Ultimate Guide to Choosing the Best TV for Your Restaurant Menu Board',
    summary: 'Consumer TVs vs Commercial Displays: Brightness, runtime hours, and glare handling explained.',
    date: 'Oct 12, 2023',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=1200&q=80',
    content: ''
  },
  {
    id: 'dm-5',
    category: 'Digital Menus',
    title: 'How to Structure Content on Digital Menu Boards to Increase Average Ticket Size',
    summary: 'Strategic layout tips to guide customer eyes to your most profitable combos and add-ons.',
    date: 'Oct 08, 2023',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
    content: ''
  },
  {
    id: 'dm-6',
    category: 'Digital Menus',
    title: 'The Most Common Digital Menu Board Mistakes (And How to Fix Them)',
    summary: 'Avoid clutter, small fonts, and poor contrast. See examples of bad design and how to correct them.',
    date: 'Oct 05, 2023',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80',
    content: ''
  },
  {
    id: 'dm-7',
    category: 'Digital Menus',
    title: '10 Creative Ways to Use Digital Menus for Daily Specials and Happy Hour',
    summary: 'Keep your content fresh and exciting with scheduled promotions that run automatically.',
    date: 'Sep 30, 2023',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80',
    content: ''
  },
  {
    id: 'dm-8',
    category: 'Digital Menus',
    title: 'Are Digital Menu Boards Worth It for Small Restaurants and Food Trucks?',
    summary: 'Analyzing ROI for smaller footprints. Can you afford to switch, or can you afford not to?',
    date: 'Sep 25, 2023',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1565123409695-74283127b223?auto=format&fit=crop&w=1200&q=80',
    content: ''
  },

  // --- Design & UX ---
  { 
    id: '3', 
    category: 'Design & UX',
    title: 'Restaurant Menu Design That Sells: Psychology, Layout, and Visual Hierarchy', 
    summary: 'How to use the "Golden Triangle" and strategic eye movements to guide your customers to high-margin dishes.', 
    date: 'Oct 15, 2023', 
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p class="lead text-xl text-gray-600 mb-8">Your menu is your primary sales tool. It's the one piece of advertising that 100% of your guests will read. Yet, many restaurants treat it as a simple list of items and prices. This is a mistake.</p>

      <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">The Psychology of Menu Engineering</h2>
      <p class="mb-6">Menu engineering is the study of how the design and organization of a menu influences what customers order. By applying a few psychological tricks, you can steer customers toward your most profitable dishes.</p>

      <div class="space-y-8 mt-8">
        <div class="border-l-4 border-brand-accent pl-6">
          <h3 class="text-2xl font-bold text-gray-800 mb-2">1. The Golden Triangle</h3>
          <p class="text-gray-700">Eye-tracking studies show eyes move to the <strong>Middle</strong>, then <strong>Top Right</strong>, then <strong>Top Left</strong>. This is where your highest margin items (like your signature steak or seafood platter) should live.</p>
        </div>

        <div class="border-l-4 border-gray-300 pl-6 hover:border-brand-accent transition-colors">
          <h3 class="text-2xl font-bold text-gray-800 mb-2">2. Remove Currency Signs</h3>
          <p class="text-gray-700">Seeing a dollar sign ($) reminds customers of the "pain of paying." Research shows guests spend more when you just use numbers (e.g., "14" instead of "$14.00").</p>
        </div>

        <div class="border-l-4 border-gray-300 pl-6 hover:border-brand-accent transition-colors">
          <h3 class="text-2xl font-bold text-gray-800 mb-2">3. Decoy Pricing (Anchoring)</h3>
          <p class="text-gray-700">Place a $45 surf-and-turf next to a $25 steak. The $25 steak suddenly looks like a bargain, increasing its sales volume.</p>
        </div>

        <div class="border-l-4 border-gray-300 pl-6 hover:border-brand-accent transition-colors">
          <h3 class="text-2xl font-bold text-gray-800 mb-2">4. The Paradox of Choice</h3>
          <p class="text-gray-700">Too many options cause anxiety. Limit each section (Appetizers, Mains) to 7 items or fewer to prevent "analysis paralysis."</p>
        </div>
      </div>

      <h3 class="text-2xl font-bold text-gray-800 mt-12 mb-4">Visual Hierarchy & Language</h3>
      <p class="mb-4 text-gray-700">Use boxes, shading, or negative space to highlight specific items. But be careful: if everything is highlighted, nothing is.</p>
      <p class="mb-8 text-gray-700"><strong>Descriptive Language:</strong> Don't just write "Cheeseburger." Write "Grass-fed beef patty with aged cheddar and house-made aioli." This can increase sales by 27%.</p>

      <div class="bg-indigo-50 p-8 rounded-xl mt-12 border border-indigo-100">
        <h4 class="text-xl font-bold text-brand-dark mb-3">Get a head start</h4>
        <p class="mb-6 text-gray-600">Don't start from scratch. Our Etsy shop features scientifically designed menu templates that follow these exact principles.</p>
        <a href="https://menuds.etsy.com" target="_blank" class="inline-flex items-center justify-center bg-brand-accent text-white px-8 py-3 rounded-lg font-bold hover:bg-brand-accentHover transition-colors shadow-lg shadow-orange-500/30">
          Shop Menu Templates
        </a>
      </div>
    `
  },
  {
    id: 'dux-2',
    category: 'Design & UX',
    title: 'Menu Engineering 101: How to Arrange Your Dishes to Maximize Profit',
    summary: 'Classifying your dishes into Stars, Plowhorses, Puzzles, and Dogs to optimize your menu mix.',
    date: 'Oct 11, 2023',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p class="lead text-xl text-gray-600 mb-8">Menu engineering is the science of optimizing your menu to maximize profit. It involves analyzing every dish based on two criteria: popularity and profitability.</p>

      <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">The Menu Matrix</h2>
      <p class="mb-6">To start, you need to export your sales data and food costs. Imagine a graph where the X-axis is <strong>Profitability</strong> (High vs. Low Contribution Margin) and the Y-axis is <strong>Popularity</strong> (High vs. Low Sales Volume). This creates four categories of dishes:</p>

      <div class="grid md:grid-cols-2 gap-6 mb-12">
        <div class="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
          <h3 class="text-xl font-bold text-yellow-800 mb-2">★ Stars</h3>
          <p class="text-sm font-bold uppercase text-yellow-600 mb-2">High Profit / High Popularity</p>
          <p class="text-gray-700">These are your best dishes. Do not touch the recipe. Promote them heavily on your digital boards and social media. They are the backbone of your business.</p>
        </div>
        <div class="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 class="text-xl font-bold text-blue-800 mb-2">♞ Plowhorses</h3>
          <p class="text-sm font-bold uppercase text-blue-600 mb-2">Low Profit / High Popularity</p>
          <p class="text-gray-700">Customers love these, but they don't make you much money (e.g., a steak with a high food cost). Try to increase the price slightly or reduce the portion size to improve margin.</p>
        </div>
        <div class="bg-purple-50 p-6 rounded-lg border border-purple-200">
          <h3 class="text-xl font-bold text-purple-800 mb-2">? Puzzles</h3>
          <p class="text-sm font-bold uppercase text-purple-600 mb-2">High Profit / Low Popularity</p>
          <p class="text-gray-700">These make great money but nobody orders them. They need better marketing. Rename them, take a better photo, or move them to the "Sweet Spot" on your menu.</p>
        </div>
        <div class="bg-red-50 p-6 rounded-lg border border-red-200">
          <h3 class="text-xl font-bold text-red-800 mb-2">🐕 Dogs</h3>
          <p class="text-sm font-bold uppercase text-red-600 mb-2">Low Profit / Low Popularity</p>
          <p class="text-gray-700">They crowd your kitchen, waste inventory, and confuse customers. Remove them from the menu immediately.</p>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">How to Apply This to Digital Menus</h2>
      <p class="mb-6">Once you have categorized your dishes, use your digital menu board to execute your strategy.</p>
      <ul class="list-disc pl-6 space-y-4 mb-8 text-gray-700">
        <li><strong>Highlight Stars:</strong> Use the largest images and animations for your Star items.</li>
        <li><strong>Fix Puzzles:</strong> Run a "Chef's Special" promotion on your screens for a Puzzle item to see if visibility improves sales.</li>
        <li><strong>Hide Dogs:</strong> With digital menus, you can delete a Dog item instantly. You don't have to wait for a reprint.</li>
      </ul>

      <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusion</h2>
      <p class="mb-6">Menu engineering is not a one-time task. It is a continuous cycle of analyzing, adjusting, and testing. Digital tools make this process fast and effective.</p>
    `
  },
  {
    id: 'dux-3',
    category: 'Design & UX',
    title: 'The Best Colors for Restaurant Menus: Burgers, Pizza, Coffee Shops, and More',
    summary: 'Color psychology in food marketing. Why red stimulates appetite and green implies health.',
    date: 'Oct 09, 2023',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80',
    content: ''
  },
  {
    id: 'dux-4',
    category: 'Design & UX',
    title: '10 Menu Design Mistakes That Quietly Kill Your Sales',
    summary: 'From poor alignment to lack of descriptions, identify the subtle errors hurting your revenue.',
    date: 'Oct 06, 2023',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1200&q=80',
    content: ''
  },
  {
    id: 'dux-5',
    category: 'Design & UX',
    title: 'How to Write Mouth-Watering Menu Descriptions That Make Guests Order Faster',
    summary: 'Using sensory words and storytelling to make your dishes irresistible.',
    date: 'Oct 03, 2023',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80',
    content: ''
  },
  {
    id: 'dux-6',
    category: 'Design & UX',
    title: 'TV Menus vs Printed Menus: How Your Layout Should Change on Screen',
    summary: 'You cannot just put a PDF on a TV. Learn the rules of digital legibility and distance reading.',
    date: 'Sep 29, 2023',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=1200&q=80',
    content: ''
  },
  {
    id: 'dux-7',
    category: 'Design & UX',
    title: 'Designing Accessible Menus for Seniors, Kids, and Guests With Low Vision',
    summary: 'Inclusive design practices that ensure everyone can read and order comfortably.',
    date: 'Sep 26, 2023',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?auto=format&fit=crop&w=1200&q=80',
    content: ''
  },
  {
    id: 'dux-8',
    category: 'Design & UX',
    title: 'How to Use Icons in Your Menu to Communicate Diet, Spiciness, and Allergens',
    summary: 'Simplify your layout with universal symbols for Gluten-Free, Vegan, and Spicy items.',
    date: 'Sep 22, 2023',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80',
    content: ''
  },

  // --- Management & KPIs ---
  { 
    id: '2', 
    category: 'Management & KPIs',
    title: 'The Essential KPIs Every Restaurant Owner Should Track Daily', 
    summary: 'Revenue is vanity, profit is sanity. Learn how to track Prime Cost, CoGS, and Labor Cost to keep your restaurant healthy.', 
    date: 'Oct 20, 2023', 
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1554224155-6d2650eb6db7?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p class="lead text-xl text-gray-600 mb-8">Running a restaurant is a game of pennies. With tight margins and high competition, "going with your gut" is no longer a viable strategy. Successful restaurateurs are data-driven. They know their numbers inside and out.</p>

      <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">Revenue is Vanity, Profit is Sanity</h2>
      <p class="mb-6">It’s easy to get excited about a busy Friday night, but if your costs are out of control, that revenue means nothing. Here are the essential Key Performance Indicators (KPIs) you need to track every single day.</p>

      <div class="grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
           <h3 class="text-xl font-bold text-brand-accent mb-2">1. Prime Cost</h3>
           <p class="text-gray-700"><strong>Formula:</strong> CoGS + Total Labor Cost</p>
           <p class="text-sm text-gray-500 mt-2">Ideally under 60%. This is the most critical metric for profitability.</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
           <h3 class="text-xl font-bold text-brand-accent mb-2">2. CoGS</h3>
           <p class="text-gray-700"><strong>Formula:</strong> Beginning Inventory + Purchases - Ending Inventory</p>
           <p class="text-sm text-gray-500 mt-2">Watch for waste and theft.</p>
        </div>
      </div>

      <h3 class="text-2xl font-bold text-gray-800 mt-8 mb-4">Other Critical Metrics</h3>
      <ol class="list-decimal pl-6 space-y-6 mb-8 text-gray-700">
        <li>
          <strong>Labor Cost Percentage:</strong> Labor is often your biggest controllable expense. Track your labor as a percentage of sales. If your target is 25% and you're running at 35% on a slow Tuesday, send staff home early.
        </li>
        <li>
          <strong>RevPASH (Revenue Per Available Seat Hour):</strong> Calculated by dividing revenue by seat hours. Improving this might mean turning tables faster or optimizing your floor plan.
        </li>
        <li>
          <strong>Table Turnover Rate:</strong> How quickly can you serve a party, clean the table, and seat the next one? Increasing turnover by 10 minutes can add an entire seating cycle.
        </li>
        <li>
          <strong>Average Ticket Size:</strong> How much does the average guest spend? If this drops, train staff on upselling or redesign your menu.
        </li>
        <li>
          <strong>Employee Turnover Rate:</strong> High turnover is a sign of poor management or culture. Hiring is expensive; retention is profitable.
        </li>
      </ol>

      <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">How to Track Without Stress</h2>
      <p class="mb-6">You don't need a degree in accounting. Modern POS systems calculate many of these numbers automatically. The key is consistency. Look at your reports every morning with your coffee.</p>

      <div class="bg-gray-800 text-white p-8 rounded-xl mt-12">
        <h4 class="text-xl font-bold mb-3">Need better tools?</h4>
        <p class="mb-6 text-gray-300">We are building a simple, affordable Restaurant OS to help you track these metrics effortlessly.</p>
        <button class="bg-brand-accent text-white px-8 py-3 rounded-lg font-bold hover:bg-brand-accentHover transition-colors" onclick="window.location.hash = 'app'">
          Join Waitlist
        </button>
      </div>
    `
  },
  {
    id: 'kpi-2',
    category: 'Management & KPIs',
    title: 'How a Smart Menu Design Helps You Understand Which Dishes Really Make Money',
    summary: 'Analyzing contribution margin vs. sales volume to make informed decisions about your menu mix.',
    date: 'Oct 17, 2023',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=1200&q=80',
    content: ''
  },
  {
    id: 'kpi-3',
    category: 'Management & KPIs',
    title: 'A Simple Guide to Food Cost and Labor Cost for Small Restaurant Owners',
    summary: 'Breaking down complex accounting terms into actionable daily habits for independent owners.',
    date: 'Oct 14, 2023',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p class="lead text-xl text-gray-600 mb-8">If you ask most new restaurant owners what their most important metric is, they will likely say "Sales." And while sales are important, they are simply a vanity metric if your costs are eating up every dollar you bring in.</p>
      
      <p class="mb-6 text-gray-700">To survive in the hospitality industry—where profit margins often hover between 3% and 5%—you must master two critical numbers: <strong>Food Cost</strong> and <strong>Labor Cost</strong>. Together, these make up your <strong>Prime Cost</strong>, the heartbeat of your restaurant's financial health.</p>

      <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">1. Understanding Food Cost Percentage</h2>
      <p class="mb-4 text-gray-700">Food cost is the ratio of your cost of ingredients to the revenue those ingredients generate. It doesn't include napkins, cleaning supplies, or labor—just the food (and beverage, if you track them together).</p>
      
      <div class="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
        <h4 class="text-lg font-bold text-gray-900 mb-2">The Formula</h4>
        <p class="font-mono text-gray-800 bg-white p-3 rounded border border-gray-200 inline-block mb-3">
          (Opening Inventory + Purchases - Closing Inventory) ÷ Food Sales
        </p>
        <p class="text-sm text-gray-600">
          <strong>Example:</strong> You start the week with $5,000 in inventory. You buy $2,000 more. At the end of the week, you have $4,000 left. You sold $10,000 worth of food.<br/>
          <em>($5,000 + $2,000 - $4,000) ÷ $10,000 = 0.30 or <strong>30%</strong></em>.
        </p>
      </div>

      <h3 class="text-2xl font-bold text-gray-800 mt-8 mb-4">What is a "Good" Food Cost?</h3>
      <p class="mb-6 text-gray-700">Most profitable restaurants aim for a food cost between <strong>28% and 35%</strong>. However, this varies by concept. A steakhouse might run at 40% (high cost of goods) but make up for it in dollar value, while a pizzeria might run at 20%.</p>

      <h3 class="text-2xl font-bold text-gray-800 mt-8 mb-4">How to Lower Food Cost</h3>
      <ul class="list-disc pl-6 space-y-3 mb-8 text-gray-700">
        <li><strong>Reduce Waste:</strong> Track everything that goes in the bin. If you throw away 5 burgers a night, find out why.</li>
        <li><strong>Portion Control:</strong> Use scales and scoops. An extra ounce of cheese on every pizza costs thousands per year.</li>
        <li><strong>Menu Pricing:</strong> If ingredient prices soar (like eggs or avocados), you must adjust your menu prices instantly. (<em>Hint: Digital menus make this easy</em>).</li>
        <li><strong>Theft Prevention:</strong> Lock expensive inventory like liquor and premium meats.</li>
      </ul>

      <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">2. Understanding Labor Cost Percentage</h2>
      <p class="mb-4 text-gray-700">Labor cost isn't just hourly wages. It includes salaries, payroll taxes, benefits, and bonuses. It is often the largest expense for a restaurant.</p>

      <div class="bg-green-50 border-l-4 border-green-500 p-6 my-8">
        <h4 class="text-lg font-bold text-gray-900 mb-2">The Formula</h4>
        <p class="font-mono text-gray-800 bg-white p-3 rounded border border-gray-200 inline-block">
          Total Labor Cost ÷ Total Sales
        </p>
      </div>

      <p class="mb-6 text-gray-700"><strong>Target Range:</strong> A healthy restaurant typically runs labor between <strong>25% and 35%</strong>. Fast food (QSR) aims lower, while fine dining aims higher due to service standards.</p>

      <h3 class="text-2xl font-bold text-gray-800 mt-8 mb-4">Tips for Managing Labor</h3>
      <ul class="list-disc pl-6 space-y-3 mb-8 text-gray-700">
        <li><strong>Smart Scheduling:</strong> Don't schedule based on "gut feeling." Look at your sales data from last year to predict how many staff you need.</li>
        <li><strong>Cross-Training:</strong> Train your dishwasher to do prep; train your host to bus tables. Flexibility saves money during slow hours.</li>
        <li><strong>Cut Early:</strong> If it's a slow Tuesday, don't keep 5 servers on the floor "just in case." Send people home early.</li>
      </ul>

      <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">The Golden Rule: Prime Cost</h2>
      <p class="mb-6 text-gray-700">When you add Food Cost + Labor Cost, you get <strong>Prime Cost</strong>. This number should generally be <strong>under 60%</strong> of your total sales.</p>
      
      <div class="flex flex-col md:flex-row gap-4 my-8">
         <div class="flex-1 bg-gray-100 p-6 rounded-lg text-center">
            <span class="block text-4xl font-bold text-red-500 mb-2">65%+</span>
            <span class="text-gray-600 font-medium">Danger Zone</span>
            <p class="text-xs text-gray-500 mt-2">You are likely losing money or barely breaking even.</p>
         </div>
         <div class="flex-1 bg-gray-100 p-6 rounded-lg text-center">
            <span class="block text-4xl font-bold text-brand-accent mb-2">60%</span>
            <span class="text-gray-600 font-medium">Healthy</span>
            <p class="text-xs text-gray-500 mt-2">Sustainable profit margins.</p>
         </div>
         <div class="flex-1 bg-gray-100 p-6 rounded-lg text-center">
            <span class="block text-4xl font-bold text-green-600 mb-2">55%</span>
            <span class="text-gray-600 font-medium">Excellent</span>
            <p class="text-xs text-gray-500 mt-2">High profitability (or you're understaffed).</p>
         </div>
      </div>

      <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusion</h2>
      <p class="mb-6 text-gray-700">You cannot fix what you do not measure. Start tracking these two numbers every single week. It might seem tedious at first, but it is the only way to move from "surviving" to "thriving."</p>

      <div class="bg-brand-dark text-white p-8 rounded-xl mt-12 shadow-xl">
        <h4 class="text-xl font-bold mb-3 text-brand-accent">Need to update prices fast?</h4>
        <p class="mb-6 text-gray-300">If your food costs are rising, you need to adjust your menu prices immediately. Printed menus make this expensive. Switch to <strong>Digital Menu Boards</strong> today and update prices in seconds.</p>
        <div class="flex flex-col sm:flex-row gap-4">
            <a href="https://menuds.etsy.com" target="_blank" class="flex-1 bg-brand-accent text-white px-6 py-3 rounded-lg font-bold hover:bg-brand-accentHover transition-colors text-center">
              Shop Templates
            </a>
            <button onclick="window.location.hash = 'app'" class="flex-1 border border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors">
              Join App Waitlist
            </button>
        </div>
      </div>
    `
  },
  {
    id: 'kpi-4',
    category: 'Management & KPIs',
    title: 'Why 1 in 3 Restaurants Fails: The Numbers Owners Ignore Until It’s Too Late',
    summary: 'A deep dive into the financial pitfalls of the restaurant industry and how to avoid becoming a statistic.',
    date: 'Oct 10, 2023',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1507914372368-b2b00361183c?auto=format&fit=crop&w=1200&q=80',
    content: ''
  },
  {
    id: 'kpi-5',
    category: 'Management & KPIs',
    title: 'From Menu to Metrics: Turning Your Menu Data Into Daily Action Plans',
    summary: 'How to use POS data to forecast prep levels and reduce food waste.',
    date: 'Oct 07, 2023',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    content: ''
  },
  {
    id: 'kpi-6',
    category: 'Management & KPIs',
    title: 'How to Build a 5-Minute End-of-Day Report for Your Restaurant Team',
    summary: 'Keep everyone aligned with a simple checklist and reporting structure that takes minutes.',
    date: 'Oct 02, 2023',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    content: ''
  },

  // --- Marketing ---
  {
    id: 'mkt-1',
    category: 'Marketing',
    title: 'Turn Your Menu Into a Sales Machine: Upselling and Cross-Selling With Design',
    summary: 'Practical techniques to encourage customers to add that extra side or drink through persuasive visual cues.',
    date: 'Sep 28, 2023',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
    content: ''
  },
  {
    id: 'mkt-2',
    category: 'Marketing',
    title: '7 Offer Types You Can Run Using Only Your Digital Menu Boards',
    summary: 'Flash sales, BOGO, combo upgrades, and more—executed instantly on screen.',
    date: 'Sep 24, 2023',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p class="lead text-xl text-gray-600 mb-8">Static printed menus limit your marketing creativity. You can't print a new flyer every time it rains or whenever you have too much salmon in the fridge. With digital menu boards, you can run dynamic, time-sensitive offers that drive urgency and increase ticket size instantly.</p>

      <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">1. The "Flash Sale" (Happy Hour)</h2>
      <p class="mb-6">Create a screen that automatically triggers at 4:00 PM. "Half-price appetizers until 6:00 PM." The visual change in the room signals to guests that it's time to order. Digital menus allow you to automate this so you never forget to put the sign out.</p>

      <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-6">2. The "Rainy Day" Comfort</h2>
      <p class="mb-6">Is it pouring rain outside? Switch your featured image to a steaming bowl of hot soup or a warm coffee. Match the offer to the customer's current mood. This emotional connection increases conversion rates significantly.</p>

      <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-6">3. The Inventory Cleaner</h2>
      <p class="mb-6">Have too much fish that needs to be sold before the weekend? Create a "Chef's Special" graphic and push it to all screens immediately. Run a 20% discount to move the product quickly and recover costs instead of throwing it away.</p>

      <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-6">4. The "Combo Upgrade"</h2>
      <p class="mb-6">Instead of just listing a burger, show a high-res video of the burger <em>with</em> fries and a shake. "Add a shake for just $2." Visual suggestions work better than verbal upsells because they stimulate appetite directly.</p>

      <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-6">5. Limited Time Offers (LTOs)</h2>
      <p class="mb-6">Create scarcity. "Available only this October." Pumpkin spice lattes are the classic example. Use LTOs to test new concepts without committing to a permanent menu change. If it sells well, keep it. If not, delete the slide.</p>

      <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-6">6. The "Social Proof" Highlight</h2>
      <p class="mb-6">Add a "Best Seller" or "Local Favorite" badge to your most profitable dishes. New customers often suffer from decision paralysis; help them choose what makes you money. Digital stickers can be added or removed in seconds.</p>

      <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-6">7. QR Code Exclusives</h2>
      <p class="mb-6">Display a large QR code on the screen: "Scan to join our VIP club and get a free dessert right now." This builds your email list for future marketing, turning a one-time guest into a repeat customer.</p>
    `
  },
  {
    id: 'mkt-3',
    category: 'Marketing',
    title: 'How to Keep Your In-House Menu, Website Menu, and Instagram Menu in Sync',
    summary: 'Managing omnichannel presence without going crazy. Tools and tips for consistency.',
    date: 'Sep 20, 2023',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80',
    content: ''
  },
  {
    id: 'mkt-4',
    category: 'Marketing',
    title: 'Using Customer Reviews to Improve Your Menu and Increase Repeat Visits',
    summary: 'How to mine Yelp and Google Reviews for feedback on your dishes and pricing.',
    date: 'Sep 16, 2023',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1512428559087-560fa5ce7d02?auto=format&fit=crop&w=1200&q=80',
    content: ''
  },
  {
    id: 'mkt-5',
    category: 'Marketing',
    title: 'Peak Hours vs Slow Hours: What to Show on Your Menu Screen and When',
    summary: 'Dynamic content strategies: speed up service during lunch rush, encourage lingering during dinner.',
    date: 'Sep 12, 2023',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    content: ''
  },

  // --- Tech & Systems ---
  { 
    id: '4', 
    category: 'Tech & Systems',
    title: 'What Is a Kitchen Display System (KDS) and How Does It Transform Your Back of House?', 
    summary: 'Stop losing tickets and shouting orders. A KDS synchronizes your front and back of house for seamless operations.', 
    date: 'Oct 10, 2023', 
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p class="lead text-xl text-gray-600 mb-8">The sound of a ticket printer is the heartbeat of a traditional kitchen. But what happens when the printer jams? Or a ticket falls on the greasy floor? Or the chef simply can't read the server's handwriting? Enter the <strong>Kitchen Display System (KDS)</strong>.</p>

      <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">What is a KDS?</h2>
      <p class="mb-6">A KDS is a digital screen (usually a tablet or monitor) placed in the kitchen that replaces paper tickets. It connects directly to your POS system. When a server enters an order, it appears instantly on the KDS.</p>

      <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">Top 5 Benefits of a KDS</h2>
      
      <div class="space-y-6 mb-12">
        <div class="flex items-start">
          <div class="flex-shrink-0 h-8 w-8 rounded-full bg-brand-accent text-white flex items-center justify-center font-bold">1</div>
          <div class="ml-4">
            <h4 class="text-lg font-bold text-gray-900">Accuracy and Clarity</h4>
            <p class="text-gray-600">No more deciphering handwriting. Modifications (like "No Onions") are highlighted in bold colors so they can't be missed.</p>
          </div>
        </div>
        <div class="flex items-start">
          <div class="flex-shrink-0 h-8 w-8 rounded-full bg-brand-accent text-white flex items-center justify-center font-bold">2</div>
          <div class="ml-4">
            <h4 class="text-lg font-bold text-gray-900">Timing Management</h4>
            <p class="text-gray-600">Tickets change color from green to red as time passes, alerting the chef to prioritize lagging orders.</p>
          </div>
        </div>
        <div class="flex items-start">
          <div class="flex-shrink-0 h-8 w-8 rounded-full bg-brand-accent text-white flex items-center justify-center font-bold">3</div>
          <div class="ml-4">
            <h4 class="text-lg font-bold text-gray-900">Cost Savings</h4>
            <p class="text-gray-600">Eliminate expensive, non-recyclable thermal paper rolls.</p>
          </div>
        </div>
        <div class="flex items-start">
          <div class="flex-shrink-0 h-8 w-8 rounded-full bg-brand-accent text-white flex items-center justify-center font-bold">4</div>
          <div class="ml-4">
            <h4 class="text-lg font-bold text-gray-900">Data and Reporting</h4>
            <p class="text-gray-600">Track average prep time per dish to identify bottlenecks in your kitchen line.</p>
          </div>
        </div>
        <div class="flex items-start">
          <div class="flex-shrink-0 h-8 w-8 rounded-full bg-brand-accent text-white flex items-center justify-center font-bold">5</div>
          <div class="ml-4">
            <h4 class="text-lg font-bold text-gray-900">Integrated Workflow</h4>
            <p class="text-gray-600">Notify servers instantly when an order is ready.</p>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">The Future of Your Kitchen</h2>
      <p class="mb-6">Change is scary, but modern KDS interfaces are intuitive. If you want to scale or simply have a peaceful dinner rush, a KDS is not a luxury; it's a necessity.</p>
      
      <div class="bg-gray-800 text-white p-8 rounded-xl mt-12">
        <h4 class="text-xl font-bold mb-3">Coming Soon: MenuDS Manager</h4>
        <p class="mb-6 text-gray-300">Our upcoming app includes a built-in, easy-to-use KDS that runs on affordable Android tablets. Don't miss out.</p>
        <button class="bg-brand-accent text-white px-8 py-3 rounded-lg font-bold hover:bg-brand-accentHover transition-colors" onclick="window.location.hash = 'app'">
          Join the Waitlist
        </button>
      </div>
    `
  },
  {
    id: 'tech-2',
    category: 'Tech & Systems',
    title: 'Why Every Modern Restaurant Needs an Integrated Order Management System',
    summary: 'The hidden costs of disconnected systems: inventory errors, reporting headaches, and lost data.',
    date: 'Oct 04, 2023',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p class="lead text-xl text-gray-600 mb-8">Walk into any busy takeout spot on a Friday night, and you might see the "Tablet Tower"—three or four different tablets for different delivery apps (UberEats, DoorDash, etc.), plus a main POS system. Staff are frantically typing orders from one screen to another.</p>

      <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">The "Tablet Hell" Problem</h2>
      <p class="mb-6">Disconnection is expensive. If you have three different systems that don't talk to each other, you are prone to error. Staff have to manually re-enter delivery orders into the kitchen printer. This leads to mistakes (forgotten modifiers), kitchen confusion, and incorrect accounting at the end of the night.</p>

      <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">The Solution: Integration</h2>
      <p class="mb-6">An integrated Restaurant OS aggregates all these channels into one screen. Here is why you need it:</p>

      <ul class="list-disc pl-6 space-y-4 mb-8 text-gray-700">
        <li><strong>Single Source of Truth:</strong> One menu to manage. Update a price once in your system, and it pushes to your POS, your website, and delivery apps simultaneously.</li>
        <li><strong>Consolidated Reporting:</strong> See your total revenue in one report, not five different spreadsheets. You need to know your <em>total</em> food cost, not just your dine-in food cost.</li>
        <li><strong>Inventory Sync:</strong> When you sell a steak on DoorDash, your inventory system should know instantly so you don't oversell it to a walk-in guest later that night.</li>
        <li><strong>Kitchen Efficiency:</strong> All tickets, regardless of source, print or display on the KDS in a standardized format. No more reading "special instructions" from different receipt layouts.</li>
      </ul>

      <div class="bg-brand-dark text-white p-8 rounded-xl mt-12">
        <h4 class="text-xl font-bold mb-3">Stop the chaos.</h4>
        <p class="mb-6 text-gray-300">MenuDS Manager is being built to solve exactly this problem. Centralize your orders and regain your sanity.</p>
        <button class="bg-brand-accent text-white px-8 py-3 rounded-lg font-bold hover:bg-brand-accentHover transition-colors" onclick="window.location.hash = 'app'">
          Join Waitlist
        </button>
      </div>
    `
  },
  {
    id: 'tech-3',
    category: 'Tech & Systems',
    title: 'From Excel to Restaurant OS: Moving Your Restaurant to a Professional System',
    summary: 'Transitioning from manual spreadsheets to automated dashboards without disrupting service.',
    date: 'Sep 30, 2023',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p class="lead text-xl text-gray-600 mb-8">Many small restaurant owners start with Excel. It's free, flexible, and familiar. You use it for scheduling, inventory, and maybe even recipe costing. But as you scale, Excel becomes a trap.</p>

      <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">Why Spreadsheets Fail Restaurants</h2>
      <ul class="list-disc pl-6 space-y-4 mb-8 text-gray-700">
        <li><strong>They are static:</strong> Excel doesn't know you just sold 50 burgers. It only knows what you manually type in at the end of the week. This means you are always making decisions based on old data.</li>
        <li><strong>Version Control:</strong> "Inventory_Final_v3_REAL.xlsx". We've all been there. Data gets lost in email threads or overwritten by accident.</li>
        <li><strong>Human Error:</strong> One broken formula can mess up your food cost calculations for months before you notice.</li>
      </ul>

      <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">The Shift to a Restaurant OS</h2>
      <p class="mb-6">A Restaurant Operating System (OS) connects the dots. It takes live data from sales and subtracts from inventory in real-time. It uses historical sales data to forecast labor needs for next week.</p>

      <h3 class="text-2xl font-bold text-gray-800 mt-8 mb-4">Steps to Upgrade</h3>
      <ol class="list-decimal pl-6 space-y-4 mb-8 text-gray-700">
        <li><strong>Audit Your Data:</strong> Clean up your ingredient lists and recipes before importing them. Garbage in, garbage out.</li>
        <li><strong>Choose Cloud-Based:</strong> Ensure you can access your data from home, not just the back office computer.</li>
        <li><strong>Train Your Team:</strong> The system is only as good as the people using it. Make it easy for them to input waste and stock counts.</li>
      </ol>

      <p class="mb-6">Moving to a professional system isn't just about software; it's about maturing your business mindset from "mom and pop" to a scalable enterprise.</p>
    `
  },
  {
    id: 'tech-4',
    category: 'Tech & Systems',
    title: 'Inside a Smart Restaurant: How One Order Travels From POS to Kitchen to Guest',
    summary: 'Mapping the digital journey of an order and identifying points of friction.',
    date: 'Sep 25, 2023',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=1200&q=80',
    content: ''
  },
  {
    id: 'tech-5',
    category: 'Tech & Systems',
    title: 'Delivery Apps vs Your Own System: Which Is Better for Long-Term Profit?',
    summary: 'Evaluating the 30% commission fees vs the marketing reach of major delivery platforms.',
    date: 'Sep 21, 2023',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=1200&q=80',
    content: ''
  },
  {
    id: 'tech-6',
    category: 'Tech & Systems',
    title: 'How Digital Menus and a POS App Work Together to Reduce Errors and Speed Up Service',
    summary: 'Integration features that prevent "Sorry, we are out of that" moments.',
    date: 'Sep 18, 2023',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1200&q=80',
    content: ''
  }
];

// Add dummy content for the rest to prevent errors if clicked
const FULL_POSTS = POSTS.map(post => {
    if (!post.content) {
        return {
            ...post,
            content: `
              <p class="lead text-xl text-gray-600 mb-8">This article is currently being updated with the latest industry insights and data.</p>
              <p class="mb-6 text-gray-700">Please check back soon for a comprehensive guide on <strong>${post.title}</strong>.</p>
              <div class="bg-indigo-50 p-8 rounded-xl mt-12 border border-indigo-100">
                <h4 class="text-xl font-bold text-brand-dark mb-3">Explore our designs</h4>
                <p class="mb-6 text-gray-600">While you wait, why not browse our collection of premium menu templates?</p>
                <a href="https://menuds.etsy.com" target="_blank" class="inline-flex items-center justify-center bg-brand-accent text-white px-8 py-3 rounded-lg font-bold hover:bg-brand-accentHover transition-colors shadow-lg shadow-orange-500/30">
                  Visit Etsy Shop
                </a>
              </div>
            `
        };
    }
    return post;
});

export const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const categories = ['All', 'Digital Menus', 'Design & UX', 'Management & KPIs', 'Marketing', 'Tech & Systems'];

  const filteredPosts = activeCategory === 'All' ? FULL_POSTS : FULL_POSTS.filter(p => p.category === activeCategory);

  const handleReadArticle = (id: string) => {
    setSelectedPostId(id);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setSelectedPostId(null);
    window.scrollTo(0, 0);
  };

  // Detail View
  if (selectedPostId) {
    const post = FULL_POSTS.find(p => p.id === selectedPostId);
    if (!post) return null;

    return (
      <article className="min-h-screen bg-white">
        {/* Header Image */}
        <div className="h-[400px] w-full relative">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 text-white">
            <Button variant="ghost" className="text-white hover:text-white hover:bg-white/20 mb-6 pl-0" onClick={handleBack}>
              <ArrowLeft className="w-5 h-5 mr-2" /> Back to Blog
            </Button>
            <span className="bg-brand-accent px-3 py-1 rounded text-sm font-bold uppercase tracking-wide text-white mb-4 inline-block shadow-sm">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight drop-shadow-lg">{post.title}</h1>
            <div className="flex items-center text-sm md:text-base text-gray-200 space-x-6">
              <span className="flex items-center"><Calendar className="w-4 h-4 mr-2 text-brand-accent"/> {post.date}</span>
              <span className="flex items-center"><Clock className="w-4 h-4 mr-2 text-brand-accent"/> {post.readTime}</span>
              <span className="hidden md:flex items-center">By MenuDS Team</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div 
            className="prose prose-lg prose-indigo max-w-none prose-headings:font-bold prose-a:text-brand-accent hover:prose-a:text-brand-accentHover prose-img:rounded-xl text-gray-700"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
          
          {/* Share / Tags */}
          <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
             <div className="flex items-center gap-4">
               <span className="font-bold text-gray-900">Share:</span>
               <button className="p-2 rounded-full bg-gray-50 hover:bg-gray-100 text-blue-600 transition-colors"><Facebook className="w-5 h-5" /></button>
               <button className="p-2 rounded-full bg-gray-50 hover:bg-gray-100 text-sky-500 transition-colors"><Twitter className="w-5 h-5" /></button>
               <button className="p-2 rounded-full bg-gray-50 hover:bg-gray-100 text-blue-700 transition-colors"><Linkedin className="w-5 h-5" /></button>
               <button className="p-2 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-600 transition-colors"><Share2 className="w-5 h-5" /></button>
             </div>
             <Button onClick={handleBack} variant="outline">Read Next Article</Button>
          </div>
        </div>
      </article>
    );
  }

  // List View
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Restaurant Resources</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert insights on menu design, operational efficiency, and the technology shaping the future of food service.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
           {categories.map(cat => (
             <button
               key={cat}
               onClick={() => setActiveCategory(cat)}
               className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                 activeCategory === cat 
                   ? 'bg-brand-dark text-white shadow-lg shadow-brand-dark/20' 
                   : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:border-gray-300'
               }`}
             >
               {cat}
             </button>
           ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <div key={post.id} onClick={() => handleReadArticle(post.id)} className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full group cursor-pointer transform hover:-translate-y-1">
               <div className="h-56 relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-dark shadow-sm">
                      {post.category}
                    </span>
                  </div>
               </div>
               <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-xs text-gray-500 mb-3 space-x-4">
                    <span className="flex items-center"><Calendar className="w-3 h-3 mr-1 text-brand-accent"/> {post.date}</span>
                    <span className="flex items-center"><Clock className="w-3 h-3 mr-1 text-brand-accent"/> {post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-accent leading-tight transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow line-clamp-3">
                    {post.summary}
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full mt-auto group-hover:bg-brand-dark group-hover:text-white group-hover:border-brand-dark pointer-events-none transition-colors" 
                  >
                    Read Article
                  </Button>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};