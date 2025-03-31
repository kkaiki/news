// /components/news/RelatedArticles.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/types';
import styles from '@/styles/article.module.css';

interface RelatedArticlesProps {
  articles: Article[];
}

const RelatedArticles: React.FC<RelatedArticlesProps> = ({ articles }) => {
  return (
    <div className={styles.relatedArticles}>
      <h2 className={styles.relatedTitle}>関連ニュース</h2>
      <ul className={styles.relatedList}>
        {articles.map(article => (
          <li key={article.id} className={styles.relatedItem}>
            <Link href={`/news/${article.id}`}>
              <div className={styles.relatedItemInner}>
                <div className={styles.relatedItemImage}>
                  <Image 
                    src={article.imageUrl}
                    alt={article.title}
                    width={120}
                    height={80}
                    layout="fixed"
                  />
                </div>
                <div className={styles.relatedItemContent}>
                  <h3 className={styles.relatedItemTitle}>{article.title}</h3>
                  <span className={styles.relatedItemSource}>{article.source}</span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedArticles;
