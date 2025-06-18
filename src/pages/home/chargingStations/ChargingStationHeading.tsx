import { MdOutlineBolt } from 'react-icons/md';
import styles from './ChargingStations.module.css';
import CustomButton from '../../../components/button/CustomButton';
import { FaClockRotateLeft } from 'react-icons/fa6';
import { LuUpload } from 'react-icons/lu';
import { useDispatch } from 'react-redux';
import { setShowEditVariable } from '../../../store/chargingStationStore/chargingStationSlice';

function ChargingStationHeading() {
    const dispatch = useDispatch(); 

    const handleEditVariables = () => {
        dispatch(setShowEditVariable(true));
    }

    return (
        <div className={styles.headingContainer}>
        <div className={styles.leftContent}>
            <MdOutlineBolt size={30}/>
            <h2 className={styles.chargingHeading}>Charging Station</h2>
        </div>
        <div className={styles.rightContent}>
            <CustomButton handleClick={() => console.log('Refresh clicked')}>
                <FaClockRotateLeft className={styles.headingIcon} size={18}/>
            </CustomButton>
            <CustomButton handleClick={handleEditVariables}>
                Edit Variables
            </CustomButton>
            <CustomButton handleClick={() => console.log('Upload clicked')}>
                <LuUpload className={styles.headingIcon} size={18}/>
            </CustomButton>
        </div>
        </div>
    )
}

export default ChargingStationHeading
