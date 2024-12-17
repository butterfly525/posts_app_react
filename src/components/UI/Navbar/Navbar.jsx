import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../button/MyButton';
import { AuthContext } from '../../../context';

const Navbar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext)
    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }
    return (
        <div className='navbar'>

            <div className='navbar__links'>
                <Link className='navbar__link' to='/about'>О сайте</Link>
                <Link className='navbar__link' to='/posts'>Посты</Link>
                <Link className='navbar__link' to='/login'>Авторизоваться</Link>

            </div>
            <MyButton onClick={logout}>Выйти</MyButton>
        </div>);
}

export default Navbar;