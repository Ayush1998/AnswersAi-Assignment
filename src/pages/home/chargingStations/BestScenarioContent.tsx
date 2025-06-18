import styles from './BestScenario.module.css';
import starsIcon from '../../../assets/stars.svg';
import { IoIosArrowUp } from 'react-icons/io';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { useState } from 'react';

const BEST_SCENARIO_DATA = [
    "The best found configuration based on profit is characterized by 11 zones (max) with charging stations and 48 total number of poles.",
    "The best found configuration based on satisfied demand is characterized by 11 zones (max) with charging stations and 48 total number of poles."
]

const BestScenarioContent = () => {
    const [showContent, setShowContent] = useState(true);

    const toggleContent = () => {
        setShowContent(!showContent);
    }

    return (
        <>
            <div className={styles.heading}>
                <div className={styles.leftContent}>
                    <img src={starsIcon} alt="Best Scenario Icon" loading="lazy"/>
                    <h2 className={styles.chargingHeading}>Best Scenario Results</h2>
                </div>
                <div className={styles.iconContainer} onClick={toggleContent}>
                    <IoIosArrowUp className={styles.icon} size={12}/>
                </div>
            </div>

            {showContent && <div className={styles.content}>
                    {BEST_SCENARIO_DATA.map((text, index) => (
                        <div key={index} className={styles.textContainer}>
                            <p key={index} className={styles.text}>{text}</p>
                            <HiOutlineDotsHorizontal size={20}/>
                        </div>
                    ))}
            </div>}
        </>
    )
}

export default BestScenarioContent
