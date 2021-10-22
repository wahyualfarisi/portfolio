import Header from './../header/Header';

import classes from './Layout.module.scss';

export default function Layout(props) {
    return (
        <div className={classes.layout}>
            <Header />
            <main>{props.children}</main>
        </div>
    )
}
