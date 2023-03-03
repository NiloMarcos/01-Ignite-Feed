import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar';
import styles from './Comment.module.css';

export function Comment({content, onDeleteComment}) {

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  return (
    <div className={styles.comment}>
      <Avatar src="https://avatars.githubusercontent.com/u/74433254?v=4" hasBorder={false} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title='11 de maio as 8:13' dataTime="2022-05-11 08:13:38">Cerca de 1h atrás</time>
            </div>

            <button title='Deletar comentario' onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>
        
          <p>{content}</p>
        </div>
      
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>

    </div>
  );
}