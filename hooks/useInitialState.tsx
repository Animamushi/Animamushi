import { useEffect, useState } from 'react'

function useInitialState() {
    const [initialState, setinitialState] = useState({});

    useEffect(() => {
        async function fetchData() {
            const response: Response = await fetch("https://kitsu.io/api/edge/trending/anime?page[limit]=10&page[offset]=0", {
                method: 'GET',
                headers: { 'Content-Type': 'application/vnd.api+json' }
            });

            const { data, errors } = await response.json();
            if (response.ok) {
                setinitialState(data)
            } else {
                console.log("fetch error!", errors)
            }
        }

        fetchData();
    }, [])

    return initialState;
}

export default useInitialState