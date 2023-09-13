import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar} >
      <img 
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1613068687893-5e85b4638b56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=40" 
      />

      <div className={styles.profile} >
        <strong>Esdras Castro</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#"> Editar seu perfil </a>
      </footer>
    </aside>
  );
}