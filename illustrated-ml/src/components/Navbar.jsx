import './Navbar.css';
import {  Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function Navbar() {
    return (
    <div>
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle">
            <span></span>
        </label>

        <ul className="menu__box" id="my-menu">
            <li id="index-li">
                <Link className="menu__item current-page" to={`/`}>Home</Link>
            </li>
            <li>
                <Link className="menu__item" to={`/machine-learning`}>Machine Learning</Link>
            </li>
            <li>
                <HashLink className="menu__item" to={`/machine-learning/ml-sampling-resampling#sampling`}>TestAnk</HashLink>
            </li>
            <li>
                <HashLink className="menu__item" to={`/machine-learning/ml-sampling-resampling#under-oversampling`}>OverSampling</HashLink>
            </li>
            <li>
                <Link className="menu__item" to={`/computer-vision`}>Computer Vision</Link>
            </li>
            <li>
                <Link className="menu__item" to={`/credits`}>Credits</Link>
            </li>
            <li>
                <Link className="menu__item" to={`/todos`}>To-dos</Link>
            </li>
            <li>
                <Link className="menu__item" to={`/news`}>News</Link>
            </li>
            <li>
                <Link className="menu__item" to={`/references`}>References</Link>
            </li>
        </ul>
    </div>
    );
}