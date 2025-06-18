import BestScenarioContent from "./BestScenarioContent"
import ChargingStationHeading from "./ChargingStationHeading"
import Graph from "./graph/Graph"
import KeyPerformance from "./keyPerformance/KeyPerformance"
import styles from './ChargingStations.module.css'
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../../../store/Store"
import Slider from "../../../components/slider/Slider"
import { setShowEditVariable } from "../../../store/chargingStationStore/chargingStationSlice"
import EditVariables from "./editVariables/EditVariables"

const ChargingStations = () => {
    const showEditVariable: boolean = useSelector((state: RootState) => state.chargingStations.showEditVariable);
    const dispatch = useDispatch(); 

    const handleEditVariables = () => {
        dispatch(setShowEditVariable(false));
    }
    return (
        <div>
        <ChargingStationHeading />
        <BestScenarioContent />
        <div className={styles.contentContainer}>
            <Graph />
            <KeyPerformance />
        </div>
        {showEditVariable && <Slider 
            isOpen={showEditVariable}
            onClose={handleEditVariables}
            title="Edit Variables"
        >
            <EditVariables />
        </Slider>}
        </div>
    )
}

export default ChargingStations
