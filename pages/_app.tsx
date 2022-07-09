import { useState } from 'react';
import type { AppProps } from 'next/app'
import Head from 'next/head';
import Layout from '@components/Layout/Layout';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import Navbar from '../components/Navbar/Navbar';
import OnConstruction from '@components/OnConstruction/OnConstruction'
import '@styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
    const initialState = useInitialState();
    const [animeSelected, setanimeSelected] = useState({})
    const [episodes, setEpisodes] = useState({})

    const value: any = {
        state: {
            animeList: initialState,
            animeSelected,
            episodes
        },
        setanimeSelected,
        setEpisodes
    }

    return (
        <>
            {
                process.env.maintenance ?
                    <OnConstruction /> :
                    <>
                        <Navbar />
                        <Head>
                            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                        </Head>
                        <AppContext.Provider value={{}}>
                            <Layout>
                                <Component {...pageProps} />
                            </Layout>
                        </AppContext.Provider>
                    </>
            }
        </>
    )
}

export default MyApp