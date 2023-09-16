import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({content, onDeleteComment}) {

  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    const newLikeCount = likeCount + 1
    setLikeCount(newLikeCount)
  }

  return (
    <div className={styles.comment} >
      <Avatar hasBorder={false} src="http://www.github.com/EsdrasCFF.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime} >
              <strong>Esdras Castro</strong>
              <time title='11 de Maio às 22:02' dateTime='2023-05-12 22:02 '> Publicado há 1 hora atrás </time>
            </div>

            <button onClick={handleDeleteComment} title='Detetar Comentário' >
              <Trash size={20}/>
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20}/>
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}