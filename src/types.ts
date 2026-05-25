export type PageId = 'home' | 'mission' | 'jesus' | 'salvation' | 'grow' | 'book' | 'blog' | 'contact';

export interface BlogPost {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  number: string;
  meta: string;
}

export interface Pillar {
  number: string;
  title: string;
  description: string;
}

export interface Pathway {
  label: string;
  title: string;
  description: string;
  buttonText: string;
  targetPage: PageId;
}
