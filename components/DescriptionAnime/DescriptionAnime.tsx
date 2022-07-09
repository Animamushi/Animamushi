import React from 'react'
import styles from './DescriptionAnime.module.css'
const DescriptionAnime = ({ animeData }: { animeData: Partial<Anime> }) => {
    const { attributes } = animeData ?? {};
    return (
        <div className={styles.description}>
            <div className={styles["description-text"]}>
                {attributes?.description}
            </div>
            <div className={styles.info}>
                <div className={styles.tipo}>
                    <div className={styles["info-title"]}>Type</div>
                    <div className={styles["info-text"]} >{attributes?.showType}</div>
                </div>
                <div className={styles.tipo}>
                    <div className={styles["info-title"]}>Episodes</div>
                    <div className={styles["info-text"]} >{
                        attributes?.episodeCount || 1090
                    }</div>
                </div>
                <div className={styles.tipo}>
                    <div className={styles["info-title"]}>Status</div>
                    <div className={styles["info-text"]}>{attributes?.status}</div>
                </div>
            </div>
        </div>
    )
}

export default DescriptionAnime