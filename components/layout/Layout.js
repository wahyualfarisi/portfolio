import Footer from '../footer/Footer';
import Header from './../header/Header';

import classes from './Layout.module.scss';

export default function Layout(props) {
    return (
        <div className={classes.layout}>
            <Header />
                <main>{props.children}</main>
            <Footer />
        </div>
    )
}
