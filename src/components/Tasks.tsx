import styles from "./Tasks.module.css"
import clipboardSvg from "../assets/clipboard.svg"
import { TaskCard } from "./TaskCard"

export const Tasks = () => {
  return (
    <div className={styles.tasksWrapper}>
      <header className={styles.tasksHeader}>
        <div className={styles.createdTasks}>
          Tarefas Criadas <span className={styles.taskCount}>0</span>
        </div>
        <div className={styles.completedTasks}>
          Concluídas <span className={styles.taskCount}>0</span>
        </div>
      </header>
      <div className={styles.body}>
        {/* <div className={styles.withoutTasks}>
          <img src={clipboardSvg} alt="Ícone de prancheta" />
          <div className={styles.textsWrapper}>
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div> */}
        <div className={styles.withTasks}>
          <TaskCard />
        </div>
      </div>
    </div>
  )
}
