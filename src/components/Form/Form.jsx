import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Form.css';

export const Form = (props) => {
    return (
        <div className="form">
            <Link className='form__logo-link' to='/'>
                <img src={logo} alt='Логотип Movies Explorer' />
            </Link>
            <h2 className="form__title">{props.title}</h2>
            <form className="form__container" onSubmit={props.onSubmit}>
                {props.children}
            </form> 
        </div >
    )
}