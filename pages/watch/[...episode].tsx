import { GetServerSideProps } from 'next'
import Player from '@components/Player/Player'
type Props = {}

// This also gets called at build time
export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    const { episode } = params ?? {}
    let id, capitule;
    if (episode?.length !== undefined && episode?.length <= 2) {
        console.log(episode)
        console.log(episode?.length)
    }

    /* 
        if (params !== undefined && Object.entries(params).length === 1 && episode) {
            id = episode[0];
            capitule = episode[1];
        } */
    //console.log(episodesData);
    const props = {
        props: {}
    }

    // Pass post data to the page via props
    return props;
}

const Watch = (props: Props) => {
    //console.log(props);
    return (
        <div className="player">
            <Player />
        </div>
    )
}

export default Watch