import { Suspense } from 'react'
import dynamic from 'next/dynamic'
//import ReactPlayer from 'react-player'

const DynamicPlayer = dynamic(() => import('react-player'), { suspense: true });

const Player = () => {
    return (
        <div>
            <Suspense fallback={`Loading...`}>
                <DynamicPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
            </Suspense>
        </div>
    )
}

export default Player