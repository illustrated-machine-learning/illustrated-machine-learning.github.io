import './Navbar.css';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';

export default function Navbar() {

    const [mlCollapsed, setMlCollapsed] = useState(true)
    const [pgCollapsed, setPgCollapsed] = useState(true)
    const [mleCollapsed, setmleCollapsed] = useState(true)

    const toggleML = () => {

        if (mlCollapsed && !pgCollapsed) {
            setPgCollapsed(true)
        }

        if (mlCollapsed && !mleCollapsed) {
            setmleCollapsed(true);
        }

        setMlCollapsed(!mlCollapsed)
    };

    const toggleMLE = () => {

        if (mleCollapsed && !mlCollapsed) {
            setMlCollapsed(true)
        }

        if (mleCollapsed && !pgCollapsed) {
            setPgCollapsed(true);
        }

        setmleCollapsed(!mleCollapsed)
    };

    const togglePG = () => {

        if (pgCollapsed && !mlCollapsed) {
            setMlCollapsed(true)
        }

        if (pgCollapsed && !mleCollapsed) {
            setmleCollapsed(true);
        }

        setPgCollapsed(!pgCollapsed)
    };

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
                    <div>
                        <button class="menu__item collapsible" onClick={toggleML}>Machine Learning {mlCollapsed ? "▼" : "►"}</button>
                        {mlCollapsed === false &&
                            <div className='content' style={{ display: 'block' }}>
                                <ol>
                                    <li>
                                        <Link className="menu__item menu__item__list" to={`/machine-learning/categorization`}>Categorization</Link>
                                    </li>
                                    <li>
                                        <Link className="menu__item menu__item__list" to={`/machine-learning/ml-sampling-resampling`}>Sampling and Resampling</Link>
                                    </li>
                                    <ol>
                                        <li>
                                            <HashLink className="menu__item menu__item__list" to={`/machine-learning/ml-sampling-resampling#sampling`}>Sampling</HashLink>
                                        </li>
                                        <ol>
                                            <li>
                                                <HashLink className="menu__item menu__item__list" to={`/machine-learning/ml-sampling-resampling#sampling`}>Uniform</HashLink>
                                            </li>
                                            <li>
                                                <HashLink className="menu__item menu__item__list" to={`/machine-learning/ml-sampling-resampling#sampling`}>Reservoir</HashLink>
                                            </li>
                                            <li>
                                                <HashLink className="menu__item menu__item__list" to={`/machine-learning/ml-sampling-resampling#sampling`}>Stratified</HashLink>
                                            </li>
                                        </ol>
                                        <li>
                                            <HashLink className="menu__item menu__item__list" to={`/machine-learning/ml-sampling-resampling#resampling`}>Resampling</HashLink>
                                        </li>
                                        <ol>
                                            <li>
                                                <HashLink className="menu__item menu__item__list" to={`/machine-learning/ml-sampling-resampling#resampling`}>Cross Validation</HashLink>
                                            </li>
                                            <li>
                                                <HashLink className="menu__item menu__item__list" to={`/machine-learning/ml-sampling-resampling#resampling`}>Bootstrapping</HashLink>
                                            </li>
                                        </ol>
                                        <li>
                                            <HashLink className="menu__item menu__item__list" to={`/machine-learning/ml-sampling-resampling#under-oversampling`}>Under/Over-sampling</HashLink>
                                        </li>
                                        <ol>
                                            <li>
                                                <HashLink className="menu__item menu__item__list" to={`/machine-learning/ml-sampling-resampling#under-oversampling`}>Undersampling</HashLink>
                                            </li>
                                            <li>
                                                <HashLink className="menu__item menu__item__list" to={`/machine-learning/ml-sampling-resampling#under-oversampling`}>Oversampling</HashLink>
                                            </li>
                                            <li>
                                                <HashLink className="menu__item menu__item__list" to={`/machine-learning/ml-sampling-resampling#under-oversampling`}>Hybrid</HashLink>
                                            </li>
                                        </ol>
                                    </ol>
                                    <li>
                                        <Link className="menu__item menu__item__list" to={`/machine-learning/bias-variance`}>Bias/Variance</Link>
                                    </li>
                                    <li><span className="menu__item menu__item__list">Supervised Learning</span></li>
                                    <ol>
                                        <li>
                                            <Link className="menu__item menu__item__list" to={`/machine-learning/linear-algorithms`}>Linear Algorithms</Link>
                                        </li>
                                        <ol>
                                            <li>
                                                <HashLink className="menu__item menu__item__list" to={`/machine-learning/linear-algorithms#linear-regression`}>Linear Regression</HashLink>
                                            </li>
                                            <li>
                                                <HashLink className="menu__item menu__item__list" to={`/machine-learning/linear-algorithms#regularization`}>Regularization</HashLink>
                                            </li>
                                            <li>
                                                <HashLink className="menu__item menu__item__list" to={`/machine-learning/linear-algorithms#logistic-regression`}>Logistic Regression</HashLink>
                                            </li>
                                            <li>
                                                <HashLink className="menu__item menu__item__list" to={`/machine-learning/linear-algorithms#support-vector-machines`}>Support Vector Machines</HashLink>
                                            </li>
                                            <li>
                                                <HashLink className="menu__item menu__item__list" to={`/machine-learning/linear-algorithms#linear-discriminant-analysis`}>Linear Discriminant Analysis</HashLink>
                                            </li>
                                        </ol>
                                        <li>
                                            <Link className="menu__item menu__item__list" to={`/machine-learning/decision-tree`}>Decision Tree</Link>
                                        </li>
                                        <li>
                                            <Link className="menu__item menu__item__list" to={`/machine-learning/ensemble`}>Ensemble</Link>
                                        </li>
                                        <ol>
                                            <li>
                                                <HashLink className="menu__item menu__item__list" to={`/machine-learning/ensemble#category`}>Categories</HashLink>
                                            </li>
                                            <li>
                                                <HashLink className="menu__item menu__item__list" to={`/machine-learning/ensemble#random-forest`}>Random Forest</HashLink>
                                            </li>
                                            <li>
                                                <HashLink className="menu__item menu__item__list" to={`/machine-learning/ensemble#adaboost`}>AdaBoost</HashLink>
                                            </li>
                                            <li>
                                                <HashLink className="menu__item menu__item__list" to={`/machine-learning/ensemble#gbm`}>GBM</HashLink>
                                            </li>
                                            <li>
                                                <HashLink className="menu__item menu__item__list" to={`/machine-learning/ensemble#xgboost`}>XGBoost</HashLink>
                                            </li>
                                        </ol>
                                        <li>
                                            <Link className="menu__item menu__item__list" to={`/machine-learning/distance-based`}>Distance based algorithms</Link>
                                        </li>
                                        <ol>
                                            <li>
                                                <Link className="menu__item menu__item__list" to={`/machine-learning/distance-based`}>Metrics</Link>
                                            </li>
                                            <li>
                                                <HashLink className="menu__item menu__item__list" to={`/machine-learning/distance-based#knn`}>K-Nearest Neighbors</HashLink>
                                            </li>
                                        </ol>
                                        <li>
                                            <Link className="menu__item menu__item__list" to={`/machine-learning/optimization`}>Optimization</Link>
                                        </li>
                                        <ol>
                                            <li>
                                                <HashLink className="menu__item menu__item__list" to={`/machine-learning/optimization#erm`}>ERM Paradigm</HashLink>
                                            </li>
                                            <li>
                                                <HashLink className="menu__item menu__item__list" to={`/machine-learning/optimization#gd`}>Batch Gradient Descent</HashLink>
                                            </li>
                                            <li>
                                                <HashLink className="menu__item menu__item__list" to={`/machine-learning/optimization#sgd`}>Stochastic Gradient Descent</HashLink>
                                            </li>
                                            <li>
                                                <HashLink className="menu__item menu__item__list" to={`/machine-learning/optimization#mini`}>Minibatch Gradient Descent</HashLink>
                                            </li>
                                            <li>
                                                <HashLink className="menu__item menu__item__list" to={`/machine-learning/optimization#momentum`}>Momentum</HashLink>
                                            </li>
                                            <li>
                                                <HashLink className="menu__item menu__item__list" to={`/machine-learning/optimization#nesterov-momentum`}>Nesterov Momentum</HashLink>
                                            </li>
                                            <li>
                                                <HashLink className="menu__item menu__item__list" to={`/machine-learning/optimization#adagrad`}>Adagrad</HashLink>
                                            </li>
                                            <li>
                                                <HashLink className="menu__item menu__item__list" to={`/machine-learning/optimization#RMSProp`}>RMSProp</HashLink>
                                            </li>
                                            <li>
                                                <HashLink className="menu__item menu__item__list" to={`/machine-learning/optimization#adam`}>Adam</HashLink>
                                            </li>
                                        </ol>
                                        <li>
                                            <Link className="menu__item menu__item__list" to={`/machine-learning/loss-functions`}>Loss functions</Link>
                                        </li>
                                        <ol>
                                            <li>
                                                <HashLink className="menu__item menu__item__list" to={`/machine-learning/loss-functions#classification`}>Cross Entopy</HashLink>
                                            </li>
                                            <li>
                                                <HashLink className="menu__item menu__item__list" to={`/machine-learning/loss-functions#classification`}>Hinge Loss</HashLink>
                                            </li>
                                            <li>
                                                <HashLink className="menu__item menu__item__list" to={`/machine-learning/loss-functions#regression`}>MAE</HashLink>
                                            </li>
                                            <li>
                                                <HashLink className="menu__item menu__item__list" to={`/machine-learning/loss-functions#regression`}>MSE</HashLink>
                                            </li>
                                        </ol>
                                        <li>
                                            <Link className="menu__item menu__item__list" to={`/machine-learning/metrics`}>Model Evaluation</Link>
                                        </li>
                                        <ol>
                                            <li>
                                                <Link className="menu__item menu__item__list" to={`/machine-learning/metrics`}>Classification</Link>
                                            </li>
                                            <li>
                                                <HashLink className="menu__item menu__item__list" to={`/machine-learning/metrics#regression`}>Regression</HashLink>
                                            </li>
                                        </ol>
                                    </ol>
                                    <li><span className="menu__item menu__item__list">Unsupervised Learning</span></li>
                                    <ol>
                                        <li>
                                            <Link className="menu__item menu__item__list" to={`/machine-learning/clustering`}>Clustering</Link>
                                        </li>

                                        <ol>
                                            <li>
                                                <HashLink className="menu__item menu__item__list" to={`/machine-learning/clustering#kmeans`}>K-Means</HashLink>
                                            </li>
                                            <li>
                                                <HashLink className="menu__item menu__item__list" to={`/machine-learning/clustering#hierarchical`}>Hierarchical clustering</HashLink>
                                            </li>
                                            <li>
                                                <HashLink className="menu__item menu__item__list" to={`/machine-learning/clustering#dbscan`}>DBSCAN</HashLink>
                                            </li>
                                            <li>
                                                <HashLink className="menu__item menu__item__list" to={`/machine-learning/clustering#validity`}>Clustering validity</HashLink>
                                            </li>
                                        </ol>

                                        <li>
                                            <Link className="menu__item menu__item__list" to={`/machine-learning/dimensionality-reduction`}>Dimensionality Reduction</Link>
                                        </li>

                                        <ol>
                                            <li>
                                                <HashLink className="menu__item menu__item__list" to={`/machine-learning/dimensionality-reduction#pca`}>PCA</HashLink>
                                            </li>
                                            <li>
                                                <HashLink className="menu__item menu__item__list" to={`/machine-learning/dimensionality-reduction#ica`}>ICA</HashLink>
                                            </li>
                                            <li>
                                                <HashLink className="menu__item menu__item__list" to={`/machine-learning/dimensionality-reduction#lda`}>LDA</HashLink>
                                            </li>
                                            <li>
                                                <HashLink className="menu__item menu__item__list" to={`/machine-learning/dimensionality-reduction#tsne`}>tSNE</HashLink>
                                            </li>
                                        </ol>
                                    </ol>
                                    <li>
                                        <Link className="menu__item menu__item__list" to={`/machine-learning/tuning`}>Hyperparameters tuning</Link>
                                    </li>
                                    <ol>
                                        <li>
                                            <Link className="menu__item menu__item__list" to={`/machine-learning/tuning`}>Grid Search</Link>
                                        </li>
                                        <li>
                                            <Link className="menu__item menu__item__list" to={`/machine-learning/tuning`}>Random Search</Link>
                                        </li>
                                        <li>
                                            <Link className="menu__item menu__item__list" to={`/machine-learning/tuning`}>Coarse-to-Fine search</Link>
                                        </li>
                                        <li>
                                            <HashLink className="menu__item menu__item__list" to={`/machine-learning/tuning#sensitivity`}>Sensitivity</HashLink>
                                        </li>
                                    </ol>
                                </ol>
                            </div>
                        }
                    </div>
                </li>
                <li>
                    <Link className="menu__item" to={`/machine-learning-engineering`}>Machine Learning Engineering</Link>
                </li>
                <div>
                    <button class="menu__item collapsible" onClick={togglePG}>Projective Geometry {pgCollapsed ? "▼" : "►"}</button>
                    {pgCollapsed === false &&
                        <div className='content' style={{ display: 'block' }}>
                            <ol>
                                <li>
                                    <Link className="menu__item menu__item__list" to={`/projective-geometry/lecture-01`}>Lecture 1</Link>
                                </li>
                                <ol>
                                    <li>
                                        <HashLink className="menu__item menu__item__list" to={`/projective-geometry/lecture-01#organization`}>Uniform</HashLink>
                                    </li>
                                    <li>
                                        <HashLink className="menu__item menu__item__list" to={`/projective-geometry/lecture-01#introduction`}>Reservoir</HashLink>
                                    </li>
                                </ol>
                                <li>
                                    <Link className="menu__item menu__item__list" to={`/projective-geometry/lecture-02`}>Lecture 2</Link>
                                </li>
                                <ol>
                                    <li>
                                        <HashLink className="menu__item menu__item__list" to={`/projective-geometry/lecture-02#2dprimitive`}>Primitives and transformations</HashLink>
                                    </li>
                                    <ol>
                                        <li>
                                            <HashLink className="menu__item menu__item__list" to={`/projective-geometry/lecture-02#2dprimitive`}>2D primitives</HashLink>
                                        </li>
                                        <li>
                                            <HashLink className="menu__item menu__item__list" to={`/projective-geometry/lecture-02#3dprimitive`}>3D primitives</HashLink>
                                        </li>
                                        <li>
                                            <HashLink className="menu__item menu__item__list" to={`/projective-geometry/lecture-02#2dtransform`}>2D transformations</HashLink>
                                        </li>
                                    </ol>
                                    <li>
                                        <HashLink className="menu__item menu__item__list" to={`/projective-geometry/lecture-02#pinhole`}>Geometric image formation</HashLink>
                                    </li>
                                    <ol>
                                        <li>
                                            <HashLink className="menu__item menu__item__list" to={`/projective-geometry/lecture-02#pinhole`}>Pinhole camera</HashLink>
                                        </li>
                                        <li>
                                            <HashLink className="menu__item menu__item__list" to={`/projective-geometry/lecture-02#projection`}>Projection models</HashLink>
                                        </li>
                                        <ol>
                                            <li>
                                                <HashLink className="menu__item menu__item__list" to={`/projective-geometry/lecture-02#perspective#orthographic`}>Orthographic projection</HashLink>
                                            </li>
                                            <li>
                                                <HashLink className="menu__item menu__item__list" to={`/projective-geometry/lecture-02#perspective`}>Perspective projection</HashLink>
                                            </li>
                                        </ol>
                                        <li>
                                            <HashLink className="menu__item menu__item__list" to={`/projective-geometry/lecture-02#changing-transformation`}>Changing transformation</HashLink>
                                        </li>
                                        <li>
                                            <HashLink className="menu__item menu__item__list" to={`/projective-geometry/lecture-02#distortion`}>Lens distortion</HashLink>
                                        </li>
                                    </ol>
                                    <li>
                                        <HashLink className="menu__item menu__item__list" to={`/projective-geometry/lecture-02#rendering`}>Photometric image formation</HashLink>
                                    </li>
                                    <ol>
                                        <li>
                                            <HashLink className="menu__item menu__item__list" to={`/projective-geometry/lecture-02#rendering`}>Rendering</HashLink>
                                        </li>
                                        <li>
                                            <HashLink className="menu__item menu__item__list" to={`/projective-geometry/lecture-02#optics`}>Optics</HashLink>
                                        </li>
                                        <li>
                                            <HashLink className="menu__item menu__item__list" to={`/projective-geometry/lecture-02#thin-lens`}>Thin lens model</HashLink>
                                        </li>
                                        <li>
                                            <HashLink className="menu__item menu__item__list" to={`/projective-geometry/lecture-02#dof`}>Depth of field</HashLink>
                                        </li>
                                        <li>
                                            <HashLink className="menu__item menu__item__list" to={`/projective-geometry/lecture-02#aberration-vignetting`}>Aberration & vignetting</HashLink>
                                        </li>
                                    </ol>
                                    <li>
                                        <HashLink className="menu__item menu__item__list" to={`/projective-geometry/lecture-02#image-sensing`}>Image sensing</HashLink>
                                    </li>
                                </ol>
                                <li>
                                    <Link className="menu__item menu__item__list" to={`/projective-geometry/lecture-03`}>Lecture 3</Link>
                                </li>
                                <ol>
                                    <li>
                                        <HashLink className="menu__item menu__item__list" to={`/projective-geometry/lecture-03#preliminaries`}>Preliminaries</HashLink>
                                    </li>
                                    <li>
                                        <HashLink className="menu__item menu__item__list" to={`/projective-geometry/lecture-03#epipolar-geometry`}>Two Frame Structure from Motion</HashLink>
                                    </li>
                                    <ol>
                                        <li>
                                            <HashLink className="menu__item menu__item__list" to={`/projective-geometry/lecture-03#epipolar-geometry`}>Epipolar Geometry</HashLink>
                                        </li>
                                        <li>
                                            <HashLink className="menu__item menu__item__list" to={`/projective-geometry/lecture-03#epipolar-geometry-math`}>Math behind EG</HashLink>
                                        </li>
                                        <li>
                                            <HashLink className="menu__item menu__item__list" to={`/projective-geometry/lecture-03s#triangularization`}>Triangularization</HashLink>
                                        </li>
                                    </ol>
                                    <li>
                                        <HashLink className="menu__item menu__item__list" to={`/projective-geometry/lecture-03#factorization`}>Factorization</HashLink>
                                    </li>
                                    <li>
                                        <HashLink className="menu__item menu__item__list" to={`/projective-geometry/lecture-03#bundle-adjustment`}>Bundle Adjustment</HashLink>
                                    </li>
                                    <ol>
                                        <li>
                                            <HashLink className="menu__item menu__item__list" to={`/projective-geometry/lecture-03#incremental-sfm`}>Incremental SfM</HashLink>
                                        </li>
                                    </ol>
                                </ol>
                                <li>
                                    <Link className="menu__item menu__item__list" to={`/projective-geometry/lecture-04`}>Lecture 4</Link>
                                </li>
                                <ol>
                                    <li>
                                        <HashLink className="menu__item menu__item__list" to={`/projective-geometry/lecture-04#stereo-matching`}>Preliminaries</HashLink>
                                    </li>
                                    <ol>
                                        <li>
                                            <HashLink className="menu__item menu__item__list" to={`/projective-geometry/lecture-04#stereo-matching`}>Stereo Matching</HashLink>
                                        </li>
                                        <li>
                                            <HashLink className="menu__item menu__item__list" to={`/projective-geometry/lecture-04#epipolar-geometry`}>Epipolar Geometry</HashLink>
                                        </li>
                                        <li>
                                            <HashLink className="menu__item menu__item__list" to={`/projective-geometry/lecture-04#rectification`}>Image Rectification</HashLink>
                                        </li>
                                        <li>
                                            <HashLink className="menu__item menu__item__list" to={`/projective-geometry/lecture-04#disparity`}>Disparity</HashLink>
                                        </li>
                                        <li>
                                            <HashLink className="menu__item menu__item__list" to={`/projective-geometry/lecture-04#xgboost`}>XGBoost</HashLink>
                                        </li>
                                    </ol>
                                    <li>
                                        <HashLink className="menu__item menu__item__list" to={`/projective-geometry/lecture-04#correspondence-ambiguity`}>Block Matching</HashLink>
                                    </li>
                                    <ol>
                                        <li>
                                            <HashLink className="menu__item menu__item__list" to={`/projective-geometry/lecture-04#correspondence-ambiguity`}>Correspondence Ambiguity</HashLink>
                                        </li>
                                        <li>
                                            <HashLink className="menu__item menu__item__list" to={`/projective-geometry/lecture-04#correspondence-ambiguity`}>Block Matching</HashLink>
                                        </li>
                                    </ol>
                                </ol>
                            </ol>
                        </div>
                    }
                </div>
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