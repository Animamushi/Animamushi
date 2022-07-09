import { useContext, useEffect } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring';
import DetailAnime from "@components/DetailAnime/DetailAnime"
import CapitulesFilter from '@components/CapitulesFilter/CapitulesFilter';
import DescriptionAnime from '@components/DescriptionAnime/DescriptionAnime';
import PaginationComponent from '@components/PaginationComponent/PaginationComponent';
import AppContext from '@context/AppContext';
import Loader, { LoaderScreen } from '@components/Loader/Loader';
import styles from '@styles/Anime.module.css'

type props = {
    animeData: Partial<Anime>,
    episodesData: Partial<Episode>[]
}
//const context = useContext(AppContext);
export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {

    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}
// This also gets called at build time
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const getAnimeData = async (params: ParsedUrlQuery | undefined) => {
        const { id } = params ?? {};
        const response: Response = await fetch(`https://kitsu.io/api/edge/anime/${id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/vnd.api+json' }
        });
        const { data, errors } = await response.json();
        return response.ok ? data : console.log("fetch error!", errors);
    }
    const getEpisodesData = async (url: string | undefined) => {
        const response: Response = await fetch(`${url}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/vnd.api+json' }
        });
        const { data, errors } = await response.json();
        return response.ok ? data : console.log("fetch error!", errors);
    }

    const animeData = await getAnimeData(params);
    const { relationships: { episodes: { links } } } = animeData;

    const episodesData = await getEpisodesData(links?.related);


    //console.log(episodesData);
    const props = {
        props: {
            animeData,
            episodesData
        }
    }

    // Pass post data to the page via props
    return props;
}

const Anime: NextPage<props> = ({ animeData, episodesData }: props) => {
    const context: any = useContext(AppContext);
    useEffect(() => {
        if (Object.entries(context).length > 0) {
            context?.setanimeSelected?.(animeData);
            context?.setEpisodes?.(episodesData);
        }
    }, [context.state.episodes, context.state.animeSelected]);

    return (
        <div className={styles.anime}>
            {
                Object.entries(context.state.episodes).length > 0 && Object.entries(context.state.animeSelected).length > 0 ?
                    <>
                        <DetailAnime animeData={animeData} />
                        <DescriptionAnime animeData={animeData} />
                        <PaginationComponent />
                        <CapitulesFilter episodesData={episodesData} animeData={animeData} />
                    </> : <LoaderScreen children={<Loader />} />

            }
        </div>
    )
}

export default Anime