import "./SearchForm.css";

export const SearchForm = () => {
    return (
        <div className="search-form">
            <form className="search-form__bar">
                <div className="search-form__icon"></div>
                <input
                    name="text"
                    className="search-form__input"
                    type="text"
                    placeholder="Фильм"
                    required
                ></input>
                <button className="search-form__button" aria-label="Искать"></button>
            </form>
            <div className="search-form__checkbox">
                <label className="search-form__switch">
                    <input
                        id="toggle-checkbox"
                        className="search-form__checkbox_toggle"
                        type="checkbox"
                    />
                    <span className="search-form__checkbox_slider" />
                </label>
                <p className="search-form__shorts">Короткометражки</p>
            </div>
        </div>
    );
}