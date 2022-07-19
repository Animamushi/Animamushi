import { useEffect, useState } from 'react'

function useInitialState(API: string) {
    const [initialState, setinitialState] = useState([]);

    useEffect(() => {
        async function fetchData() {

            const response: Response = await fetch(API);

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