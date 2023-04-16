import "./Navbar.css";
import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import usePageTracking from "../hooks/usePageTracking";

//index imports
import MLdata from "../TopicList/machine-learning.json";
import MLEdata from "../TopicList/machine-learning-eng.json";
import PGdata from "../TopicList/projective-geo.json";


export default function Navbar() {
  usePageTracking();
  let location = useLocation();

  React.useEffect(() => {
    document.getElementById("menu__toggle").checked = false;
  }, [location]);

  const [mlCollapsed, setMlCollapsed] = useState(true);
  const [pgCollapsed, setPgCollapsed] = useState(true);
  const [mleCollapsed, setmleCollapsed] = useState(true);
  const [dltpCollapsed, setdltpCollapsed] = useState(true);

  const toggleML = () => {
    if (mlCollapsed && !pgCollapsed) {
      setPgCollapsed(true);
    }

    if (mlCollapsed && !mleCollapsed) {
      setmleCollapsed(true);
    }

    setMlCollapsed(!mlCollapsed);
  };

  const toggleMLE = () => {
    if (mleCollapsed && !mlCollapsed) {
      setMlCollapsed(true);
    }

    if (mleCollapsed && !pgCollapsed) {
      setPgCollapsed(true);
    }

    setmleCollapsed(!mleCollapsed);
  };

  const togglePG = () => {
    if (pgCollapsed && !mlCollapsed) {
      setMlCollapsed(true);
    }

    if (pgCollapsed && !mleCollapsed) {
      setmleCollapsed(true);
    }

    setPgCollapsed(!pgCollapsed);
  };

  const toggleDLTP = () => {
    if (pgCollapsed && !mlCollapsed) {
      setMlCollapsed(true);
    }

    if (pgCollapsed && !mleCollapsed) {
      setmleCollapsed(true);
    }

    setdltpCollapsed(!dltpCollapsed);
  };

  /* refactored code */
  function createList(data) {
    return (
      <ol>
        {data.map((item) => {
          let x;
          if (item.link) {
            x = (
              <Link className="menu__item menu__item__list" to={item.link}>
                {item.title}
              </Link>
            );
          } else {
            x = (
              <HashLink
                className="menu__item menu__item__list"
                to={item.hashlink}
              >
                {item.title}
              </HashLink>
            );
          }

          return (
            <li key={Math.random()}>
              {x}
              {item.sublist.length > 0 && createList(item.sublist)}
            </li>
          );
        })}
      </ol>
    );
  }

  return (
    <div>
      <input id="menu__toggle" type="checkbox" />
      <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
      </label>

      <ul className="menu__box" id="my-menu">
        <li id="index-li">
          <Link className="menu__item current-page" to={`/`}>
            Home
          </Link>
        </li>
        <div>
          <button className="menu__item collapsible" onClick={toggleML}>
            Machine Learning {mlCollapsed ? "▼" : "►"}
          </button>
          {mlCollapsed === false && (
            <div className="content" style={{ display: "block" }}>
              {
                /* refactored code */
                createList(MLdata.data)
              }
            </div>
          )}
        </div>
        <div>
          <button className="menu__item collapsible" onClick={toggleMLE}>
            Machine Learning Engineering {mleCollapsed ? "▼" : "►"}
          </button>
          {mleCollapsed === false && (
            <div className="content" style={{ display: "block" }}>
              {/* 
              <ol>
                <li>
                  <Link
                    className="menu__item menu__item__list"
                    to={`/machine-learning-engineering/introduction`}
                  >
                    Introduction
                  </Link>

                  <ol>
                    <li>
                      <Link
                        className="menu__item menu__item__list"
                        to={`/machine-learning-engineering/introduction`}
                      >
                        Types of Learning
                      </Link>

                      <ol>
                        <li>
                          <HashLink
                            className="menu__item menu__item__list"
                            to={`/machine-learning-engineering/introduction#supervised-learning`}
                          >
                            Supervised Learning
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            className="menu__item menu__item__list"
                            to={`/machine-learning-engineering/introduction#unsupervised-learning`}
                          >
                            Unsupervised Learning
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            className="menu__item menu__item__list"
                            to={`/machine-learning-engineering/introduction#semi-supervised-learning`}
                          >
                            Semi-supervised Learning
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            className="menu__item menu__item__list"
                            to={`/machine-learning-engineering/introduction#reinforcement-learning`}
                          >
                            Reinforcement Learning
                          </HashLink>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <HashLink
                        className="menu__item menu__item__list"
                        to={`/machine-learning-engineering/introduction#data-used-directly-and-indirectly`}
                      >
                        Data and ML Terminology
                      </HashLink>

                      <ol>
                        <li>
                          <HashLink
                            className="menu__item menu__item__list"
                            to={`/machine-learning-engineering/introduction#data-used-directly-and-indirectly`}
                          >
                            Data Used Directly and Indirectly
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            className="menu__item menu__item__list"
                            to={`/machine-learning-engineering/introduction#raw-and-tidy-data`}
                          >
                            Raw and Tidy Data
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            className="menu__item menu__item__list"
                            to={`/machine-learning-engineering/introduction#training-and-holdout-sets`}
                          >
                            Training and Holdout Sets
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            className="menu__item menu__item__list"
                            to={`/machine-learning-engineering/introduction#baseline`}
                          >
                            Baseline
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            className="menu__item menu__item__list"
                            to={`/machine-learning-engineering/introduction#machine-learning-pipeline`}
                          >
                            ML Pipeline
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            className="menu__item menu__item__list"
                            to={`/machine-learning-engineering/introduction#parameters-vs-hyperparameters`}
                          >
                            Parameter vs Hyperparameters
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            className="menu__item menu__item__list"
                            to={`/machine-learning-engineering/introduction#classification-vs-regression`}
                          >
                            Classification vs Regression
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            className="menu__item menu__item__list"
                            to={`/machine-learning-engineering/introduction#model-based-vs-instance-based`}
                          >
                            Model-based vs Instance-based
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            className="menu__item menu__item__list"
                            to={`/machine-learning-engineering/introduction#shallow-vs-deep-learning`}
                          >
                            Shallow vs Deep Learning
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            className="menu__item menu__item__list"
                            to={`/machine-learning-engineering/introduction#training-vs-scoring`}
                          >
                            Training vs Scoring
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            className="menu__item menu__item__list"
                            to={`/machine-learning-engineering/introduction#when-to-use-and-not-to-use-ml`}
                          >
                            When to use and not to use ML
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            className="menu__item menu__item__list"
                            to={`/machine-learning-engineering/introduction#what-is-mle`}
                          >
                            What is MLE
                          </HashLink>
                        </li>
                      </ol>
                    </li>
                  </ol>
                </li>
                <li>
                  <HashLink
                    className="menu__item menu__item__list"
                    to={`/machine-learning-engineering/before-the-project-starts#prioritization-of-ml-projects-and-team-composition`}
                  >
                    Before the Project Starts
                  </HashLink>

                  <ol>
                    <li>
                      <HashLink
                        className="menu__item menu__item__list"
                        to={`/machine-learning-engineering/before-the-project-starts#prioritization-of-ml-projects-and-team-composition`}
                      >
                        Prioritization of Machine Learning Projects and Team
                        Composition
                      </HashLink>

                      <ol>
                        <li>
                          <HashLink
                            className="menu__item menu__item__list"
                            to={`/machine-learning-engineering/before-the-project-starts#prioritization-of-ml-projects-and-team-composition`}
                          >
                            Impact of Machine Learning
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            className="menu__item menu__item__list"
                            to={`/machine-learning-engineering/before-the-project-starts#prioritization-of-ml-projects-and-team-composition`}
                          >
                            Cost of Machine Learning
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            className="menu__item menu__item__list"
                            to={`/machine-learning-engineering/before-the-project-starts#prioritization-of-ml-projects-and-team-composition`}
                          >
                            Team Composition
                          </HashLink>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <HashLink
                        className="menu__item menu__item__list"
                        to={`/machine-learning-engineering/before-the-project-starts#estimating-complexity-of-a-ml-project`}
                      >
                        Estimating Complexity of a ML Project
                      </HashLink>

                      <ol>
                        <li>
                          <HashLink
                            className="menu__item menu__item__list"
                            to={`/machine-learning-engineering/before-the-project-starts#estimating-complexity-of-a-ml-project`}
                          >
                            The Unknowns
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            className="menu__item menu__item__list"
                            to={`/machine-learning-engineering/before-the-project-starts#estimating-complexity-of-a-ml-project`}
                          >
                            Simplifying the Problem
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            className="menu__item menu__item__list"
                            to={`/machine-learning-engineering/before-the-project-starts#estimating-complexity-of-a-ml-project`}
                          >
                            Nonlinear Progress
                          </HashLink>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <HashLink
                        className="menu__item menu__item__list"
                        to={`/machine-learning-engineering/before-the-project-starts#defining-the-goal-of-a-ml-project`}
                      >
                        Defining the Goal of a ML Project
                      </HashLink>

                      <ol>
                        <li>
                          <HashLink
                            className="menu__item menu__item__list"
                            to={`/machine-learning-engineering/before-the-project-starts#defining-the-goal-of-a-ml-project`}
                          >
                            What a Model can do
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            className="menu__item menu__item__list"
                            to={`/machine-learning-engineering/before-the-project-starts#defining-the-goal-of-a-ml-project`}
                          >
                            Properties of a Successful Model
                          </HashLink>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <HashLink
                        className="menu__item menu__item__list"
                        to={`/machine-learning-engineering/before-the-project-starts#why-ml-projects-fail`}
                      >
                        Why Machine Learning Projects Fail
                      </HashLink>
                    </li>
                  </ol>
                </li>
                <li>
                  <HashLink
                    className="menu__item menu__item__list"
                    to={`/machine-learning-engineering/data-collection-and-preparation#questions-about-the-data`}
                  >
                    Data Collection and Preparation
                  </HashLink>

                  <ol>
                    <li>
                      <HashLink
                        className="menu__item menu__item__list"
                        to={`/machine-learning-engineering/data-collection-and-preparation#questions-about-the-data`}
                      >
                        Questions about the Data
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        className="menu__item menu__item__list"
                        to={`/machine-learning-engineering/data-collection-and-preparation#common-problems-with-data-and-biases`}
                      >
                        Common Problems with Data and Biases
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        className="menu__item menu__item__list"
                        to={`/machine-learning-engineering/data-collection-and-preparation#characteristics-of-good-data`}
                      >
                        Characteristics of Good Data
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        className="menu__item menu__item__list"
                        to={`/machine-learning-engineering/data-collection-and-preparation#causes-of-data-leakage`}
                      >
                        Causes of Data Leakage
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        className="menu__item menu__item__list"
                        to={`/machine-learning-engineering/data-collection-and-preparation#data-partitioning`}
                      >
                        Data Partitioning
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        className="menu__item menu__item__list"
                        to={`/machine-learning-engineering/data-collection-and-preparation#dealing-with-missing-attributes`}
                      >
                        Dealing with Missing Attributes
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        className="menu__item menu__item__list"
                        to={`/machine-learning-engineering/data-collection-and-preparation#dealing-with-imbalanced-data`}
                      >
                        Dealing with Imbalanced Data
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        className="menu__item menu__item__list"
                        to={`/machine-learning-engineering/data-collection-and-preparation#data-sampling-strategies`}
                      >
                        Data Sampling Strategies
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        className="menu__item menu__item__list"
                        to={`/machine-learning-engineering/data-collection-and-preparation#data-storing`}
                      >
                        Data Storing
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        className="menu__item menu__item__list"
                        to={`/machine-learning-engineering/data-collection-and-preparation#data-versioning`}
                      >
                        Data Versioning
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        className="menu__item menu__item__list"
                        to={`/machine-learning-engineering/data-collection-and-preparation#documentation-and-metadata`}
                      >
                        Documentation and Metadata
                      </HashLink>
                    </li>
                  </ol>
                </li>
              </ol> */}

              {
                /*  refactored code  */
                createList(MLEdata.data)
              }
            </div>
          )}
        </div>

        <div>
          <button className="menu__item collapsible" onClick={togglePG}>
            Projective Geometry {pgCollapsed ? "▼" : "►"}
          </button>
          {pgCollapsed === false && (
            <div className="content" style={{ display: "block" }}>
              {/* 
              <ol>
                <li>
                  <Link
                    className="menu__item menu__item__list"
                    to={`/projective-geometry/introduction`}
                  >
                    Introduction
                  </Link>

                  <ol>
                    <li>
                      <HashLink
                        className="menu__item menu__item__list"
                        to={`/projective-geometry/introduction#organization`}
                      >
                        Organization
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        className="menu__item menu__item__list"
                        to={`/projective-geometry/introduction#introduction`}
                      >
                        Introduction
                      </HashLink>
                    </li>
                  </ol>
                </li>
                <li>
                  <Link
                    className="menu__item menu__item__list"
                    to={`/projective-geometry/image-formation`}
                  >
                    Image Formation
                  </Link>

                  <ol>
                    <li>
                      <HashLink
                        className="menu__item menu__item__list"
                        to={`/projective-geometry/image-formation#2dprimitive`}
                      >
                        Primitives and transformations
                      </HashLink>

                      <ol>
                        <li>
                          <HashLink
                            className="menu__item menu__item__list"
                            to={`/projective-geometry/image-formation#2dprimitive`}
                          >
                            2D primitives
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            className="menu__item menu__item__list"
                            to={`/projective-geometry/image-formation#3dprimitive`}
                          >
                            3D primitives
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            className="menu__item menu__item__list"
                            to={`/projective-geometry/image-formation#2dtransform`}
                          >
                            2D transformations
                          </HashLink>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <HashLink
                        className="menu__item menu__item__list"
                        to={`/projective-geometry/image-formation#pinhole`}
                      >
                        Geometric image formation
                      </HashLink>

                      <ol>
                        <li>
                          <HashLink
                            className="menu__item menu__item__list"
                            to={`/projective-geometry/image-formation#pinhole`}
                          >
                            Pinhole camera
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            className="menu__item menu__item__list"
                            to={`/projective-geometry/image-formation#projection`}
                          >
                            Projection models
                          </HashLink>

                          <ol>
                            <li>
                              <HashLink
                                className="menu__item menu__item__list"
                                to={`/projective-geometry/image-formation#perspective#orthographic`}
                              >
                                Orthographic projection
                              </HashLink>
                            </li>
                            <li>
                              <HashLink
                                className="menu__item menu__item__list"
                                to={`/projective-geometry/image-formation#perspective`}
                              >
                                Perspective projection
                              </HashLink>
                            </li>
                          </ol>
                        </li>
                        <li>
                          <HashLink
                            className="menu__item menu__item__list"
                            to={`/projective-geometry/image-formation#changing-transformation`}
                          >
                            Changing transformation
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            className="menu__item menu__item__list"
                            to={`/projective-geometry/image-formation#distortion`}
                          >
                            Lens distortion
                          </HashLink>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <HashLink
                        className="menu__item menu__item__list"
                        to={`/projective-geometry/image-formation#rendering`}
                      >
                        Photometric image formation
                      </HashLink>

                      <ol>
                        <li>
                          <HashLink
                            className="menu__item menu__item__list"
                            to={`/projective-geometry/image-formation#rendering`}
                          >
                            Rendering
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            className="menu__item menu__item__list"
                            to={`/projective-geometry/image-formation#optics`}
                          >
                            Optics
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            className="menu__item menu__item__list"
                            to={`/projective-geometry/image-formation#thin-lens`}
                          >
                            Thin lens model
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            className="menu__item menu__item__list"
                            to={`/projective-geometry/image-formation#dof`}
                          >
                            Depth of field
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            className="menu__item menu__item__list"
                            to={`/projective-geometry/image-formation#aberration-vignetting`}
                          >
                            Aberration & vignetting
                          </HashLink>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <HashLink
                        className="menu__item menu__item__list"
                        to={`/projective-geometry/image-formation#image-sensing`}
                      >
                        Image sensing
                      </HashLink>
                    </li>
                  </ol>
                </li>
                <li>
                  <Link
                    className="menu__item menu__item__list"
                    to={`/projective-geometry/structure-from-motion`}
                  >
                    Structure from Motion
                  </Link>

                  <ol>
                    <li>
                      <HashLink
                        className="menu__item menu__item__list"
                        to={`/projective-geometry/structure-from-motion#preliminaries`}
                      >
                        Preliminaries
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        className="menu__item menu__item__list"
                        to={`/projective-geometry/structure-from-motion#epipolar-geometry`}
                      >
                        Two Frame Structure from Motion
                      </HashLink>

                      <ol>
                        <li>
                          <HashLink
                            className="menu__item menu__item__list"
                            to={`/projective-geometry/structure-from-motion#epipolar-geometry`}
                          >
                            Epipolar Geometry
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            className="menu__item menu__item__list"
                            to={`/projective-geometry/structure-from-motion#epipolar-geometry-math`}
                          >
                            Math behind EG
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            className="menu__item menu__item__list"
                            to={`/projective-geometry/structure-from-motions#triangularization`}
                          >
                            Triangularization
                          </HashLink>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <HashLink
                        className="menu__item menu__item__list"
                        to={`/projective-geometry/structure-from-motion#factorization`}
                      >
                        Factorization
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        className="menu__item menu__item__list"
                        to={`/projective-geometry/structure-from-motion#bundle-adjustment`}
                      >
                        Bundle Adjustment
                      </HashLink>

                      <ol>
                        <li>
                          <HashLink
                            className="menu__item menu__item__list"
                            to={`/projective-geometry/structure-from-motion#incremental-sfm`}
                          >
                            Incremental SfM
                          </HashLink>
                        </li>
                      </ol>
                    </li>
                  </ol>
                </li>
                <li>
                  <Link
                    className="menu__item menu__item__list"
                    to={`/projective-geometry/stereo-reconstruction`}
                  >
                    Stereo Reconstruction
                  </Link>

                  <ol>
                    <li>
                      <HashLink
                        className="menu__item menu__item__list"
                        to={`/projective-geometry/stereo-reconstruction#stereo-matching`}
                      >
                        Preliminaries
                      </HashLink>

                      <ol>
                        <li>
                          <HashLink
                            className="menu__item menu__item__list"
                            to={`/projective-geometry/stereo-reconstruction#stereo-matching`}
                          >
                            Stereo Matching
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            className="menu__item menu__item__list"
                            to={`/projective-geometry/stereo-reconstruction#epipolar-geometry`}
                          >
                            Epipolar Geometry
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            className="menu__item menu__item__list"
                            to={`/projective-geometry/stereo-reconstruction#rectification`}
                          >
                            Image Rectification
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            className="menu__item menu__item__list"
                            to={`/projective-geometry/stereo-reconstruction#disparity`}
                          >
                            Disparity
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            className="menu__item menu__item__list"
                            to={`/projective-geometry/stereo-reconstruction#xgboost`}
                          >
                            XGBoost
                          </HashLink>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <HashLink
                        className="menu__item menu__item__list"
                        to={`/projective-geometry/stereo-reconstruction#correspondence-ambiguity`}
                      >
                        Block Matching
                      </HashLink>

                      <ol>
                        <li>
                          <HashLink
                            className="menu__item menu__item__list"
                            to={`/projective-geometry/stereo-reconstruction#correspondence-ambiguity`}
                          >
                            Correspondence Ambiguity
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            className="menu__item menu__item__list"
                            to={`/projective-geometry/stereo-reconstruction#correspondence-ambiguity`}
                          >
                            Block Matching
                          </HashLink>
                        </li>
                      </ol>
                    </li>
                  </ol>
                </li>
              </ol>
               */}

              {
                /* refactored code */
                createList(PGdata.data)
              }
            </div>
          )}
        </div>

        <div>
          <button className="menu__item collapsible" onClick={toggleDLTP}>
            Deep Learning Tuning Playbook {dltpCollapsed ? "▼" : "►"}
          </button>
          {dltpCollapsed === false && (
            <div className="content" style={{ display: "block" }}>
              <ol>
                <li>
                  <Link
                    className="menu__item menu__item__list"
                    to={`/deep-learning-tuning-playbook/fullpage#new-project`}
                  >
                    Guide for starting a new project
                  </Link>
                </li>
                <li>
                  <Link
                    className="menu__item menu__item__list"
                    to={`/deep-learning-tuning-playbook/fullpage#improving-performance`}
                  >
                    A scientific approach to improving model performance
                  </Link>
                </li>
              </ol>
            </div>
          )}
        </div>

        <li>
          <Link className="menu__item" to={`/credits`}>
            Credits
          </Link>
        </li>
        <li>
          <Link className="menu__item" to={`/todos`}>
            To-dos
          </Link>
        </li>
        <li>
          <Link className="menu__item" to={`/news`}>
            News
          </Link>
        </li>
        <li>
          <Link className="menu__item" to={`/references`}>
            References
          </Link>
        </li>
      </ul>
    </div>
  );
}
