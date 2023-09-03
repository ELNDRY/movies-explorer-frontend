import { Header } from '../Header/Header';
import './Form.css';

export const Form = (props) => {
    return (
        <div className="form__container">
            <Header />
            <h2 className="form__title">{props.title}</h2>
            <form>
                {props.children}
            </form>
        </div >
    )
}