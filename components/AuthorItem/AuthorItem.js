import React from 'react';
import { prefixLink } from 'gatsby-helpers';
import './AuthorItem.scss';

const AuthorItem = () => {
    const emailReversed = 'moc.liamg@lp.usyzrk';
    const emailCorrect = emailReversed.split('').reverse().join('');

    return (
        <div className="author-item">
            <img
                src={prefixLink('/static/img/profile-pic.jpg')}
                alt="author picture"
                className="author-item__image"
            />
            <div className="author-item__description">
                <p>Hej, nazywam się <strong>Krzysiek Urbas</strong> i witam na moim blogu.</p>
                <p>
                    Moim celem jest pokazanie, jak można <strong>być szczęśliwym w zawodzie programisty</strong>.
                    Nie ważne czy jesteś juniorem, czy seniorem.
                    Chce pokazać, na co zwracać uwagę w pracy, czego się uczyć, jak się rozwijać.
                    Na co uważać i jakich ludzi unikać. Jak znaleźć pracę i się w niej spełniać.
                    Jak nie pracować nadgodzin i unikać stresu.
                    Jak mieć także życie po pracy i jak to wszystko może prowadzić do pełnego i szczęśliwego życia.
                </p>
                <div className="author-item__contact">
                    <span className="author-item__contact-label">Przywitaj się:</span>
                    <ul className="author-item__contact-list">
                        <li className="author-item__contact-item">
                            <a href={`mailto:${emailCorrect}`}>napisz do mnie</a>
                        </li>
                        <li className="author-item__contact-item">
                            <a href="https://twitter.com/krzysu" target="_blank">w serwisie Twitter</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AuthorItem;
