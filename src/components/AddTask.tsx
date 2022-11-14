import { PlusCircle } from "phosphor-react"
import styles from "./AddTask.module.css"

export const AddTask = () => {
  return (
    <div>
      <form className={styles.formWrapper}>
        <input type="text" name="task" placeholder="Adicione uma nova tarefa" />
        <button type="submit">
          Criar
          <PlusCircle size={16} weight="bold" />
        </button>
      </form>
    </div>
  )
}
