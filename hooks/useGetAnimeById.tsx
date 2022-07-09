import { useEffect, useState } from 'react'

function useGetAnimeById(id: number | string) {
    const [animeData, setanimeData] = useState({});
    const [episodes, setepisodes] = useState({});
    useEffect(() => {
        async function fetchData() {
            const response: Response = await fetch(`https://kitsu.io/api/edge/anime/${id}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/vnd.api+json' }
            });

            const { data, errors } = await response.json();
            console.log(data?.relationships?.episodes)
            if (response.ok) {
                setanimeData(data)
            } else {
                console.log("fetch error!", errors)
            }
        }

        fetchData();
    }, [])

    return animeData;
}

export default useGetAnimeById