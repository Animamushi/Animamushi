interface Anime {
    id: number,
    links: Object[],
    attributes?: Record<k, t>,
    relationships: Object[]
}
interface Episode {
    id: number | string,
    type: string,
    links: Object[],
    attributes?: Record<k, t>,
    relationships: Object[]
}
interface AttributesAnime {
    createdAt: string,
    updatedAt: string,
    slug: string,
    synopsis: string,
    description: string,
    coverImageTopOffset: number,
    titles: Object,
    canonicalTitle: string,
    abbreviatedTitles: [],
    averageRating: string,
    ratingFrequencies: {},
    userCount?: number,
    favoritesCount?: number,
    startDate?: string,
    endDate?: null | string,
    nextRelease?: string,
    popularityRank?: number,
    ratingRank?: number,
    ageRating?: string,
    ageRatingGuide?: string,
    subtype?: string,
    status?: string,
    tba?: null | string,
    posterImage?: {} | any,
    coverImage?: {} | any,
    episodeCount?: null | any,
    episodeLength?: number,
    totalLength?: number,
    youtubeVideoId?: string,
    showType?: string,
    nsfw?: boolean
}

type AnimamushiState = {
    animeList?: Anime[],
    animeSelected?: Anime,
    episodes?: Episode
}
interface AnimamushiContext {
    state: AnimamushiState,
    setanimeSelected: () => void,
    setEpisodes: () => void,
    setAnimeList: (al: any) => void
}
