import styles from './Layout.module.css';
import Header from './Header';
import Menu from './Menu';
import React, {useState} from 'react';

function Layout({children, activeMenu}) {
    const [showmenu, setShowmenu] = useState(true);
    function toggleMenu() {
        setShowmenu(!showmenu);
    }

    return (
        <div className={styles.container}>
            <Header  toggleMenu={toggleMenu}/>
            <div className={styles.layout}>
                {showmenu ? <Menu activeMenu={activeMenu}/> : <div></div>}
                <div className={showmenu ? styles.contents : styles.contentsHidden}>{children}</div>
            </div>
        </div>
    );
}

export default Layout;

