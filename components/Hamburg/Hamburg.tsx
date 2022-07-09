import { AppProps } from "next/app";
import Link from "next/link";
import { useState } from "react";
import styles from "./Hamburg.module.css"

const MenuOverlay = ({ open }: { open: boolean }) => {
    return (
        <div className={`${styles["menu-overlay"]}  min-w-full h-full bg-black-300 z-[1] fixed overflow-hidden inset-0 ${open ? styles["open-overlay"] : styles["close-overlay"]}`}>
            <div className="container mx-auto px-4 mt-[50%]">
                <div className="flex flex-col justify-center items-center">
                    <Link href="/">
                        <a className="text-white text text-xl">Home</a>
                    </Link>
                    <Link href="/">
                        <a className="text-white text mt-7 text-xl">Catalog</a>
                    </Link>
                    <Link href="/">
                        <a className="text-white text mt-7 text-xl">Top anime</a>
                    </Link>
                    <Link href="/">
                        <a className="text-white text mt-7 text-xl">Mi list</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
const Hamburg = () => {
    const [open, setopen] = useState(false);

    const handlerOpenMenu = () => {
        setopen(!open);
    }
    return (
        <>
            <div className={`${styles.menu} ${open ? styles.open : styles.close}`}>
                <div className={styles["menu-icon"]}>
                    <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handlerOpenMenu} className={styles.icon}>
                        <rect className={styles["icon-top"]} width="100%" height="2.70769" />
                        <rect className={styles["icon-middle"]} height="2.70769" width="100%" x="0" y="10" rx="1.35385" />
                        <rect className={styles["icon-bottom"]} x="0" y="20" width="100%" height="2.70769" rx="1.35385" />
                    </svg>
                </div>
            </div>
            {
                open ?
                    <MenuOverlay open={open} /> : <></>
            }
        </>
    )
}

export default Hamburg;