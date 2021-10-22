import styles from './Project.module.scss';
import Image from 'next/image';

const Project = () => {
    return (
        <section className={styles.project}>
            <div className={styles.project_heading}>
                <h2>Projects</h2>
                <p>A list of applications that I work on in several <span className="span_style"> companies </span> and some <span className="span_style">personal projects</span></p>
            </div>

            <ul className={styles.portfolio}>
                <li className={styles.portfolio_item}>
                    <div className={styles.portfolio_item_content}>
                        <div className={styles.portfolio_item_description}>
                            <h3 className={styles.portfolio_item_description_title}>Point Of Sales</h3>
                            <p className={styles.portfolio_item_description_type}>Personal Project</p>
                            <p className={styles.portfolio_item_description_date}>2 Nov 2020</p>

                            <p className={styles.portfolio_item_description_info}>This project was created using react js, redux (state management) and sass for styling. This application displays a list of menus that are divided by category. You can also order directly by adding to the order, and confirm by entering your personal data and also your order data can be seen in the transaction list</p>

                            <h3>Build With : </h3>
                            <ul className={styles.portfolio_item_description_stack}>
                                <li>React JS</li>
                                <li>Redux</li>
                                <li>SCSS</li>
                            </ul>
                        </div>
                        <figure className={styles.portfolio_item_image}>
                            <Image 
                                className="img-shadow"
                                src="/images/project/react-pos.png" 
                                width="500" 
                                height="290" 
                                alt="React Point of sales" 
                            />
                        </figure>
                    </div>
                    <div className={styles.portfolio_item_action}>
                        <button>Preview</button>
                        <button>Source Code</button>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default Project;