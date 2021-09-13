import { Title } from './Title'
import { Games } from './games/Games'
import { Button } from 'react-bootstrap'
import { withRedirect } from '../common/hocs/withRedirect'
import { $currentUser, logout } from '../common/models/login'
import { useStore } from 'effector-react'

export default withRedirect(() => {
    const myGames = useStore($currentUser).games
    return (
        <>
            <Button onClick={() => logout()} className='right' variant='danger'>
                Log out
            </Button>
            <Title>Profile</Title>
            <h4>My Games</h4>
            {myGames.length ? (
                <Games>{myGames}</Games>
            ) : (
                <h4 className='red center'>You don't have bought games</h4>
            )}
        </>
    )
})
