import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from '../ui/logo/Logo';
import styles from './Header.module.scss';

const Header = () => {
  const params = useRouter();

  console.log( params );


    return (
        <header className={styles.header}>
            <Link href="/"><a><Logo /></a></Link> 
            <nav className={styles.header_menu}>
              <ul className={styles.header_menu_lists}>
                <li className={styles.header_menu_lists_item}>
                  <Link 
                    href="/">
                    <a className={params.pathname === '/' ? "activeLink" : '' } >Home</a>
                  </Link>
                </li>
                <li className={styles.header_menu_lists_item}>
                  <Link 
                    href="/project">
                      <a className={params.pathname === '/project' ? "activeLink" : ''}>Project</a>
                  </Link>
                </li>
              </ul>
            </nav>
        </header>
    )
}

export default Header;