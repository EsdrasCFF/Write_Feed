import styles from './Header.module.css'

import writeLogo from '../assets/logo-write.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={writeLogo} alt="Logotipo de Ignite" />
      <strong> Write Feed </strong>
    </header>
  );
}