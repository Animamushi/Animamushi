import Link from 'next/link'
import React from 'react'
import styles from "./Card.module.css"
const Card = (anime: Partial<Anime>) => {
    return (
        <Link href={`/anime/${anime.id}`}>
            <a className={styles.card}>
                <div className='bg-gradient-to-t from-black-100  rounded-xl w-full h-full absolute md:cursor-pointer '></div>
                <img src={anime?.attributes?.coverImage.small} className="rounded-xl object-cover object-center w-full h-full min-h-[179px]" alt={anime?.attributes?.canonicalTitle} />
                <div className='flex flex-col justify-evenly absolute bottom-0 py-5 items-start px-4 w-full'>
                    <span className='text-2xl text-white font-semibold '>{anime?.attributes?.canonicalTitle}</span>
                    <span className='text-xs text-gray-300 font-semibold self-end'>{`episodios ${anime?.attributes?.episodeCount || 1090}`}</span>
                </div>
            </a>
        </Link>
    )
}

export default Card