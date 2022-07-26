import { GetServerSideProps } from 'next'
import Player from '@components/Player/Player'
type WatchProps = {
    id: number,
    capitule: number
}

// This also gets called at build time
export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    const { episode } = params ?? {}
    let id, capitule;
    if (episode && episode?.length > 1) {
        id = episode[0];
        capitule = episode[1];
    }
    const props = {
        props: {
            id,
            capitule
        }
    }

    // Pass post data to the page via props
    return props;
}

const Watch = (props: WatchProps) => {
    console.log(props);
    return (
        <div className="player">
            <Player />
        </div>
    )
}

export default Watch