// /components/news/ArticleDetail.tsx
import React from 'react';
import Image from 'next/image';
import { Article } from '@/types';
import styles from '@/styles/article.module.css';

interface ArticleDetailProps {
  article: Article;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ article }) => {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <article className={styles.articleContainer}>
      <div className={styles.articleMeta}>
        <span className={styles.category}>{article.category}</span>
        <span className={styles.source}>{article.source}</span>
        <time dateTime={article.publishedAt}>{formattedDate}</time>
      </div>
      
      <h1 className={styles.articleTitle}>{article.title}</h1>
      
      <div className={styles.articleImage}>
        <Image 
          src={article.imageUrl} 
          alt={article.title}
          width={640}
          height={360}
          layout="responsive"
          priority
        />
      </div>
      
      <div className={styles.articleAuthor}>
        <p>執筆: {article.author}</p>
      </div>
      
      <div 
        className={styles.articleContent}
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
      
      <div className={styles.socialButtons}>
        <button className={styles.shareButton}>シェア</button>
        <button className={styles.tweetButton}>ツイート</button>
        <button className={styles.lineButton}>LINEで送る</button>
      </div>
    </article>
  );
};

export default ArticleDetail;
