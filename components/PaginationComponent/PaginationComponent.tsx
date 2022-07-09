import PaginationCapitules from '@components/PaginationCapitules/PaginationCapitules'
import AppContext from '@context/AppContext';
import React, { useContext } from 'react'
import styles from "./PaginationComponent.module.css"

const PaginationComponent = () => {
    const context: any = useContext(AppContext);
    const episodeCount = context?.state?.animeSelected?.attributes?.episodeCount;
    return (
        <div className={styles["pagination-component"]}>
            <PaginationCapitules episodeCount={episodeCount} />
        </div>
    )
}

export default PaginationComponent