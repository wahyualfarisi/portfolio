import Image from 'next/image';
import SocialMedia from '../ui/socialmedia/SocialMedia';
import styles from './Hero.module.scss'
import MeImage from './../../public/images/me/me.PNG';

const Hero = () => {
    return (
        <section className={styles.hero_container}>
            <div className={styles.hero_container_shadow_top}></div>
                <div className={styles.hero}>
                    <figure className={styles.hero_img_container}>
                        <Image
                            className={styles.hero_img_container_item} 
                            src={MeImage}
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

                    <SocialMedia />
                    </div>
                </div>
            <div className={styles.hero_container_shadow_bottom}></div>
        </section>
    )
}

export default Hero;