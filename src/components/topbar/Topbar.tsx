import { useLocation, useNavigate } from 'react-router-dom';
import type { RootState } from '../../store/Store';
import Input from '../input/Input';
import styles from './Topbar.module.css';
import { useSelector } from 'react-redux';
import type { TopbarProps } from '../../store/topbarStore/TopbarSlice';

const Topbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const topbarItems: TopbarProps[] = useSelector((state: RootState) => state.topbar.value);

    if (!topbarItems || topbarItems.length === 0) {
        return null;
    }

    const isActive = (path: string) => {
        return location.pathname === path;
    }

    return (
        <div className={styles.topbar}>
            <div className={styles.leftContent}>
                {topbarItems.map((item, index) => (
                    <div 
                        key={index} 
                        className={`${styles.navItem} ${isActive(item.path) ? styles.active : ''}`}
                        onClick={() => navigate(item.path)} 
                    >
                        {item.label}
                    </div>
                ))}
            </div>
            <div className={styles.rightContent}>
                <Input />
            </div>
        </div>
    );
};

export default Topbar;