import './AboutProject.css';

export const AboutProject = () => {
    return (
        <section id="about-project" className="about-project">
            <h2 className='about-project__title'>О проекте</h2>
            <ul className="about-project__items">
                <li className="about-project__item">
                    <h3 className='about-project__subtitle'>Дипломный проект включал 5 этапов</h3>
                    <p className='about-project__description'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </li>
                <li>
                    <h3 className='about-project__subtitle'>На выполнение диплома ушло 5 недель</h3>
                    <p className='about-project__description'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </li>
            </ul>
            <div className='about-project__timeline'>
                <span className='about-project__deadline'>1 неделя</span>
                <span className='about-project__deadline'>4 недели</span>
                <p className='about-project__text'>Back-end</p>
                <p className='about-project__text'>Front-end</p>
            </div>
        </section>
    )
}