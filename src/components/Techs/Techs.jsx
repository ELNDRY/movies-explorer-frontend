import React from "react";
import './Techs.css';

export const Techs = () => {
    return (
        <section className="techs">
            <h2 className="techs__title">Технологии</h2>
            <div className="techs__container">
                <h3 className="techs__subtitle">7 технологий</h3>
                <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <ul className="techs__items">
                    <li className="techs__item">
                        <p className="techs__item-text">HTML</p>
                    </li>
                    <li className="techs__item">
                        <p className="techs__item-text">CSS</p>
                    </li>
                    <li className="techs__item">
                        <p className="techs__item-text">JS</p>
                    </li>
                    <li className="techs__item">
                        <p className="techs__item-text">React</p>
                    </li>
                    <li className="techs__item">
                        <p className="techs__item-text">Git</p>
                    </li>
                    <li className="techs__item">
                        <p className="techs__item-text">Express.js</p>
                    </li>
                    <li className="techs__item">
                        <p className="techs__item-text">mongoDB</p>
                    </li>
                </ul>
            </div>
        </section>
    );
}
