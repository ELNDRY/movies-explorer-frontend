import movie1 from '../images/movie1.png';
import movie2 from '../images/movie2.png';
import movie3 from '../images/movie3.png';
import movie4 from '../images/movie4.png';
import movie5 from '../images/movie5.png';
import movie6 from '../images/movie6.png';
import movie7 from '../images/movie7.png';
import movie8 from '../images/movie8.png';
import movie9 from '../images/movie9.png';
import movie10 from '../images/movie10.png';
import movie11 from '../images/movie11.png';
import movie12 from '../images/movie12.png';

export const movies = [
    {
        name: '33 слова о дизайне',
        duration: 6420,
        image: movie1,
        isSaved: true,
    },
    {
        name: '33 слова о дизайне',
        duration: 6420,
        image: movie2,
        isSaved: false,
    },
    {
        name: '33 слова о дизайне',
        duration: 6420,
        image: movie3,
        isSaved: true,
    },
    {
        name: '33 слова о дизайне',
        duration: 6420,
        image: movie4,
        isSaved: true,
    },
    {
        name: '33 слова о дизайне',
        duration: 6420,
        image: movie5,
        isSaved: true,
    },
    {
        name: '33 слова о дизайне',
        duration: 6420,
        image: movie6,
        isSaved: false,
    },
    {
        name: '33 слова о дизайне',
        duration: 6420,
        image: movie7,
        isSaved: false,
    },
    {
        name: '33 слова о дизайне',
        duration: 6420,
        image: movie8,
        isSaved: false,
    },
    {
        name: '33 слова о дизайне',
        duration: 6420,
        image: movie9,
        isSaved: false,
    },
    {
        name: '33 слова о дизайне',
        duration: 6420,
        image: movie10,
        isSaved: false,
    },
    {
        name: '33 слова о дизайне',
        duration: 6420,
        image: movie11,
        isSaved: false,
    },
    {
        name: '33 слова о дизайне',
        duration: 6420,
        image: movie12,
        isSaved: false,
    },
];

export const savedMovies = movies.filter((movie) => movie.isSaved);

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
