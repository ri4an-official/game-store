export class Game {
    id!: number
    name!: string
    rating!: number
    price!: number
    background_image!: string
    slug!: string
    description!: string
    isBuy?: boolean
    key!: string
    withPrice = () => ({
        ...this,
        price: Number((this.rating * 4.3).toFixed(2)),
    })
}
