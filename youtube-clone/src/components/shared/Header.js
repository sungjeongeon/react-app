import styles from './Header.module.css';
import youtube_logo from '../../data/youtube_logo.png';
import {FiMenu} from 'react-icons/fi';
import {IoSearchOutline} from 'react-icons/io5';
import {BsGrid3X3Gap} from 'react-icons/bs';
import {HiOutlineDotsVertical} from 'react-icons/hi';

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.tab}>
                <FiMenu className={styles.icon} />
                <img src={youtube_logo} alt="로고" className={styles.logo} />
            </div>
            <div className={styles['center-tab']}>
                <input className={styles.input} />
                <IoSearchOutline className={styles['search-icon']} />
            </div>
            <div className={styles.tab}>
                <BsGrid3X3Gap className={styles.icon} />
                <HiOutlineDotsVertical className={styles.icon} />
            </div>
        </div>
    );
}
export default Header;