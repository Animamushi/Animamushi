import Hamburg from '@components/Hamburg/Hamburg';
import Logo from '@components/Logo/Logo';
import Search from '@components/Search/Search';
import AppContext from '@context/AppContext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import styles from "./Navbar.module.css";

const Navbar = () => {
    const [visible, setVisible] = useState(true);
    const context: any = useContext(AppContext);
    const router = useRouter();
    useEffect(() => {
        if (router.asPath.includes('/watch/')) {
            setVisible(false);
        } else {
            setVisible(true)
        }
    }, [router, visible])

    return (
        <nav className={styles.nav}>
            {
                visible ?
                    <div className={`${styles["container-nav"]} md:container`}>
                        <div className={`${styles["list-menu"]}`}>
                            <Link href="/">
                                <a className={styles["link-menu"]} >item</a>
                            </Link>
                            <Link href="/">
                                <a className={styles["link-menu"]} >item</a>
                            </Link>
                            <Link href="/">
                                <a className={styles["link-menu"]} >item</a>
                            </Link>
                        </div>
                        <Hamburg />
                        <Logo />
                        <Search />
                    </div> : <></>
            }
        </nav>
    )
}

export default Navbar