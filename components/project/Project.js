import styles from './Project.module.scss';
import Portfolio from '../ui/portfolio/Portfolio';

const Project = ({ items }) => {
    return (
        <section className={styles.project}>
            <div className={styles.project_heading}>
                <h2>Projects</h2>
                <p>A list of applications that I work on in several <span className="span_style"> companies </span> and some <span className="span_style">personal projects</span></p>
            </div>
            <Portfolio items={items} />
        </section>
    )
}

export default Project;