import Image from 'next/image';
import styles from './SocialMedia.module.scss';

const SocialMedia = () => {
    return (
        <div className={styles.socialmedia}>
            <a href="https://www.linkedin.com/in/wahyu-alfarisi/" className={styles.socialmedia_img}>
                <Image 
                    src="/images/socialmedia/github.png"
                    alt="Github Account"
                    width="90"
                    height="30"
                />
            </a>
            <a href="https://github.com/wahyualfarisi" className={styles.socialmedia_img}>
                <Image 
                    src="/images/socialmedia/linkedin.png"
                    alt="Linkedin Account"
                    width="90"
                    height="30"
                />
            </a>
        </div>
    )
}

export default SocialMedia;