import CapituleCard from '@components/CapituleCard/CapituleCard'
import AppContext from '@context/AppContext'
import React, { useContext } from 'react'
import styles from './CapitulesFilter.module.css'

const CapitulesFilter = ({ episodesData, animeData }: { episodesData: Partial<Episode>[], animeData: Partial<Anime> }) => {
    const context: any = useContext(AppContext);
    const episodesToShow: [] = context?.state?.episodes ?? episodesData;
    const { id } = animeData ?? {}

    return (
        <div className={styles["capitules-filter"]}>
            {
                episodesToShow.map((e, i) => {
                    return (<CapituleCard episode={e} key={i} id={id} />)
                })
            }
        </div>
    )
}

export default CapitulesFilter