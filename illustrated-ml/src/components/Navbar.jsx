import './Navbar.css';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';

export default function Navbar() {

    const [mlCollapsed, setMlCollapsed] = useState(false)

    const toggleML = () => setMlCollapsed(!mlCollapsed);

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
                        <button class="menu__item collapsible" onClick={toggleML}> Machine Learning {mlCollapsed ? "▼" : "►"}</button>
                        {mlCollapsed === true &&
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