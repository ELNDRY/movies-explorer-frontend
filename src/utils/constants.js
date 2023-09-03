import movie1 from '../images/movie1.jpg';
import movie2 from '../images/movie2.jpg';
import movie3 from '../images/movie3.jpg';
import movie4 from '../images/movie4.jpg';
import movie5 from '../images/movie5.jpg';
import movie6 from '../images/movie6.jpg';
import movie7 from '../images/movie7.jpg';
import movie8 from '../images/movie8.jpg';
import movie9 from '../images/movie9.jpg';
import movie10 from '../images/movie10.png';
import movie11 from '../images/movie11.jpg';
import movie12 from '../images/movie12.jpg';

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