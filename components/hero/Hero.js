import Image from 'next/image';
import styles from './Hero.module.scss'


const Hero = () => {
    return (
        <div className={styles.hero_container}>
            <div className={styles.hero_container_shadow_top}></div>
            <div className={styles.hero}>
                <figure className={styles.hero_img_container}>
                    <Image 
                    className={styles.hero_img_container_item} 
                    src="/images/me/me.png" 
                    alt="Wahyu Alfarisi" 
                    width="550" 
                    height="620" 
                    />
                    <div className={styles.hero_img_container_shadow}></div>
                </figure>
                <div className={styles.hero_info}>
                <div className={styles.hero_info_detail}>
                    <h1>Hi,</h1>
                    <h2>I{`'`}am Wahyu Alfarisi</h2>
                    <h3>Frontend Developer</h3>
                </div>

                <div className={styles.hero_info_socialmedia}>
                    <Image 
                    src="/images/socialmedia/github.png"
                    alt="Github Account"
                    width="90"
                    height="30"
                    className={styles.hero_info_socialmedia_img}
                    />
                    <Image 
                    src="/images/socialmedia/linkedin.png"
                    alt="Linkedin Account"
                    width="90"
                    height="30"
                    className={styles.hero_info_socialmedia_img}
                    />
                </div>
                </div>
            </div>
            <div className={styles.hero_container_shadow_bottom}></div>
        </div>
    )
}

export default Hero;