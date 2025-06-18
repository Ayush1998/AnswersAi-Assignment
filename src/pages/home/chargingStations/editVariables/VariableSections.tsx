import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import VariableTile from '../../../../components/variableTile/VariableTile';
import styles from './EditVariables.module.css';
import { BsStars } from 'react-icons/bs';
import { useState } from 'react';
import type { IVariable } from '../../constants';
import { IoIosInformationCircleOutline } from 'react-icons/io';

interface ISection {
    id: string;
    title: string;
    variables: Array<{
      id: string;
      label: string;
      description: string;
    }>;
  };

const VariableSections = ({ section }: { section: ISection }) => {
    const [selectedVariables, setSelectedVariables] = useState<Set<string>>(new Set());
    const [hoveredVariable, setHoveredVariable] = useState<IVariable | null>(null);
    const [showVariables, setShowVariables] = useState<boolean>(false);
    
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
        <div key={section.id} className={styles.sectionContainer}>
            <div className={styles.sectionHeader}>
                <h3 className={styles.sectionHeading}>{section.title}</h3>
                <div className={styles.iconContainer} onClick={() => setShowVariables(!showVariables)}>
                    {showVariables ? (
                        <FaChevronUp size={12} />
                    ) : (
                        <FaChevronDown size={12} />
                    )}
                </div>
            </div>
            {showVariables && <div className={styles.sectionContent}>
                {section.variables.map((variable) => (
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
            </div>}

            {hoveredVariable && <div className={styles.variableDetails}>
                <div className={styles.varibaleHeading}>
                    <h3 className={styles.variableDetailsHeading}>{hoveredVariable.label}</h3>
                    <IoIosInformationCircleOutline size={15}/>
                </div>
                <p className={styles.variableDescription}>{hoveredVariable.description}</p>
            </div>}
        </div>
    )
}

export default VariableSections
