import { FaSearch } from "react-icons/fa"
import styles from "./Input.module.css"

const Input = ({ placeholder = 'Search' }) => {
  return (
    <div className={styles.searchContainer}>
      <FaSearch className={styles.icon} />
      <input
        type="text"
        className={styles.input}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Input
