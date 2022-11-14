import styles from "./TaskCard.module.css"
import { Trash } from "phosphor-react"

export const TaskCard = () => {
  return (
    <div className={styles.taskCardWrapper}>
      <div>
        <label className={styles.checkbox}>
          <input type="checkbox" />
          <span className={styles.checkmark}></span>
        </label>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          pariatur quas, quisquam ut, repellat nostrum at qui ipsa aliquam
          necessitatibus veritatis veniam aliquid rem officia provident quia
          omnis, voluptas placeat?
        </p>
      </div>
      <button className={styles.deleteBtn}>
        <Trash size={16} weight="bold" />
      </button>
    </div>
  )
}
