import styles from './Footer.module.scss';
import Logo from './../ui/logo/Logo';
import SocialMedia from '../ui/socialmedia/SocialMedia';
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_content}>
                <div className={styles.footer_content_logo}><Logo /></div>
                <div className={styles.footer_content_socialmedia}><SocialMedia /></div>
                <p>&#169; 2020 copyright all right reserved</p>
            </div>
        </footer>
    )
}

export default Footer;