import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment} >
      <img src="http://www.github.com/EsdrasCFF.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime} >
              <strong>Esdras Castro</strong>
              <time title='11 de Maio às 22:02' dateTime='2023-05-12 22:02 '> Publicado há 1 hora atrás </time>
            </div>

            <button title='Detetar Comentário' >
              <Trash size={20}/>
            </button>
          </header>

          <p> Muito bom Devon, parabéns!! 👏👏 </p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20}/>
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}