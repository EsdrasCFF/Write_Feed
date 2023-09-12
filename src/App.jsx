import { Header } from "./components/Header"

import styles from './App.module.css';

import './global.css';

function App() {

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <aside>
          Sidebar
        </aside>

        <main>
          Main
        </main>
      </div>

    </div>
  )
}

export default App
