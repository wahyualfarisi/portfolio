import Link from 'next/link';
import styles from './Button.module.scss';

const Button = ({ clickHandler, children, link, newTab }) => {
    if(link && !newTab){
        return (
            <Link href={link} passHref><span className={styles.btn}>{children}</span></Link>
        )
    }

    if(link && newTab){
        return (
            <a href={link} target="_blank" rel="noreferrer" className={styles.btn}>{children}</a>
        )
    }

    return (
        <button className={styles.btn} onClick={clickHandler}>{children}</button>
    )
}

export default Button;