import { AddTask } from "./components/AddTask"
import { Header } from "./components/Header"
import { Tasks } from "./components/Tasks"
import styles from "./App.module.css"
import "./global.css"

export const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <AddTask />
      <Tasks />
    </div>
  )
}
