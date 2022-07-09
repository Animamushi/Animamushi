import { NextPage } from 'next'
import Head from 'next/head'
import React, { useContext } from 'react'
import AppContext from '@context/AppContext'
import PrincipalCard from '@components/PrincipalCard/PrincipalCard'
import ListOfCards from '@components/ListOfCards/ListOfCards'
const Home: NextPage = () => {
    /*     const context = useContext(AppContext);
    
        const ComponentsHomeWithContext = (context: any) => {
            const { state: { animeList } } = context ?? {}
            const useFirstAnime = animeList[0];
            return (
                <>
                    <PrincipalCard {...useFirstAnime} />
                    <ListOfCards AnimeList={animeList} />
                </>
            )
        } */
    return (
        <>
            <Head>
                <title>Animamushi 🐈</title>
            </Head>
            <div className="relative block overflow-x-hidden">
                {/* {ComponentsHomeWithContext(context)} */}
            </div>
        </>
    )
}

export default Home