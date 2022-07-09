import React, { PropsWithChildren } from 'react'
import styles from './Layout.module.css'

//import hell >:v
interface iLayoutProps {
    children: any;
}
const Layout: React.FC<PropsWithChildren<iLayoutProps>> = ({ children }) => {

    return (
        <>
            {children}
            <footer className={styles.footer}>
            </footer>
        </>
    )
}

export default Layout