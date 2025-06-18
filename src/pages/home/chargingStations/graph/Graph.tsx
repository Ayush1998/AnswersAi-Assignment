import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import type { TooltipProps } from 'recharts';
import { graphData } from '../../../../data/dummyData';
import styles from './Graph.module.css';
import type { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import { FaRegArrowAltCircleUp, FaRegQuestionCircle } from 'react-icons/fa';

const CustomTooltip = ({ active, payload }: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    const rawValue = payload?.[0]?.value;
    const value =
      typeof rawValue === 'number'
        ? (rawValue / 1000).toFixed(2)
        : 'N/A';
    return (
      <div className={styles.tooltipContainer}>
        <div className={styles.tooltipLabel}>
            <h2 className={styles.tooltipHeading}>${value}K</h2>
            <FaRegQuestionCircle className={styles.icon} size={14}/>
        </div>
        <div className={styles.tooltipContent}>
            <FaRegArrowAltCircleUp size={16} className={styles.tooltipContentIcon}/>
            4.6% above target
        </div>
      </div>
    );
  }

  return null;
};

const Graph = () => {

  return (
    <div className={styles.container}>
        <h2 className={styles.heading}>Graphs</h2>
        <div className={styles.graphContainer}>
            <div className={styles.dropdownContainer}>
                <select className={styles.dropdown}>
                    <option>Unsatisfied Demand %</option>
                </select>
            </div>

            <ResponsiveContainer width="100%" height={340}>
                <LineChart data={graphData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2e2e2e" />
                <XAxis dataKey="month" stroke="#aaa" />
                <YAxis stroke="#aaa" tickFormatter={(v) => `$${v / 1000}K`} />
                <Tooltip
                    content={<CustomTooltip />}
                />
                <Line
                    type="linear"
                    dataKey="value"
                    stroke="#a6ff4d"
                    strokeWidth={2}
                    activeDot={{
                        r: 6,
                        stroke: '#a6ff4d',
                        strokeWidth: 2,
                        fill: '#000',
                    }}
                    dot={{
                        r: 3,
                        stroke: '#a6ff4d',
                        strokeWidth: 1,
                        fill: '#000',
                    }}
                />
                </LineChart>
            </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Graph;
