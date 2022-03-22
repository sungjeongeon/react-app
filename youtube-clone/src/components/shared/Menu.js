import {Link} from 'react-router-dom';
import styles from './Menu.module.css';
import { TiHome } from 'react-icons/ti';
import { FaRegCompass } from 'react-icons/fa';
import { MdSubscriptions } from 'react-icons/md';

function Menu({activeMenu}) {
    return (
    <div className={styles.menu}>
        <Link to="/" className={activeMenu === 'home'?styles.focused:styles.link}>
            <TiHome className={styles.icon} />
            <div className={styles.text}>홈</div>
        </Link>
        <Link to="/explore" className={activeMenu === 'explore'?styles.focused:styles.link}>
            <FaRegCompass className={styles.icon} />
            <div className={styles.text}>탐색</div>    
        </Link>
        <Link to="/subscription" className={activeMenu === 'subscription'?styles.focused:styles.link}>
            <MdSubscriptions className={styles.icon} />
            <div className={styles.text}>구독</div>
        </Link>
    </div>
    );
}

export default Menu;