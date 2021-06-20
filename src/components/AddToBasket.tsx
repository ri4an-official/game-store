import { Game } from '../common/models/Game'
import basket from '../common/images/add-to-cart.svg'
import { addGame } from '../common/models/cart'
export const AddToBasket = ({ children }: { children: Game }) => (
    <span
        onClick={(e) => {
            e.stopPropagation() //! ВОЗМОЖНО НЕ РАБОТАЕТ
            addGame({ ...children, id: Date.now() })
        }}
        className='right cart'
    >
        <img width='100%' height='100%' className='noblock' src={basket} />
    </span>
)
