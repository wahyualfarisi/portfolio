import Link from 'next/link';
import Logo from '../ui/logo/Logo';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <Link href="/"><a><Logo /></a></Link> 
            <nav className={styles.header_menu}>
              <ul className={styles.header_menu_lists}>
                <li className={styles.header_menu_lists_item}>
                  <Link href="/"><a>Home</a></Link>
                </li>
                <li className={styles.header_menu_lists_item}>
                  <Link href="/project"><a>Project</a></Link>
                </li>
              </ul>
            </nav>
        </header>
    )
}

export default Header;