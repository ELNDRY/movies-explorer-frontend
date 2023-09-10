import React from 'react'
import './AboutMe.css';
import mePhoto from '../../images/mePhoto.jpg';

export const AboutMe = () => {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let dob = new Date(1998, 12, 14);
    let dobNow = new Date(today.getFullYear(), dob.getMonth, dob.getDate());
    let age;

    age = today.getFullYear() - dob.getFullYear();
    if (today < dobNow) {
        age = age - 1;
    }

    return (
        <section className="about-me">
            <h2 className='about-me__title'>Студент</h2>
            <div className='about-me__container'>
                <div className='about-me__wrapper'>
                    <div className="about-me__info-container">
                        <h3 className='about-me__name'>Елена</h3>
                        <h4 className='about-me__subtitle'>Фронтенд-разработчик, {age} лет</h4>
                        <p className='about-me__desctiption'>Я родилась и живу в Новосибирске, учусь на последнем курсе бакалавриата ФИТ НГУ по профилю "Программная инженерия и компьютерные науки".
                            Люблю слушать музыку, заниматься спортом, рисовать и конные прогулки.
                            В университете заинтересовалась web-&nbsp;разработкой, которую, к сожалению, не преподают в НГУ.
                            Поэтому параллельно с основной учебой решила пройти курс в Яндекс Практикуме. Теперь, когда у меня есть необходимые знания и практика, я нацелена на вакансию web-разработчика.</p>
                    </div>
                    <a rel='noreferrer' href='https://github.com/ELNDRY' className='about-me__git-link' target='_blank'>Github</a>
                </div>
                <img className="about-me__photo" src={mePhoto} alt='фото студента' />
            </div>
        </section>
    )
}