import React from 'react'
import styles from "./DetailAnime.module.css"
import { Stars } from "@hooks/useScoreToStars";
import Link from 'next/link';
const DetailAnime = ({ animeData }: { animeData: Partial<Anime> }) => {
    const { attributes, id } = animeData ?? {};

    return (
        <div className={styles["anime-detail"]}>
            <div className='background-mask bg-gradient-to-r from-black-100 w-full h-full absolute'></div>
            <img className={styles["poster-image"]} src={attributes?.posterImage?.large} alt={attributes?.canonicalTitle} />
            <div className={styles.info}>
                <div className="font-rock text-3xl leading-10">{attributes?.canonicalTitle}</div>
                <div className={styles.stars}>{Stars(attributes?.averageRating)}</div>
                <div className={styles["buttons-container"]}>
                    <Link href={`/anime/${id}`}>
                        <a className={styles.button}>Watch Anime</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DetailAnime