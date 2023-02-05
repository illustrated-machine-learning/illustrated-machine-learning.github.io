import Container from '../components/Container';
import { NavLink, Outlet, useOutlet, Link } from "react-router-dom"

export function Parent() {
    return Container(
        <>
            {useOutlet()
                ? <Outlet />
                :
                <>
                    <h1>Machine Learning Engineering</h1>
                    <nav>
                        <NavLink to="introduction">Introduction</NavLink>
                        <NavLink to="before-the-project-starts">Before the Project Starts</NavLink>
                        <NavLink to="data-collection-and-preparation">Data Collection and Preparation</NavLink>
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

export function Chapter01() {
    return Container(
        <>
            <div className='flex-row spaced margin-tb-30'>
                <a className="a-arrow arrow-disabled">
                    <img src={process.env.PUBLIC_URL + "/img/icons/left.png"} className="arrow" />
                </a>
                <Link className="a-arrow" to={`/machine-learning-engineering/before-the-project-starts`}>
                    <img src={process.env.PUBLIC_URL + "/img/icons/right.png"} className="arrow" />
                </Link>
            </div>

            <a id="supervised-learning" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning-engineering/ch01-supervised-learning.svg"} className="img-content"></object>

            <a id="unsupervised-learning" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning-engineering/ch01-unsupervised-learning.svg"} className="img-content mt-50"></object>

            <a id="semi-supervised-learning" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning-engineering/ch01-semi-supervised-learning.svg"} className="img-content mt-50"></object>

            <a id="reinforcement-learning" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning-engineering/ch01-reinforcement-learning.svg"} className="img-content mt-50"></object>

            <a id="data-used-directly-and-indirectly" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning-engineering/ch01-data-used-directly-and-indirectly.svg"} className="img-content mt-50"></object>

            <a id="raw-and-tidy-data" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning-engineering/ch01-raw-and-tidy-data.svg"} className="img-content mt-50"></object>

            <a id="training-and-holdout-sets" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning-engineering/ch01-training-and-holdout-sets.svg"} className="img-content mt-50"></object>

            <a id="baseline" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning-engineering/ch01-baseline.svg"} className="img-content mt-50"></object>

            <a id="machine-learning-pipeline" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning-engineering/ch01-machine-learning-pipeline.svg"} className="img-content mt-50"></object>

            <a id="parameters-vs-hyperparameters" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning-engineering/ch01-parameters-vs-hyperparameters.svg"} className="img-content mt-50"></object>

            <a id="classification-vs-regression" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning-engineering/ch01-classification-vs-regression.svg"} className="img-content mt-50"></object>

            <a id="model-based-vs-instance-based" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning-engineering/ch01-model-based-vs-instance-based.svg"} className="img-content mt-50"></object>

            <a id="shallow-vs-deep-learning" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning-engineering/ch01-shallow-vs-deep-learning.svg"} className="img-content mt-50"></object>

            <a id="training-vs-scoring" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning-engineering/ch01-training-vs-scoring.svg"} className="img-content mt-50"></object>

            <a id="when-to-use-and-not-to-use-ml" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning-engineering/ch01-when-to-use-and-not-to-use-ml.svg"} className="img-content mt-50"></object>

            <a id="what-is-mle" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning-engineering/ch01-what-is-mle.svg"} className="img-content mt-50"></object>

            <div className='flex-row spaced margin-tb-30'>
                <a className="a-arrow arrow-disabled">
                    <img src={process.env.PUBLIC_URL + "/img/icons/left.png"} className="arrow" />
                </a>
                <Link className="a-arrow" to={`/machine-learning-engineering/before-the-project-starts`}>
                    <img src={process.env.PUBLIC_URL + "/img/icons/right.png"} className="arrow" />
                </Link>
            </div>
        </>
    );
}

export function Chapter02() {
    return Container(
        <>
            <div className='flex-row spaced margin-tb-30'>
                <Link className="a-arrow" to={`/machine-learning-engineering/introduction`}>
                    <img src={process.env.PUBLIC_URL + "/img/icons/left.png"} className="arrow" />
                </Link>
                <Link className="a-arrow" to={`/machine-learning-engineering/data-collection-and-preparation`}>
                    <img src={process.env.PUBLIC_URL + "/img/icons/right.png"} className="arrow" />
                </Link>
            </div>

            <a id="prioritization-of-ml-projects-and-team-composition" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning-engineering/ch02-prioritization-of-ml-projects-and-team-composition.svg"} className="img-content"></object>

            <a id="estimating-complexity-of-a-ml-project" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning-engineering/ch02-estimating-complexity-of-a-ml-project.svg"} className="img-content mt-50"></object>

            <a id="defining-the-goal-of-a-ml-project" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning-engineering/ch02-defining-the-goal-of-a-ml-project.svg"} className="img-content mt-50"></object>

            <a id="why-ml-projects-fail" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning-engineering/ch02-why-ml-projects-fail.svg"} className="img-content mt-50"></object>



            <div className='flex-row spaced margin-tb-30'>
                <Link className="a-arrow" to={`/machine-learning-engineering/introduction`}>
                    <img src={process.env.PUBLIC_URL + "/img/icons/left.png"} className="arrow" />
                </Link>
                <Link className="a-arrow" to={`/machine-learning-engineering/data-collection-and-preparation`}>
                    <img src={process.env.PUBLIC_URL + "/img/icons/right.png"} className="arrow" />
                </Link>
            </div>
        </>
    );
}

export function Chapter03() {
    return Container(
        <>
            <div className='flex-row spaced margin-tb-30'>
                <Link className="a-arrow" to={`/machine-learning-engineering/before-the-project-starts`}>
                    <img src={process.env.PUBLIC_URL + "/img/icons/left.png"} className="arrow" />
                </Link>
                <a className="a-arrow arrow-disabled">
                    <img src={process.env.PUBLIC_URL + "/img/icons/right.png"} className="arrow" />
                </a>
            </div>

            <a id="questions-about-the-data" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning-engineering/ch03-questions-about-the-data.svg"} className="img-content"></object>

            <a id="common-problems-with-data-and-biases" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning-engineering/ch03-common-problems-with-data-and-biases.svg"} className="img-content mt-50"></object>

            <a id="characteristics-of-good-data" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning-engineering/ch03-characteristics-of-good-data.svg"} className="img-content mt-50"></object>

            <a id="causes-of-data-leakage" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning-engineering/ch03-causes-of-data-leakage.svg"} className="img-content mt-50"></object>

            <a id="data-partitioning" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning-engineering/ch03-data-partitionin.svg"} className="img-content mt-50"></object>

            <a id="dealing-with-missing-attributes" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning-engineering/ch03-dealing-with-missing-attributes.svg"} className="img-content mt-50"></object>

            <a id="dealing-with-imbalanced-data" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning-engineering/ch03-dealing-with-imbalanced-data.svg"} className="img-content mt-50"></object>

            <a id="data-sampling-strategies" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning-engineering/ch03-data-sampling-strategies.svg"} className="img-content mt-50"></object>

            <a id="data-storing" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning-engineering/ch03-data-storing.svg"} className="img-content mt-50"></object>

            <a id="data-versioning" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning-engineering/ch03-data-versioning.svg"} className="img-content mt-50"></object>

            <a id="documentation-and-metadata" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning-engineering/ch03-documentation-and-metadata.svg"} className="img-content mt-50"></object>

            <div className='flex-row spaced margin-tb-30'>
                <Link className="a-arrow" to={`/machine-learning-engineering/introduction`}>
                    <img src={process.env.PUBLIC_URL + "/img/icons/left.png"} className="arrow" />
                </Link>
                <a className="a-arrow arrow-disabled">
                    <img src={process.env.PUBLIC_URL + "/img/icons/right.png"} className="arrow" />
                </a>
            </div>
        </>
    );
}