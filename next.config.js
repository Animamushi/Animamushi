/* const {
    PHASE_DEVELOPMENT_SERVER,
    PHASE_PRODUCTION_BUILD,
} = require('next/constants')

module.exports = (phase) => {
    const isDev = phase === PHASE_DEVELOPMENT_SERVER
    const isProd = phase === PHASE_PRODUCTION_BUILD
    const isStaging =
        phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1'


    console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`)

    const env = {
        API: (() => {
            let ANIME , EPISODE, WATCH;
            if (isDev){ 
                ANIME=`http://localhost:5000/api/v1/anime`;
                
            }
            if (isProd) {
                return 'https://ancient-basin-14330.herokuapp.com'
            }
            if (isStaging) return 'https://ancient-basin-14330.herokuapp.com'
            return {ANIME,EPISODE,WATCH}
        })(),
    }
    return {
        env,
    }
} */