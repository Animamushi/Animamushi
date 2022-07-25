import React from 'react'
import { GetServerSideProps } from 'next'
import Player from '@components/Player/Player'
type Props = {}

// This also gets called at build time
export const getServerSideProps: GetServerSideProps = async ({ params }) => {

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
                <Player />
            </div>
        </div>
    )
}

export default Watch