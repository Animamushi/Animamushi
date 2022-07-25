import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Player from '@components/Player/Player';

type Props = {}
//const context = useContext(AppContext);
export const getStaticPaths: GetStaticPaths<{ episode: string }> = async () => {

    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}
// This also gets called at build time
export const getStaticProps: GetStaticProps = async ({ params }) => {
    console.log(params)
    const { episode } = params ?? {}
    let id, capitule;
    if (params !== undefined && Object.entries(params).length > 0 && episode) {
        id = episode[0];
        capitule = episode[1];
    }
    //console.log(episodesData);
    const props = {
        props: {
            id,
            capitule
        }
    }

    // Pass post data to the page via props
    return props;
}

const Watch = (props: Props) => {
    console.log(props);
    return (
        <div>
            <div className="player">
                {/* <video controls muted autoPlay crossOrigin="anonymous">
                    <source src="http://localhost:3600/api/v1/watch/video" type="video/mp4" />
                </video> */}
                <Player />
            </div>
        </div>
    )
}

export default Watch