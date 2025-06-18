import { useRef, type ReactNode } from "react"
import styles from "./VariableTile.module.css"
import { IoMdCheckmark } from "react-icons/io";
import { GoPlus } from "react-icons/go";

interface CustomButtonProps {
  children: ReactNode;
  selected?: boolean;
  handleClick?: () => void;
  handleHoveredValue?: () => void;
  resetHoveredValue?: () => void;
}

const VariableTile = ({children, handleClick, selected = false, handleHoveredValue, resetHoveredValue}: CustomButtonProps) => {
    const hoverTimer = useRef<NodeJS.Timeout | null>(null)

    const handleMouseEnter = () => {
        if (handleHoveredValue) {
            hoverTimer.current = setTimeout(() => {
                handleHoveredValue()
            }, 1500) // Delay of 500ms before calling handleHoveredValue
        }
    }

    const handleMouseLeave = () => {
        if (hoverTimer.current) {
            clearTimeout(hoverTimer.current)
            hoverTimer.current = null
        }
        if(resetHoveredValue) {
            resetHoveredValue();
        }
    }

    return (
        <div 
            className={`${styles.variableTile} ${selected ? styles.selected : ''}`} 
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
            {selected && <IoMdCheckmark className={styles.icon} size={14}/>}
            {!selected && <GoPlus className={styles.icon} size={14}/>}
        </div>
    )
}

export default VariableTile
