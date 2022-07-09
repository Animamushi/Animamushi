import React from 'react';
import Pagination from "pagination-component";
import styles from "./PaginationCapitules.module.css"

const PaginationCapitules = ({ episodeCount }: { episodeCount: number }) => {
    const paginationInfo = (episodes_number: number) => {
        const chunkSize = 10;
        const arrayNumbers = Array.from(Array(episodes_number + 1).keys());
        arrayNumbers.shift();
        const groups = arrayNumbers.map((e, i) => {
            return i % chunkSize === 0 ? arrayNumbers.slice(i, i + chunkSize) : null;
        }).filter(e => { return e; });
        const chank = groups.map((g, i) => {
            return `${g?.[0]}-${g?.[g.length - 1]}`;
        })
        //console.log({ arrayNumbers, groups })
        return chank;
    }
    const pageSelect = paginationInfo(episodeCount || 1090);
    const pageCountChank = pageSelect.length;

    return (
        <div className={styles["pagination-capitules"]}>
            <h2 className={"text-gray-100"}>Capitules</h2>
            <div className={styles.pagination}>
                <Pagination initialPage={1} show={10} pageCount={pageCountChank} onChange={page => console.log(page)}>
                    {({ setPage, page, index, currentPage, isPrev, isNext, isCurrentPage }) => {
                        if (isPrev)
                            return (
                                <div className={styles.item} onClick={() => setPage({ prev: true })}>
                                    Previous
                                </div>
                            );

                        if (isNext)
                            return (
                                <div className={styles.item} onClick={() => setPage({ next: true })}>
                                    Next
                                </div>
                            );

                        return (
                            <div
                                key={index}
                                className={`${styles.item} ${isCurrentPage ? styles.current : styles.notCurrent}`}
                                onClick={() => {
                                    /* console.log(`Navigating from page ${currentPage} to page ${page}`); */
                                    setPage({ page });
                                }}>
                                <h1 className={styles.chank}>{pageSelect[page - 1]}</h1>
                            </div>
                        );
                    }}
                </Pagination>
            </div>
        </div>
    )
}

export default PaginationCapitules