import type { MouseEventHandler, ReactNode } from 'react';
import styles from './CustomButton.module.css';

interface CustomButtonProps {
  children: ReactNode;
  handleClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const CustomButton = ({children, handleClick, className}: CustomButtonProps) => {
  return (
    <button
      className={`${styles.customButton} ${className || ''}`}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default CustomButton
