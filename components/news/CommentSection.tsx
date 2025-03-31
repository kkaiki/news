// /components/news/CommentSection.tsx
'use client'
import React, { useState } from 'react';
import { Comment } from '@/types';
import styles from '@/styles/article.module.css';

interface CommentSectionProps {
  comments: Comment[];
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments }) => {
  const [commentText, setCommentText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // コメント投稿のロジックを実装
    console.log('コメント投稿:', commentText);
    setCommentText('');
  };

  return (
    <div className={styles.commentSection}>
      <h2 className={styles.commentTitle}>コメント（{comments.length}）</h2>
      
      <form className={styles.commentForm} onSubmit={handleSubmit}>
        <textarea
          className={styles.commentInput}
          placeholder="コメントを書く"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          required
        />
        <button type="submit" className={styles.commentButton}>投稿する</button>
      </form>
      
      <ul className={styles.commentList}>
        {comments.map(comment => (
          <li key={comment.id} className={styles.commentItem}>
            <div className={styles.commentHeader}>
              <span className={styles.commentUser}>{comment.userName}</span>
              <time className={styles.commentTime}>{comment.postedAt}</time>
            </div>
            <p className={styles.commentBody}>{comment.content}</p>
            <div className={styles.commentActions}>
              <button className={styles.likeButton}>
                👍 {comment.likes}
              </button>
              <button className={styles.replyButton}>
                返信
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;
