import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app'
import Head from 'next/head';
import Layout from '@components/Layout/Layout';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import ErrorBoundary from '@components/Error/ErrorBoundary'
import Navbar from '../components/Navbar/Navbar';

import '@styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {

    const API: any = process.env.NEXT_PUBLIC_API_ANIME;
    const initialState = useInitialState(API);

    const [animeSelected, setanimeSelected] = useState({})
    const [animeList, setAnimeList] = useState({})
    const [episodes, setEpisodes] = useState({})
    const [navigation, setNavigation] = useState(true);

    useEffect(() => {
        if (initialState) {
            setAnimeList(initialState);
            const firstItem: any = initialState?.filter((x: any) => typeof x !== undefined).shift();
            setanimeSelected(firstItem);
            localStorage.setItem('initial', JSON.stringify(initialState));
        }
    }, [initialState])

    const value: any = {
        state: {
            animeList,
            animeSelected,
            episodes,
            navigation
        },
        setAnimeList,
        setanimeSelected,
        setEpisodes,
        setNavigation
    }

    return (
        <>
            <Navbar />
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <AppContext.Provider value={value}>
                <Layout>
                    <ErrorBoundary FallbackComponent={<>Upppssss ... </>}>
                        <Component {...pageProps} />
                    </ErrorBoundary>
                </Layout>
            </AppContext.Provider>
        </>
    )
}

export default MyApp