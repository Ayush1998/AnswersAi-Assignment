import CustomButton from '../../../../components/button/CustomButton';
import Input from '../../../../components/input/Input';
import styles from './EditVariables.module.css';
import starsIcon from '../../../../assets/stars.svg';
import { IoReload } from 'react-icons/io5';
import { categorizedVariableData, variableSections } from '../../../../data/dummyData';
import { BsStars } from 'react-icons/bs';
import VariableTile from '../../../../components/variableTile/VariableTile';
import { useState } from 'react';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import type { IVariable } from '../../constants';
import VariableSections from './VariableSections';

const initialSelectedVariables = new Set<string>([
  "co2_distribution",
  "fleet_sizing",
  "parking_rate",
  "variable1_b"
]);

const EditVariables = () => {
  const [selectedVariables, setSelectedVariables] = useState<Set<string>>(new Set(initialSelectedVariables));
  const [hoveredVariable, setHoveredVariable] = useState<IVariable | null>(null);

  const handleVariableClick = (variableId: string) => {
    setSelectedVariables((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(variableId)) {
        newSet.delete(variableId);
      } else {
        newSet.add(variableId);
      }
      return newSet;
    });
  }


  return (
    <div className={styles.editVariablesContainer}>
      <div className={styles.actionHeading}>
        <div className={styles.inputContainer}>
          <Input />
        </div>
        <CustomButton className={styles.actionButton} handleClick={() => console.log('Autofill clicked')}>
          <img className={styles.icon} src={starsIcon} alt="Best Scenario Icon" loading="lazy"/>
          Autofill
        </CustomButton>
        <CustomButton className={`${styles.actionButton} ${styles.rerunButton}`} handleClick={() => console.log('Rerun clicked')}>
          <IoReload className={styles.icon} size={15}/>
          Rerun
        </CustomButton>
      </div>

      <div className={styles.variablesContainer}>
        <div className={styles.variablesListContainer}>
          {categorizedVariableData.map((category) => (
            <div key={category.category} className={styles.categoryContainer}>
              <p className={styles.categoryHeading}>{category.category}</p>
              <div className={styles.variablesList}>
                {category.variables.map((variable) => (
                  <VariableTile
                    key={variable.id}
                    selected={selectedVariables.has(variable.id)} 
                    handleClick={() => handleVariableClick(variable.id)}
                    handleHoveredValue={() => {setHoveredVariable(variable)}}
                    resetHoveredValue={() => setHoveredVariable(null)}
                  >
                    <span className={styles.variableName}>{variable.label}</span>
                    <BsStars className={styles.variableIcon} size={10}/>
                  </VariableTile>
                ))}
              </div>
            </div>
          ))}
        </div>

        {hoveredVariable && <div className={styles.variableDetails}>
          <div className={styles.varibaleHeading}>
            <h3 className={styles.variableDetailsHeading}>{hoveredVariable.label}</h3>
            <IoIosInformationCircleOutline size={15}/>
          </div>
          <p className={styles.variableDescription}>{hoveredVariable.description}</p>
        </div>}
      </div>

      {variableSections.map((section) => (
        <VariableSections key={section.id} section={section} />
      ))}
    </div>
  )
}

export default EditVariables
