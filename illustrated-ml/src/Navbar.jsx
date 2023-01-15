import './Navbar.css';

export default function Navbar() {
    return (
    <div>
        <input id="menu__toggle" type="checkbox" />
        <label class="menu__btn" for="menu__toggle">
            <span></span>
        </label>

        <ul class="menu__box" id="my-menu">
            <li id="index-li"><a class="menu__item current-page" href="./index.html">Home</a></li>
            <li><a class="menu__item" href="./pages/credits.html">Credits</a></li>
            <li><a class="menu__item" href="./pages/todos.html">To-dos</a></li>
            <li><a class="menu__item" href="./pages/references/machine-learning.html">References</a></li>
        </ul>
    </div>
    );
}