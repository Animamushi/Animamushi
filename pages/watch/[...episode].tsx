import { GetStaticPaths, GetStaticProps } from 'next'
import Player from '@components/Player/Player';
import React from 'react'

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


    //console.log(episodesData);
    const props = {
        props: {}
    }

    // Pass post data to the page via props
    return props;
}

const Watch = (props: Props) => {
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