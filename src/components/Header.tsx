import styles from "./Header.module.css"
import rocketSvg from "../assets/rocket.svg"

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={rocketSvg} alt="Logotipo Todo List" />
      <div>
        <span>to</span>
        <span>do</span>
      </div>
    </header>
  )
}
