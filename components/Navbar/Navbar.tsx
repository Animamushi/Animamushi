import Hamburg from '@components/Hamburg/Hamburg';
import Logo from '@components/Logo/Logo';
import Search from '@components/Search/Search';
import Link from 'next/link';
import styles from "./Navbar.module.css";
const Navbar = () => {
    return (
        <nav className={styles.nav}>
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
            </div>
        </nav>
    )
}

export default Navbar