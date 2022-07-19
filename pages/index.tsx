import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import React, { useContext, useEffect } from 'react'
import AppContext from '@context/AppContext'
import PrincipalCard from '@components/PrincipalCard/PrincipalCard'
import ListOfCards from '@components/ListOfCards/ListOfCards'

const Home: NextPage = () => {
    const Context: any = useContext(AppContext);

    return (
        <>
            <Head>
                <title>Animamushi 🐈</title>
            </Head>
            <div className="relative block overflow-x-hidden">
                {
                    Context.state.animeList ?
                        <>
                            <PrincipalCard {...Context.state.animeSelected} />
                            <ListOfCards AnimeList={Context.state.animeList} />
                        </> : <></>
                }
            </div>
        </>
    )
}

export default Home