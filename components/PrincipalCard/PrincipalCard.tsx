import React from 'react';
import Link from 'next/link';
import styles from "./PrincipalCard.module.css"


const PrincipalCard = ({ attributes, id }: Anime) => {
    return (
        <div className={styles['principal-card']}>
            <div className={styles['background-mask']}></div>
            <img className={styles["poster-image"]} src={attributes?.posterImage?.large} alt={attributes?.canonicalTitle} />
            <div className={styles['info']}>
                <div className={styles['title']}>{attributes?.canonicalTitle}</div>
                <div className={styles['description']}> {attributes?.description}</div>
                <div className={styles['episode']}>{`episodes ${attributes?.episodeCount}`}</div>
                <div className={styles['buttons-container']}>
                    <Link href={`/anime/${id}`} >
                        <a className=' bg-primary text-white text-center transition-colors duration-700 transform text-lg rounded-lg px-8 py-3 m-3'>Watch Anime</a>
                    </Link>
                    <Link href={`/anime/${id}`} >
                        <a className='rounded bg-transparent border-[1px]  border-primary text-white text-center transition-colors duration-700 transform text-lg px-8 py-3 m-3 w-[173.33px]'>Details</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PrincipalCard