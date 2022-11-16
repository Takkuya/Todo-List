import styles from "./Tasks.module.css"
import clipboardSvg from "../assets/clipboard.svg"
import { TaskCard } from "./TaskCard"
import {
  ChangeEvent,
  FormEvent,
  InvalidEvent,
  useEffect,
  useState,
} from "react"
import { PlusCircle } from "phosphor-react"
import { v4 as uuidv4 } from "uuid"

type Tasks = {
  id: string
  content: string
  isCompleted: boolean
}

export const Tasks = () => {
  const [newTaskContent, setNewTaskContent] = useState("")
  const [tasks, setTasks] = useState<Tasks[]>([])

  const tasksCount = tasks.length
  const isNewTaskContentEmpty = newTaskContent.trim().length === 0
  const completedTasksCount = tasks.filter(
    (task) => task.isCompleted === true
  ).length

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("")

    setNewTaskContent(event.target.value)
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório")
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    setTasks([
      ...tasks,
      { id: uuidv4(), content: newTaskContent, isCompleted: false },
    ])

    localStorage.setItem(
      "task",
      JSON.stringify([
        ...tasks,
        { id: uuidv4(), content: newTaskContent, isCompleted: false },
      ])
    )

    setNewTaskContent("")
  }

  function deleteTask(idToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== idToDelete
    })

    setTasks(tasksWithoutDeletedOne)
    localStorage.setItem("task", JSON.stringify(tasksWithoutDeletedOne))
  }

  function handleWhenTaskIsChecked(taskId: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        }
      }
      return task
    })
    setTasks(newTasks)
    localStorage.setItem("task", JSON.stringify(newTasks))
  }

  function getTasksFromLocalStorage() {
    const savedTasks = localStorage.getItem("task")

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks))
    }
  }

  useEffect(() => {
    getTasksFromLocalStorage()
  }, [])

  return (
    <>
      <div>
        <form className={styles.formWrapper} onSubmit={handleCreateNewTask}>
          <input
            type="text"
            name="task"
            value={newTaskContent}
            placeholder="Adicione uma nova tarefa"
            onChange={handleNewTaskChange}
            onInvalid={handleNewTaskInvalid}
          />
          <button type="submit" disabled={isNewTaskContentEmpty}>
            Criar
            <PlusCircle size={16} weight="bold" />
          </button>
        </form>
      </div>

      <div className={styles.tasksWrapper}>
        <header className={styles.tasksHeader}>
          <div className={styles.createdTasks}>
            Tarefas Criadas
            <span className={styles.taskCount}>{tasksCount}</span>
          </div>
          <div className={styles.completedTasks}>
            Concluídas
            {tasksCount > 0 ? (
              <span className={styles.taskCount}>
                {completedTasksCount} de {tasksCount}
              </span>
            ) : (
              <span className={styles.taskCount}>{tasksCount}</span>
            )}
          </div>
        </header>
        <div className={styles.body}>
          {tasksCount > 0 ? (
            <div className={styles.withTasks}>
              {tasks.map((task) => {
                return (
                  <TaskCard
                    key={task.id}
                    id={task.id}
                    content={task.content}
                    checked={task.isCompleted}
                    onDeleteTask={deleteTask}
                    onCheckedTask={handleWhenTaskIsChecked}
                  />
                )
              })}
            </div>
          ) : (
            <div className={styles.withoutTasks}>
              <img src={clipboardSvg} alt="Ícone de prancheta" />
              <div className={styles.textsWrapper}>
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}