import Container from '../components/Container';
import { NavLink, Outlet, useOutlet, Link } from "react-router-dom"

export function Parent() {
    return Container(
        <>
            {useOutlet()
                ? <Outlet />
                :
                <>
                    <h1>Deep Learning Tuning Playbook</h1>
                    <nav>
                        <NavLink to="new-project">Guide for starting a new project</NavLink>
                        <NavLink to="improving-performance">A scientific approach to improving model performance</NavLink>
                    </nav>
                    <object type="image/svg+xml"
                        data={process.env.PUBLIC_URL + "/Robotics-bro.svg"}
                        className="full-screen-svg">
                    </object>
                </>

            }
        </>
    );
}

export function Playground() {
    return Container(
        <>
            <a id="new-project" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/deep-learning-tuning-playbook/img1.svg"} className="img-content mt-50"></object>

            <a id="improving-performance" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/deep-learning-tuning-playbook/img2.svg"} className="img-content mt-50"></object>

        </>
    );
}


