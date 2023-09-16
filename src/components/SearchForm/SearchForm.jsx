import { useForm } from "react-hook-form";
import "./SearchForm.css";

export const SearchForm = ({ query, isSavedMovies, areShorts, onCheckboxClick, onSearch, isLoading }) => {
    const {
        register,
        handleSubmit,
    } = useForm({ reValidateMode: 'onSubmit' });

    const handleCheckboxToggle = (evt) => {
        const input = evt.target
        onCheckboxClick(input.checked);
        if (!isSavedMovies)
            localStorage.setItem('areShorts', input.checked);
    }

    return (
        <section className="search-form">
            <form className="search-form__form" onSubmit={handleSubmit(onSearch)}>
                <div className="search-form__bar">
                    <div className="search-form__icon"></div>
                    <input
                        className="search-form__input"
                        type="text"
                        placeholder="Фильм"
                        defaultValue={query?.query || ''}
                        disabled={isLoading}
                        {...register("query", {
                            // required: { value: true, message: 'Поле Фильм является обязательным' },
                        })}
                    ></input>
                    <button type="submit" className="search-form__button" disabled={isLoading} aria-label="Искать"></button>
                </div>
                <div className="search-form__checkbox">
                    <label className="search-form__switch">
                        <input
                            id="toggle-checkbox"
                            className="search-form__checkbox-toggle"
                            type="checkbox"
                            disabled={isLoading}
                            checked={areShorts}
                            onChange={handleCheckboxToggle}
                        />
                        <span className="search-form__checkbox-slider" />
                    </label>
                    <p className="search-form__shorts">Короткометражки</p>
                </div>
            </form>
        </section>
    );
}