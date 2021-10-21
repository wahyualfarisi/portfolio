import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div>

        <header className="header">
            <h1></h1>
            <nav className="header-menu">
              <ul className="header-menu-lists">
                <li className="header-menu-lists-item">
                  <Link href="/"><a>Home</a></Link>
                </li>
                <li className="header-menu-lists-item">
                  <Link href="/"><a>Project</a></Link>
                </li>
              </ul>
            </nav>
        </header>

        <div className="hero-container">
        <div className="hero-container-shadow-top"></div>
          <div className="hero">
            <figure className="hero-img-container">
                <Image 
                  className="hero-img-container-item" 
                  src="/images/me/me.png" 
                  alt="Wahyu Alfarisi" 
                  width="550" 
                  height="620" 
                />
                <div className="hero-img-container-shadow"></div>
            </figure>
            <div className="hero-info">
              <div className="hero-info-detail">
                <h1>Hi,</h1>
                <h2>I{`'`}am Wahyu Alfarisi</h2>
                <h3>Frontend Developer</h3>
              </div>

              <div className="hero-info-socialmedia">
                <Image 
                  src="/images/socialmedia/github.png"
                  alt="Github Account"
                  width="90"
                  height="30"
                  className="hero-info-socialmedia-img"
                />
                <Image 
                  src="/images/socialmedia/linkedin.png"
                  alt="Linkedin Account"
                  width="90"
                  height="30"
                  className="hero-info-socialmedia-img"
                />
              </div>
            </div>
          </div>
          <div className="hero-container-shadow-bottom"></div>
        </div>

    </div>
  )
}
