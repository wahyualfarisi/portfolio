import Link from 'next/link';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>Alfarisilab</h1>
            <nav className={styles.header_menu}>
              <ul className={styles.header_menu_lists}>
                <li className={styles.header_menu_lists_item}>
                  <Link href="/"><a>Home</a></Link>
                </li>
                <li className={styles.header_menu_lists_item}>
                  <Link href="/"><a>Project</a></Link>
                </li>
              </ul>
            </nav>
        </header>
    )
}

export default Header;