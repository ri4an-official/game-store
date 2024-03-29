import { useStore } from 'effector-react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { $cart } from '../common/models/cart'
import { $currentUser, $isLogin } from '../common/models/login'
import basket from './../common/images/free-icon-shopping-4220891.svg'
import profile from './../common/images/profile.svg'
export const Menu = () => {
    const { login } = useStore($currentUser)
    const auth = useStore($isLogin)
    const count = useStore($cart).length
    return (
        <>
            <Navbar expand='lg' className='container navbar'>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='nav-tabs' role='tablist'>
                        <Nav.Item>
                            <Link className='navbar-brand' to='/'>
                                Game Store
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className='nav-link' to='/cart'>
                                <img src={basket} alt='basket' /> <span>Cart </span>
                                <span className='count'>{count || null}</span>
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            {!auth ? (
                                <Link className='nav-link' to='/login'>
                                    Sign In
                                </Link>
                            ) : (
                                <Link to='/profile' className='nav-link'>
                                    <img src={profile} alt='profile' />
                                    <b>{login}</b>
                                </Link>
                            )}
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
