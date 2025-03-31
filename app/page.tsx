// /app/page.tsx
import React from 'react';
import ArticleDetail from '@/components/news/ArticleDetail';
import RelatedArticles from '@/components/news/RelatedArticles';
import CommentSection from '@/components/news/CommentSection';
import { Article, Comment } from '@/types';
import styles from '@/styles/article.module.css';

// 固定の記事データ
const article: Article = {
  id: 'news123',
  title: '新型コロナウイルス: 新たな変異株の影響と対策について最新情報',
  content: '<p>新型コロナウイルスの新たな変異株が確認され、専門家は警戒を呼びかけています。</p><p>この新たな変異株は従来のものより感染力が高いとされ、各国は対策の見直しを迫られています。</p><p>ワクチン接種の加速と新たな公衆衛生対策が検討されています。</p>',
  publishedAt: '2025-03-31T09:30:00Z',
  author: '山田 健太',
  category: '国際・社会',
  imageUrl: 'https://placehold.jp/640x360.png',
  source: 'YahooNews編集部',
};

// 固定の関連記事データ
const relatedArticles: Article[] = [
  {
    id: 'related1',
    title: 'ワクチン接種率が都市部で上昇、地方との格差が課題に',
    content: '',
    publishedAt: '2025-03-30T15:20:00Z',
    author: '鈴木 明',
    category: '健康',
    imageUrl: 'https://placehold.jp/120x80.png',
    source: '医療タイムス',
  },
  {
    id: 'related2',
    title: '新型コロナ対策: 専門家が語る効果的な予防法',
    content: '',
    publishedAt: '2025-03-29T12:45:00Z',
    author: '佐藤 直子',
    category: '健康',
    imageUrl: 'https://placehold.jp/120x80.png',
    source: '健康新聞',
  },
  {
    id: 'related3',
    title: '経済回復への道: コロナ後の新たな産業動向',
    content: '',
    publishedAt: '2025-03-28T10:15:00Z',
    author: '田中 誠',
    category: '経済',
    imageUrl: 'https://placehold.jp/120x80.png',
    source: '経済レポート',
  },
];

// 固定のコメントデータ
const comments: Comment[] = [
  {
    id: 'comment1',
    userName: 'ニュース好き2025',
    content: 'やはり対策を徹底する必要がありますね。ワクチン接種も重要です。',
    postedAt: '2025-03-31 10:15',
    likes: 24,
  },
  {
    id: 'comment2',
    userName: '医療従事者K',
    content: '現場の状況はまだ厳しいです。みなさん引き続き感染対策をお願いします。',
    postedAt: '2025-03-31 10:32',
    likes: 56,
  },
  {
    id: 'comment3',
    userName: 'たろう1234',
    content: '海外の状況も気になります。もっと国際的な連携が必要ではないでしょうか。',
    postedAt: '2025-03-31 11:05',
    likes: 13,
  },
];

export const metadata = {
  title: '新型コロナウイルス: 新たな変異株の影響と対策について最新情報 - Yahoo!ニュース',
  description: '新型コロナウイルスの新たな変異株が確認され、専門家は警戒を呼びかけています。この新たな変異株は従来のものより感染力が高いとされ、各国は対策の見直しを迫られています。',
  openGraph: {
    title: '新型コロナウイルス: 新たな変異株の影響と対策について最新情報',
    description: '新型コロナウイルスの新たな変異株が確認され、専門家は警戒を呼びかけています。この新たな変異株は従来のものより感染力が高いとされ、各国は対策の見直しを迫られています。',
    images: ['https://placehold.jp/640x360.png'],
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
          </div>
        </div>
      </aside>
    </div>
  );
}
