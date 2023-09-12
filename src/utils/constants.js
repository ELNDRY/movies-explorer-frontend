export const resolutionDesktop = {
    width: 1280,
    cardsCount: 12,
};

export const resolutionTablet = {
    width: 769,
    cardsCount: 8,
};

export const resolutionMobile = {
    width: 480,
    cardsCount: 5,
};

export const registerErrors = {
    name: {
        required: 'Поле Имя является обязательным.',
        minLength: 'Имя должно содержать не менее 2 символов.',
        maxLength: 'Имя не должно быть длиннее 30 символов.',
        pattern: 'Имя может содержать только латиницу, кириллицу и пробел, апостроф, дефис.',
    },
    email: {
        required: 'Поле E-mail является обязательным.',
        pattern: 'Некорректный email-адрес.',
    },
    password: {
        required: 'Поле Пароль является обязательным.',
        minLength: 'Пароль должен содержать не менее 6 символов.',
        maxLength: 'Пароль не должен быть длиннее 20 символов.',
        pattern: 'Пароль должен быть длиннее 5 символов и содержать по крайней мере 1 букву и 1 цифру'
    },
};

export const validName = /^[а-я А-ЯёЁa-zA-Z0-9'-]+$/;
export const validEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

//Minimum six characters, at least one letter and one number:
export const validPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/

export const SHORT_MOVIE_DURATION = 40;
export const SHOW_MORE_DESKTOP = 3;
export const SHOW_MORE_TABLET = 2;