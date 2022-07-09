import Link from 'next/link'
import React from 'react'
import styles from "./CapituleCard.module.css"

const CapituleCard = ({ episode, id }: { episode: Partial<Episode>, id: number | undefined }) => {

    const { attributes } = episode ?? {};

    return (
        <Link href={`/watch/${id}/${attributes?.number}`}>
            <a className={styles.capitule}>
                <div className={styles["capitule-mask"]}></div>
                <img src={attributes?.thumbnail?.medium || attributes?.thumbnail?.original} alt={attributes?.canonicalTitle} className={styles["imagen-capitule"]} />
                <div className={styles["info-card"]}>
                    <span className={styles["capitule-number"]}>
                        {`Capitule ${attributes?.number}`}
                    </span>
                </div>
            </a>
        </Link>
    )
}

export default CapituleCard