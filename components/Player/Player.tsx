import { Suspense, useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Loader, { LoaderScreen } from '@components/Loader/Loader'

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
        <Suspense fallback={<LoaderScreen><Loader /></LoaderScreen>}>
            <DynamicPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
        </Suspense>
    )
}

export default Player