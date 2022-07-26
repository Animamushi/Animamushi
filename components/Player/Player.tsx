import { Suspense, useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
// /import ReactPlayer from 'react-player'

const DynamicPlayer = dynamic(() => import('react-player'), { suspense: true, ssr: false });

const Player = () => {
    //rehydration Shit 💩 on React 18
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        setHasMounted(true);
    }, []);
    if (!hasMounted) {
        return null;
    }
    return (
        <Suspense fallback={`Loading...`}>
            <DynamicPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
        </Suspense>
    )
}

export default Player