export interface Good {
    id: number | string,
    name: string,
    author: string,
    cost: number,
    year: number,
    pathToImg: string,
    genre: string,
    songs: string[],
    favourite: boolean
}