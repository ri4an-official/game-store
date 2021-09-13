import { Game } from '../common/models/types/Game'
import basket from '../common/images/add-to-cart.svg'
import { addGame } from '../common/models/cart'
export const AddToBasket = ({ children }: { children: Game }) => (
    <span
        onClick={() => addGame({ ...children, id: Date.now() })}
        className='right cart'
    >
        <img width='100%' height='100%' className='noblock' src={basket} />
    </span>
)
