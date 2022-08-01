import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { LOGIN, PASSWORD } from '../../constants/constants'
import { login, password } from '../../redux/actions/actions'
import './style.css'


export const LoginPage = () => {
    const state = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const handlerLogin = (ev) => {
        dispatch(login(LOGIN, ev.target.value))
    }

    const handlerPassword = (ev) => {
        dispatch(password(PASSWORD, ev.target.value))
    }

    return (
        <form className="form">
            <input
                className='form__input'
                onChange={handlerLogin} 
            />
            <input
                className='form__input'
                onChange={handlerPassword} 
            />
            <Link
                className={`form__link ${
                    state.login === 'developer12' &&
                    state.password === '123456' 
                    ? '' 
                    : 'form__link--disabled'}`}
                to='/profile'
            >
                Sign in
            </Link>
        </form>
    )
}
