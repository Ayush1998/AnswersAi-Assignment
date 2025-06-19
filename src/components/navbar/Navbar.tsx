import { HiBars3 } from 'react-icons/hi2';
import styles from './Navbar.module.css';
import { FaHome, FaBell, FaClipboardList } from 'react-icons/fa';
import { IoMdCloudUpload, IoMdSettings } from 'react-icons/io';
import { FaCircleUser } from 'react-icons/fa6';
import { useLocation, useNavigate } from 'react-router-dom';
import { clearUser } from '../../store/authStore/authSlice';
import { useDispatch } from 'react-redux';

const NAVBAR_CONFIG = [
    { icon: <FaHome size={24}/>, label: 'Home', path: 'home' },
    { icon: <FaBell size={24} />, label: 'Notifications', path: 'notifications' },
    { icon: <FaClipboardList size={24} />, label: 'Tasks', path: 'tasks' },
    { icon: <IoMdCloudUpload size={24} />, label: 'Upload', path: 'upload' },
    { icon: <IoMdSettings size={24} />, label: 'Settings', path: 'settings' },
]

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const isActive = (path: string) => {
        const currentPath = location.pathname.split('/'); // Get the first segment of the path
        return currentPath[1] === path;
    }

    return (
        <div className={styles.navbar}>
        <div className={styles.topSection}>
            <div className={styles.iconBar}><HiBars3 size={24}/></div>
            {NAVBAR_CONFIG.map((item, index) => (
                <div 
                    key={index} 
                    className={`${styles.icon} ${isActive(item.path) ? styles.active : ''}`} 
                    onClick={() => navigate(`/${item.path}`)}
                >
                    {item.icon}
                </div>
            ))}
        </div>
        <div className={styles.bottomSection}>
            <div className={`${styles.icon} ${styles.userIcon}`} onClick={() => dispatch(clearUser())}><FaCircleUser size={20} /></div>
        </div>
        </div>
    );
};

export default Navbar;