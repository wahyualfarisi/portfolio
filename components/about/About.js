import styles from './About.module.scss';
import Image from 'next/image';

const About = () => {
    return (
        <section className={styles.about}>
            <div className={styles.about_descriptions}>
                <h2>Who I`am ? </h2>
                <p className={styles.about_descriptions_text}>If You`re wondering who i am ...</p>
                <p className={styles.about_descriptions_text}>
                    I`m Wahyu Alfarisi, a 27 years old from indonesia 
                    <Image width="40" height="20" src="/images/other/flag-indonesia.png" alt="Indonesia Flag" /><br />
                    I have been working with software development since 2015,
                    I am a <span className="span_style"> self-motivated </span> and 
                    <span className="span_style"> self-taught developer </span> 
                    who likes to solve problems.
                </p>  
                <p className={styles.about_descriptions_text}>
                During this time, I took <span className="text__underline">React and React Native</span>  class at <span className="span__style"> Hacktiv8 </span>  
                and online courses like 
                <span><a className="text_underline" target="_blank" href="https://www.udemy.com/course/advanced-css-and-sass/" rel="noreferrer"> Advanced CSS and Sass: Flexbox, Grid, Animations and More! The Complete Javascript</a> </span> , 
                <span><a className="text_underline" target="_blank" href="https://www.udemy.com/course/the-complete-javascript-course/" rel="noreferrer">The Complete Javascript Course 2020: Build Real Projects!</a> </span>,
                <span><a className="text_underline" target="_blank" href="https://www.udemy.com/course/understand-javascript/" rel="noreferrer"> Javascript: Understanding the weird Parts </a>  </span>,
                <span><a className="text_underline" target="_blank" href="https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/" rel="noreferrer"> Javascript Algorithms and Data Structures Master Class </a>  </span> ,
                <span><a className="text_underline" target="_blank" href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/" rel="noreferrer">React - The Complete Guide ( incl Hooks, React Router, Redux )</a>   </span> ,
                <span><a className="text_underline" target="_blank" href="https://www.udemy.com/course/mern-stack-front-to-back/" rel="noreferrer">MERN Stack Front to Back: Full Stack React, Redux, & Node.js</a>  </span>,
                And Also watched countless youtube videos about Javascript, Design Pattern. And More ! <br />
            </p>  
            <p className={styles.about_descriptions_text}>
            Because we know the best way to <span className="span_style">Learn</span>  is to <span className="span_style">Practice</span> 
            </p>
            </div>
            <div className={styles.about_myskills}>
                <h2>My Current <span className="span_style_grey">Stack</span> of <span className="span_style"> Languages </span> / <span className="span_style">Technology</span> is : </h2>
                <ul className={styles.skills}>
                    <li className={styles.skills_item}>
                        <h3>FrontEnd</h3>
                        <span> HTML 5 </span> - 
                        <span> CSS3 </span> - 
                        <span> Javascript </span> - 
                        <span> Jquery </span> - 
                        <span> React JS </span> - 
                        <span> Redux </span> - 
                        <span> Next JS </span>
                    </li>
                    <li className={styles.skills_item}>
                        <h3>BackEnd</h3>
                        <span> Node JS </span> - 
                        <span> Express JS </span> - 
                        <span> PHP </span> - 
                        <span> Laravel </span>
                    </li>
                    <li className={styles.skills_item}>
                        <h3>DataBase</h3>
                        <span> Mysql </span> - 
                        <span> PostgresQL </span> - 
                        <span> MongoDB </span>
                    </li>
                    <li className={styles.skills_item}>
                        <h3>Mobile Application</h3>
                        <span> React Native with Expo </span>
                    </li>
                    <li className={styles.skills_item}>
                        <h3>Tools</h3>
                        <span> JEST </span> -
                        <span> Gulp </span> -
                        <span> NPM </span> -
                        <span> POSTMAN </span>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About;