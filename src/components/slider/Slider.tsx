import React from "react";
import styles from "./Slider.module.css";
import { IoMdClose } from "react-icons/io";

interface SliderProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const Slider = ({ isOpen, onClose, title, children }: SliderProps) => {
  return (
    <div className={`${styles.overlay} ${isOpen ? styles.open : ""}`}>
      <div className={styles.slider}>
        <div className={styles.header}>
          {title && <h2 className={styles.title}>{title}</h2>}
          <IoMdClose className={styles.closeButton} size={18} onClick={onClose}/>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Slider;
