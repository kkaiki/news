// /app/page.tsx
import React from 'react';
import ArticleDetail from '@/components/news/ArticleDetail';
import RelatedArticles from '@/components/news/RelatedArticles';
import CommentSection from '@/components/news/CommentSection';
import { Article, Comment } from '@/types';
import styles from '@/styles/article.module.css';
import Image from 'next/image';

// 固定の記事データ
const article: Article = {
  id: 'news123',
  title: '無印良品、初のロゴ入り商品を発売開始！',
  content: '<p>無印良品が、創業以来初となるロゴ入り商品の発売を開始しました。</p><p>これまで「無印」を貫いてきた同社ですが、ブランド戦略の転換により、一部商品にロゴを取り入れることを決定しました。</p><p>新商品には、シンプルでスタイリッシュなデザインのロゴが施されており、多くのファンから注目を集めています。</p>',
  publishedAt: '2025-03-31T02:30:00Z',
  author: '山田 健太',
  category: 'ビジネス',
  imageUrl: '/images/mujitshirt.png',
  source: 'YahooNews編集部',
};

// 固定の関連記事データ
const relatedArticles: Article[] = [
  {
    id: 'related1',
    title: '無印良品、新ロゴデザインの裏側に迫る',
    content: '',
    publishedAt: '2025-03-30T15:20:00Z',
    author: '鈴木 明',
    category: 'デザイン',
    imageUrl: '/images/brandnewlogo.jpeg',
    source: 'デザイン週刊',
  },
  {
    id: 'related2',
    title: 'ロゴ入り商品で無印良品のブランド価値は上がるのか',
    content: '',
    publishedAt: '2025-03-29T12:45:00Z',
    author: '佐藤 直子',
    category: 'マーケティング',
    imageUrl: '/images/value.jpeg',
    source: 'ビジネス新聞',
  },
  {
    id: 'related3',
    title: '無印良品、海外展開でのロゴ戦略を語る',
    content: '',
    publishedAt: '2025-03-28T10:15:00Z',
    author: '田中 誠',
    category: '国際経済',
    imageUrl: '/images/muji_grobal.jpeg',
    source: '経済レポート',
  },
];
// 固定のコメントデータ
const comments: Comment[] = [
  {
    id: 'comment1',
    userName: '無印大好き2025',
    content: 'ついにきた！毎日来て外に出かけます！！！！',
    postedAt: '2025-04-01 10:15',
    likes: 24,
  },
  {
    id: 'comment2',
    userName: '無印関係者',
    content: 'え？ダサくねwwwwww',
    postedAt: '2025-04-01 10:32',
    likes: 56,
  },
  {
    id: 'comment3',
    userName: 'たろう1234',
    content: 'ロゴがあるのに無印良品爆笑',
    postedAt: '2025-04-01 11:05',
    likes: 13,
  },
];

export const metadata = {
  title: '無印良品、初のロゴ入り商品を発売開始！ - Yahoo!ニュース',
  description: '無印良品が、創業以来初となるロゴ入り商品の発売を開始しました。これまで「無印」を貫いてきた同社ですが、ブランド戦略の転換により、一部商品にロゴを取り入れることを決定しました。',
  openGraph: {
    title: '無印良品、初のロゴ入り商品を発売開始！',
    description: '無印良品が、創業以来初となるロゴ入り商品の発売を開始しました。これまで「無印」を貫いてきた同社ですが、ブランド戦略の転換により、一部商品にロゴを取り入れることを決定しました。',
    images: ['/images/mujitshirt.png'],
  },
};

export default function NewsPage() {
  return (
    <div className={styles.pageContainer}>
      <main className={styles.mainContent}>
        <ArticleDetail article={article} />
        <CommentSection comments={comments} />
      </main>
      
      <aside className={styles.sideContent}>
        <RelatedArticles articles={relatedArticles} />
        <div className={styles.adContainer}>
          <div className={styles.adBanner}>
            <p>広告</p>
            <Image 
              src="/images/advertisement.jpg" 
              alt="広告バナー" 
              width={300}
              height={250}
              className={styles.adImage}
            />
          </div>
        </div>
      </aside>
    </div>
  );
}