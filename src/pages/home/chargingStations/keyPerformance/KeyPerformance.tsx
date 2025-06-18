import { FaPlus } from 'react-icons/fa';
import CustomButton from '../../../../components/button/CustomButton';
import styles from './KeyPerformance.module.css';
import { kpiCards } from '../../../../data/dummyData';
import KPICard from '../../../../components/kpiCard/KPICard';

const KeyPerformance = () => {
  return (
    <div className={styles.keyPerformance}>
        <div className={styles.header}>
            <h2 className={styles.heading}>Key Performance Indicators</h2>
            <CustomButton handleClick={() => console.log('Edit Variables clicked')}>
                Variables
                <FaPlus className={styles.icon} size={12}/>
            </CustomButton>
        </div>
        <div className={styles.kpiCards}>
            {kpiCards.map((card, index) => (
                <KPICard 
                    title={card.title}
                    description={card.description}
                    value={card.value}
                    tooltip={card.tooltip}
                    key={index}
                />
            ))}
        </div>
    </div>
  )
}

export default KeyPerformance
