import styles from './KPICard.module.css';
import { FaRegQuestionCircle } from "react-icons/fa";

type KpiCardProps = {
  title: string;
  description: string;
  value: string;
  tooltip?: string;
};

const KPICard = ({ title, description, value, tooltip } : KpiCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.title}>{title}</span>
        {tooltip && (
          <span className={styles.icon} title={tooltip}>
            <FaRegQuestionCircle />
          </span>
        )}
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.value}>{value}</div>
    </div>
  )
}

export default KPICard
