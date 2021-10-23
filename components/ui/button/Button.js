import styles from './Button.module.scss';

const Button = ({ clickHandler, children, link }) => {
    if(link){
        return (
            <a href={link} target="_blank" rel="noreferrer" className={styles.btn}>{children}</a>
        )
    }
    return (
        <button className={styles.btn} onClick={clickHandler}>{children}</button>
    )
}

export default Button;