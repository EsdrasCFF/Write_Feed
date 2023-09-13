import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="http://www.github.com/EsdrasCFF.png"/>
          <div className={styles.authorInfo}>
            <strong>Esdras Castro</strong>
            <span>Dev Backend</span>
          </div>
        </div>

        <time title='11 de Maio às 22:02' dateTime='2023-05-12 22:02 '> Publicado há 1 hora </time>
      </header>

      <div className={styles.content} >
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>jane.design/doctorcare</p>
        <p> <a>#novoprojeto #nlw #rocketseat</a></p>
      </div>
    </article>
  );
}