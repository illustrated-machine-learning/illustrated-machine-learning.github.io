import './Page.css';
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="content-container" style={{ textAlign: 'center' }}>
            <h1 style={{ margin: 0 }}> Illustrated Machine Learning </h1>
            <div className='flex-row' style={{ marginTop: 10 + 'px' }} >
                <img className='image-rotation' src={process.env.PUBLIC_URL + "/gear.png"} />
                <Link className="menu__item" to={`/`}>Return to Homepage</Link>
            </div>
            <div className="container-img">
                <object type="image/svg+xml" data={process.env.PUBLIC_URL + '/404.svg'} className="image-title full-screen-svg"></object>
            </div>
        </div>
    );
}