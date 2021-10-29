export interface Series {
    score: number
    show: Show
}
export interface Show {
    name: string
    image: {
        medium: string
        original: string
    }
    genres: string[]
    summary: string
    rating: {
        average: number
    }
    url: string
}
