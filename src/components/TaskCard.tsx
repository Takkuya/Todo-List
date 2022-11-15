import styles from "./TaskCard.module.css"
import { Trash } from "phosphor-react"

type TaskCardProps = {
  id: string
  isChecked: boolean
  content: string
  onDeleteTask: (idToDelete: string) => void
  setIsChecked: (isChecked: boolean) => void
}

export const TaskCard = ({
  id,
  isChecked,
  content,
  onDeleteTask,
  setIsChecked,
}: TaskCardProps) => {
  function handleDeleteTask() {
    onDeleteTask(id)
  }
  function handleIsChecked() {
    setIsChecked(!isChecked)
  }

  return (
    <div className={styles.taskCardWrapper}>
      <div>
        <label className={styles.checkbox}>
          <input type="checkbox" onClick={handleIsChecked} />
          <span className={styles.checkmark}></span>
        </label>
        <p className={styles.taskCardContent}>{content}</p>
      </div>
      <button className={styles.deleteBtn} onClick={handleDeleteTask}>
        <Trash size={16} weight="bold" />
      </button>
    </div>
  )
}
