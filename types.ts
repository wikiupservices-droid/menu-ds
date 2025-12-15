export enum Page {
  HOME = 'home',
  TEMPLATES = 'templates',
  APP = 'app',
  BLOG = 'blog',
  CONTACT = 'contact'
}

export interface Product {
  id: string;
  title: string;
  description: string;
  category: 'TV Menu' | 'Printable' | 'Flyer' | 'Social';
  price: number;
  image: string;
  tags?: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content: string; // HTML content for the full article
}