import Container from '../components/Container';
import { NavLink, Outlet, useOutlet, Link } from "react-router-dom"

export function Parent() {
    return Container(
        <>
            {useOutlet()
                ? <Outlet />
                :
                <>
                    <h1>Projective Geometry</h1>
                    <nav>
                        <NavLink to="introduction">Introduction</NavLink>
                        <NavLink to="image-formation">Image formation</NavLink>
                        <NavLink to="structure-from-motion">Structure from motion</NavLink>
                        <NavLink to="stereo-reconstruction">Stereo reconstruction</NavLink>
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

export function Lecture01() {
    return Container(
        <>
            <div className='flex-row spaced margin-tb-30'>
                <a className="a-arrow arrow-disabled">
                    <img src={process.env.PUBLIC_URL + "/img/icons/left.png"} className="arrow" />
                </a>
                <Link className="a-arrow" to={`/projective-geometry/image-formation`}>
                    <img src={process.env.PUBLIC_URL + "/img/icons/right.png"} className="arrow" />
                </Link>
            </div>

            <a id="organization" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/projective-geometry/l01-organization.svg"} className="img-content"></object>

            <a id="introduction" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/projective-geometry/l01-intro.svg"} className="img-content mt-50"></object>


            <div className='flex-row spaced margin-tb-30'>
                <a className="a-arrow arrow-disabled">
                    <img src={process.env.PUBLIC_URL + "/img/icons/left.png"} className="arrow" />
                </a>
                <Link className="a-arrow" to={`/projective-geometry/image-formation`}>
                    <img src={process.env.PUBLIC_URL + "/img/icons/right.png"} className="arrow" />
                </Link>
            </div>
        </>
    );
}

export function Lecture02() {
    return Container(
        <>
            <div className='flex-row spaced margin-tb-30'>
                <Link className="a-arrow" to={`/projective-geometry/introduction`}>
                    <img src={process.env.PUBLIC_URL + "/img/icons/left.png"} className="arrow" />
                </Link>
                <Link className="a-arrow" to={`/projective-geometry/structure-from-motion`}>
                    <img src={process.env.PUBLIC_URL + "/img/icons/right.png"} className="arrow" />
                </Link>
            </div>

            <a id="2dprimitive" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/projective-geometry/l02-2d-primitives.svg"} className="img-content"></object>

            <a id="3dprimitive" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/projective-geometry/l02-3d-primitives.svg"} className="img-content mt-50"></object>

            <a id="2dtransform" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/projective-geometry/l02-2d-transformations.svg"} className="img-content mt-50"></object>

            <a id="pinhole" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/projective-geometry/l02-geometric-01.svg"} className="img-content mt-50"></object>

            <a id="projection" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/projective-geometry/l02-geometric-02.svg"} className="img-content mt-50"></object>

            <a id="orthographic" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/projective-geometry/l02-geometric-03.svg"} className="img-content mt-50"></object>

            <a id="perspective" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/projective-geometry/l02-geometric-04.svg"} className="img-content mt-50"></object>

            <a id="changing-transformation" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/projective-geometry/l02-geometric-05.svg"} className="img-content mt-50"></object>

            <a id="distortion" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/projective-geometry/l02-geometric-06.svg"} className="img-content mt-50"></object>

            <a id="rendering" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/projective-geometry/l02-formation-01.svg"} className="img-content mt-50"></object>

            <a id="optics" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/projective-geometry/l02-formation-02.svg"} className="img-content mt-50"></object>

            <a id="thin-lens" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/projective-geometry/l02-formation-03.svg"} className="img-content mt-50"></object>

            <a id="dof" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/projective-geometry/l02-formation-04.svg"} className="img-content mt-50"></object>

            <a id="aberration-vignetting" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/projective-geometry/l02-formation-05.svg"} className="img-content mt-50"></object>

            <a id="image-sensing" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/projective-geometry/l02-sensing-01.svg"} className="img-content mt-50"></object>

            <div className='flex-row spaced margin-tb-30'>
                <Link className="a-arrow" to={`/projective-geometry/introduction`}>
                    <img src={process.env.PUBLIC_URL + "/img/icons/left.png"} className="arrow" />
                </Link>
                <Link className="a-arrow" to={`/projective-geometry/structure-from-motion`}>
                    <img src={process.env.PUBLIC_URL + "/img/icons/right.png"} className="arrow" />
                </Link>
            </div>
        </>
    );
}

export function Lecture03() {
    return Container(
        <>
            <div className='flex-row spaced margin-tb-30'>
                <Link className="a-arrow" to={`/projective-geometry/image-formation`}>
                    <img src={process.env.PUBLIC_URL + "/img/icons/left.png"} className="arrow" />
                </Link>
                <Link className="a-arrow" to={`/projective-geometry/stereo-reconstruction`}>
                    <img src={process.env.PUBLIC_URL + "/img/icons/right.png"} className="arrow" />
                </Link>
            </div>

            <a id="preliminaries" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/projective-geometry/l03-preliminaries.svg"} className="img-content"></object>

            <a id="epipolar-geometry" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/projective-geometry/l03-two-frames-sfm-01.svg"} className="img-content mt-50"></object>

            <a id="epipolar-geometry-math" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/projective-geometry/l03-two-frames-sfm-02.svg"} className="img-content mt-50"></object>

            <a id="triangularization" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/projective-geometry/l03-two-frames-sfm-03.svg"} className="img-content mt-50"></object>

            <a id="factorization" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/projective-geometry/l03-factorization-01.svg"} className="img-content mt-50"></object>

            <a id="bundle-adjustment" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/projective-geometry/l03-ba-01.svg"} className="img-content mt-50"></object>

            <a id="incremental-sfm" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/projective-geometry/l03-ba-02.svg"} className="img-content mt-50"></object>



            <div className='flex-row spaced margin-tb-30'>
                <Link className="a-arrow" to={`/projective-geometry/image-formation`}>
                    <img src={process.env.PUBLIC_URL + "/img/icons/left.png"} className="arrow" />
                </Link>
                <Link className="a-arrow" to={`/projective-geometry/stereo-reconstruction`}>
                    <img src={process.env.PUBLIC_URL + "/img/icons/right.png"} className="arrow" />
                </Link>
            </div>
        </>
    );
}

export function Lecture04() {
    return Container(
        <>
            <div className='flex-row spaced margin-tb-30'>
                <Link className="a-arrow" to={`/projective-geometry/structure-from-motion`}>
                    <img src={process.env.PUBLIC_URL + "/img/icons/left.png"} className="arrow" />
                </Link>
                <a className="a-arrow arrow-disabled">
                    <img src={process.env.PUBLIC_URL + "/img/icons/right.png"} className="arrow" />
                </a>
            </div>

            <a id="stereo-matching" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/projective-geometry/l04-preliminaries-01.svg"} className="img-content"></object>

            <a id="epipolar-geometry" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/projective-geometry/l04-preliminaries-02.svg"} className="img-content mt-50"></object>

            <a id="rectification" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/projective-geometry/l04-preliminaries-03.svg"} className="img-content mt-50"></object>

            <a id="disparity" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/projective-geometry/l04-preliminaries-04.svg"} className="img-content mt-50"></object>

            <a id="correspondence-ambiguity" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/projective-geometry/l04-block-matching-01.svg"} className="img-content mt-50"></object>

            <a id="block-matching" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/projective-geometry/l04-block-matching-02.svg"} className="img-content mt-50"></object>


            <div className='flex-row spaced margin-tb-30'>
                <Link className="a-arrow" to={`/projective-geometry/structure-from-motion`}>
                    <img src={process.env.PUBLIC_URL + "/img/icons/left.png"} className="arrow" />
                </Link>
                <a className="a-arrow arrow-disabled">
                    <img src={process.env.PUBLIC_URL + "/img/icons/right.png"} className="arrow" />
                </a>
            </div>
        </>
    );
}