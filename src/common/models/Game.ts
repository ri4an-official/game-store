export interface Game {
    id: number
    name: string
    rating: number
    price: number
    background_image: string
    slug: string
    description: string
    isBuy?: boolean
    key: string
}
export const withPrice = (g: Game) => ({
    ...g,
    price: Number((g.rating * 4.3).toFixed(2)),
})
