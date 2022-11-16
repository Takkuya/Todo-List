import styles from "./TaskCard.module.css"
import { Trash } from "phosphor-react"
import { ChangeEvent } from "react"

type TaskCardProps = {
  id: string
  content: string
  checked: boolean
  onDeleteTask: (idToDelete: string) => void
  onCheckedTask: (taskId: string, checkedTask: boolean) => void
}

export const TaskCard = ({
  id,
  content,
  checked,
  onDeleteTask,
  onCheckedTask,
}: TaskCardProps) => {
  function handleDeleteTask() {
    onDeleteTask(id)
  }

  function handleCheckedTask(event: ChangeEvent<HTMLInputElement>) {
    onCheckedTask(id, event.target.checked)
  }

  return (
    <div className={styles.taskCardWrapper}>
      <div>
        <label className={styles.checkbox}>
          <input type="checkbox" onChange={handleCheckedTask} checked={checked}/>
          <span className={styles.checkmark}></span>
          <p className={styles.taskCardContent}>{content}</p>
        </label>
      </div>
      <button className={styles.deleteBtn} onClick={handleDeleteTask}>
        <Trash size={16} weight="bold" />
      </button>
    </div>
  )
}
