// /types/index.ts
export interface Article {
    id: string;
    title: string;
    content: string;
    publishedAt: string;
    author: string;
    category: string;
    imageUrl: string;
    source: string;
  }
  
  export interface Comment {
    id: string;
    userName: string;
    content: string;
    postedAt: string;
    likes: number;
  }
  