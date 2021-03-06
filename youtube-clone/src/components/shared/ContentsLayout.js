import styles from './ContentsLayout.module.css';

function ContetnsLayout({children}) {
    return (
        <div className={styles.layout}>
            <div className={styles.container}>{children}</div>
        </div>
    );
}

export default ContetnsLayout;