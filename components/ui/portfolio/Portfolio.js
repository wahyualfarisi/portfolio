import styles from './portfolio.module.scss';
import Image from 'next/image';
import Button from '../button/Button';


const PortfolioItem = ({ title, type, date, desc, github, demo, imageUrl, stack = [] }) => {
    return (
        <li className={styles.portfolio_item}>
            <div className={styles.portfolio_item_content}>
                <div className={styles.portfolio_item_description}>
                    <h3 className={styles.portfolio_item_description_title}>{title}</h3>
                    <p className={styles.portfolio_item_description_type}>{type}</p>
                    <p className={styles.portfolio_item_description_date}>{date}</p>
                    <p className={styles.portfolio_item_description_info}>{desc}</p>
                    <h3>Build With : </h3>
                    <ul className={styles.portfolio_item_description_stack}>
                        {stack.length > 0 && stack.map((item, _) => <li key={_}>{item}</li> ) }
                    </ul>
                </div>
                <figure className={styles.portfolio_item_image}>
                    <Image 
                        className={styles.portfolio_item_image_item}
                        src={imageUrl}
                        width={500} 
                        height="270" 
                        alt={title}
                    />
                </figure>
            </div>
            <div className={styles.portfolio_item_action}>
                {demo && <Button link={demo} newTab>Preview</Button>} 
                {github && <Button link={github} newTab>Repo</Button> } 
            </div>
        </li>
    )
}


const Portfolio = ( { items }) => {

    return (
        <ul className={styles.portfolio}>
            {items.map(el => {
                return <PortfolioItem key={el.id} {...el} />
            })}
        </ul>
    )
}

export default Portfolio;