import React from 'react'
import Card from '@components/Card/Card'
import Loader from '@components/Loader/Loader';
import styles from './ListOfCards.module.css';
function ListOfCards({ AnimeList }: { AnimeList: Anime[] }) {
    return (
        <div className={styles["list-of-cards"]}>
            {
                AnimeList?.length > 0 ?
                    AnimeList?.map((anime, i) => {
                        return (<Card key={i} {...anime} />)
                    }) : <Loader />
            }
        </div>
    )
}

export default ListOfCards