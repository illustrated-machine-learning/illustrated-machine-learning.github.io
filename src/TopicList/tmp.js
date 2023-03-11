//machine-learning.json
/*
const MLEdata=[
    {
        title:'categorization',
        link:'/machine-learning/categorization',
        sublist:[]
    },
    {
        title:'sampling and resampling',
        link:'/machine-learning/ml-sampling-resampling',
        sublist:[
            {
                title:'sampling',
                hashlink:'/machine-learning/ml-sampling-resampling#sampling',
                sublist:[
                    {
                        title:'uniform',
                        hashlink:'/machine-learning/ml-sampling-resampling#sampling',
                        sublist:[]
                    },
                    {
                        title:'reservoir',
                        hashlink:'/machine-learning/ml-sampling-resampling#sampling',
                        sublist:[]
                    },
                    {
                        title:'stratified',
                        hashlink:'/machine-learning/ml-sampling-resampling#sampling',
                        sublist:[]
                    },
                ]
            },
            {
                title:'resampling',
                hashlink:'/machine-learning/ml-sampling-resampling#resampling',
                sublist:[
                    {
                        title:'cross validation',
                        hashlink:'/machine-learning/ml-sampling-resampling#resampling',
                        sublist:[]
                    },
                    {
                        title:'bootstrapping',
                        hashlink:'/machine-learning/ml-sampling-resampling#resampling',
                        sublist:[]
                    },
                ]
            },
            {
                title:'under / over-sampling',
                hashlink:'/machine-learning/ml-sampling-resampling#under-oversampling',
                sublist:[
                    {
                        title:'undersampling',
                        hashlink:'/machine-learning/ml-sampling-resampling#under-oversampling',
                        sublist:[]
                    },
                    {
                        title:'oversampling',
                        hashlink:'/machine-learning/ml-sampling-resampling#under-oversampling',
                        sublist:[]
                    },
                    {
                        title:'hybrid',
                        hashlink:'/machine-learning/ml-sampling-resampling#under-oversampling',
                        sublist:[]
                    },
                ]
            },
        ]
    },
    {
        title:'bias / variance',
        link:'/machine-learning/bias-variance',
        sublist:[]
    },
    {
        title:'supervised learning',
        sublist:[
            {
                title:'linear algorithms',
                link:'/machine-learning/linear-algorithms',
                sublist:[
                    {
                        title:'linear regression',
                        hashlink:'/machine-learning/linear-algorithms#linear-regression',
                        sublist:[]
                    },
                    {
                        title:'regularization',
                        hashlink:'/machine-learning/linear-algorithms#regularization',
                        sublist:[]
                    },
                    {
                        title:'logistic regression',
                        hashlink:'/machine-learning/linear-algorithms#logistic-regression',
                        sublist:[]
                    },
                    {
                        title:'support vector machines',
                        hashlink:'/machine-learning/linear-algorithms#support-vector-machines',
                        sublist:[]
                    },
                    {
                        title:'linear discriminant analysis',
                        hashlink:'/machine-learning/linear-algorithms#linear-discriminant-analysis',
                        sublist:[]
                    }
                ]
            },
            {
                title:'decision tree',
                link:'/machine-learning/decision-tree',
                sublist:[]
            },
            {
                title:'ensemble',
                link:'/machine-learning/ensemble',
                sublist:[
                    {
                        title:'categories',
                        hashlink:'/machine-learning/ensemble#category',
                        sublist:[]
                    },
                    {
                        title:'random forest',
                        hashlink:'/machine-learning/ensemble#random-forest',
                        sublist:[]
                    },
                    {
                        title:'AdaBoost',
                        hashlink:'/machine-learning/ensemble#adaboost',
                        sublist:[]
                    },
                    {
                        title:'GBM',
                        hashlink:'/machine-learning/ensemble#gbm',
                        sublist:[]
                    },
                    {
                        title:'XGBoost',
                        hashlink:'/machine-learning/ensemble#xgboost',
                        sublist:[]
                    }
                ]
            },
            {
                title:'distance based algorithms',
                link:'/machine-learning/distance-based',
                sublist:[
                    {
                        title:'metrics',
                        link:'/machine-learning/distance-based',
                        sublist:[]
                    },
                    {
                        title:'K-Nearest Neighbours',
                        hashlink:'/machine-learning/distance-based#knn',
                        sublist:[]
                    }
                ]
            },
            {
                title:'optimization',
                link:'/machine-learning/optimization',
                sublist:[
                    {
                        title:'ERM Paradigm',
                        hashlink:'/machine-learning/optimization#erm',
                        sublist:[]
                    },
                    {
                        title:'batch gradient descent',
                        hashlink:'/machine-learning/optimization#gd',
                        sublist:[]
                    },
                    {
                        title:'stochastic gradient descent',
                        hashlink:'/machine-learning/optimization#sgd',
                        sublist:[]
                    },
                    {
                        title:'minibatch gradient descent',
                        hashlink:'/machine-learning/optimization#mini',
                        sublist:[]
                    },
                    {
                        title:'momentum',
                        hashlink:'/machine-learning/optimization#momentum',
                        sublist:[]
                    },
                    {
                        title:'nesterov momentum',
                        hashlink:'/machine-learning/optimization#nesterov-momentum',
                        sublist:[]
                    },
                    {
                        title:'adagrad',
                        hashlink:'/machine-learning/optimization#adagrad',
                        sublist:[]
                    },
                    {
                        title:'RMSProp',
                        hashlink:'/machine-learning/optimization#RMSProp',
                        sublist:[]
                    },
                    {
                        title:'adam',
                        hashlink:'/machine-learning/optimization#adam',
                        sublist:[]
                    }
                ]
            },
            {
                title:'loss functions',
                link:'/machine-learning/loss-functions',
                sublist:[
                    {
                        title:'cross entropy',
                        hashlink:'/machine-learning/loss-functions#classification',
                        sublist:[]
                    },
                    {
                        title:'hinge loss',
                        hashlink:'/machine-learning/loss-functions#classification',
                        sublist:[]
                    },
                    {
                        title:'MAE',
                        hashlink:'/machine-learning/loss-functions#regression',
                        sublist:[]
                    },
                    {
                        title:'MSE',
                        hashlink:'/machine-learning/loss-functions#regression',
                        sublist:[]
                    }
                ]
            },
            {
                title:'model evaluation',
                link:'/machine-learning/metrics',
                sublist:[
                    {
                        title:'classification',
                        link:'/machine-learning/metrics',
                        sublist:[]
                    },
                    {
                        title:'regression',
                        hashlink:'/machine-learning/metrics#regression',
                        sublist:[]
                    }
                ]
            }
        ]
    },
    {
        title:'unsupervised learning',
        sublist:[
            {
                title:'clustering',
                link:'/machine-learning/clustering',
                sublist:[
                    {
                        title:'K-Means',
                        hashlink:'/machine-learning/clustering#kmeans',
                        sublist:[]
                    },
                    {
                        title:'hierarchical clustering',
                        hashlink:'/machine-learning/clustering#hierarchical',
                        sublist:[]
                    },
                    {
                        title:'DBSCAN',
                        hashlink:'/machine-learning/clustering#dbscan',
                        sublist:[]
                    },
                    {
                        title:'clustering validity',
                        hashlink:'/machine-learning/clustering#validity',
                        sublist:[]
                    }
                ]
            },
            {
                title:'dimesionality reduction',
                link:'/machine-learning/dimensionality-reduction',
                sublist:[
                    {
                        title:'PCA',
                        hashlink:'/machine-learning/dimensionality-reduction#pca',
                        sublist:[]
                    },
                    {
                        title:'ICA',
                        hashlink:'/machine-learning/dimensionality-reduction#ica',
                        sublist:[]
                    },
                    {
                        title:'LDA',
                        hashlink:'/machine-learning/dimensionality-reduction#lda',
                        sublist:[]
                    },
                    {
                        title:'tSNE',
                        hashlink:'/machine-learning/dimensionality-reduction#tsne',
                        sublist:[]
                    }
                ]
            }
        ]
    },
    {
        title:'hyperparameters tuning',
        link:'/machine-learning/tuning',
        sublist:[
            {
                title:'grid search',
                link:'/machine-learning/tuning',
                sublist:[]
            },
            {
                title:'random search',
                link:'/machine-learning/tuning',
                sublist:[]
            },
            {
                title:'Coarse-to-Fine search',
                link:'/machine-learning/tuning',
                sublist:[]
            },
            {
                title:'sensitivity',
                hashlink:'/machine-learning/tuning#sensitivity',
                sublist:[]
            }
        ]
    }
]

*/

//machine-learning-eng.json
/*
const MLEdata = [
    {
        title:'Introduction',
        link:'/machine-learning-engineering/introduction',
        sublist:[
            {
                title:'Types of Learning',
                link:'/machine-learning-engineering/introduction',
                sublist:[
                    {
                        title:'Supervised Learning',
                        hashlink:'/machine-learning-engineering/introduction#supervised-learning',
                        sublist:[]
                    },
                    {
                        title:'Unsupervised Learning',
                        hashlink:'/machine-learning-engineering/introduction#unsupervised-learning',
                        sublist:[]
                    },
                    {
                        title:'Semi-supervised Learning',
                        hashlink:'/machine-learning-engineering/introduction#semi-supervised-learning',
                        sublist:[]
                    },
                    {
                        title:'Reinforcement Learning',
                        hashlink:'/machine-learning-engineering/introduction#reinforcement-learning',
                        sublist:[]
                    }
                ]
            },
            {
                title:'Data and ML Terminology',
                hashlink:'/machine-learning-engineering/introduction#data-used-directly-and-indirectly',
                sublist:[
                    {
                        title:'Data Used Directly and Indirectly',
                        hashlink:'/machine-learning-engineering/introduction#data-used-directly-and-indirectly',
                        sublist:[]
                    },
                    {
                        title:'Raw and Tidy Data',
                        hashlink:'/machine-learning-engineering/introduction#raw-and-tidy-data',
                        sublist:[]
                    },
                    {
                        title:'Training and Holdout Sets',
                        hashlink:'/machine-learning-engineering/introduction#training-and-holdout-sets',
                        sublist:[]
                    },
                    {
                        title:'Baseline',
                        hashlink:'/machine-learning-engineering/introduction#baseline',
                        sublist:[]
                    },
                    {
                        title:'ML Pipeline',
                        hashlink:'/machine-learning-engineering/introduction#machine-learning-pipeline',
                        sublist:[]
                    },
                    {
                        title:'Parameter vs Hyperparameters',
                        hashlink:'/machine-learning-engineering/introduction#parameters-vs-hyperparameters',
                        sublist:[]
                    },
                    {
                        title:'Classification vs Regression',
                        hashlink:'/machine-learning-engineering/introduction#classification-vs-regression',
                        sublist:[]
                    },
                    {
                        title:'Model-based vs Instance-based',
                        hashlink:'/machine-learning-engineering/introduction#model-based-vs-instance-based',
                        sublist:[]
                    },
                    {
                        title:'Shallow vs Deep Learning',
                        hashlink:'/machine-learning-engineering/introduction#shallow-vs-deep-learning',
                        sublist:[]
                    },
                    {
                        title:'Training vs Scoring',
                        hashlink:'/machine-learning-engineering/introduction#training-vs-scoring',
                        sublist:[]
                    },
                    {
                        title:'When to use and not to use ML',
                        hashlink:'/machine-learning-engineering/introduction#when-to-use-and-not-to-use-ml',
                        sublist:[]
                    },
                    {
                        title:'What is MLE',
                        hashlink:'/machine-learning-engineering/introduction#what-is-mle',
                        sublist:[]
                    }
                ]
            },
        ]
    },
    {
        title:'Before the Project Starts',
        hashlink:'/machine-learning-engineering/before-the-project-starts#prioritization-of-ml-projects-and-team-composition',
        sublist:[
            {
                title:'Prioritization of Machine Learning Projects and Team Composition',
                hashlink:'/machine-learning-engineering/before-the-project-starts#prioritization-of-ml-projects-and-team-composition',
                sublist:[
                    {
                        title:'Impact of Machine Learning',
                        hashlink:'/machine-learning-engineering/before-the-project-starts#prioritization-of-ml-projects-and-team-composition',
                        sublist:[]
                    },
                    {
                        title:'Cost of Machine Learning',
                        hashlink:'/machine-learning-engineering/before-the-project-starts#prioritization-of-ml-projects-and-team-composition',
                        sublist:[]
                    },
                    {
                        title:'Team Composition',
                        hashlink:'/machine-learning-engineering/before-the-project-starts#prioritization-of-ml-projects-and-team-composition',
                        sublist:[]
                    }
                ]
            },
            {
                title:'Estimating Complexity of a ML Project',
                hashlink:'/machine-learning-engineering/before-the-project-starts#estimating-complexity-of-a-ml-project',
                sublist:[
                    {
                        title:'The Unknowns',
                        hashlink:'/machine-learning-engineering/before-the-project-starts#estimating-complexity-of-a-ml-project',
                        sublist:[]
                    },
                    {
                        title:'Simplifying the Problem',
                        hashlink:'/machine-learning-engineering/before-the-project-starts#estimating-complexity-of-a-ml-project',
                        sublist:[]
                    },
                    {
                        title:'Nonlinear Progress',
                        hashlink:'/machine-learning-engineering/before-the-project-starts#estimating-complexity-of-a-ml-project',
                        sublist:[]
                    }
                ]
            },
            {
                title:'Defining the Goal of a ML Project',
                hashlink:'/machine-learning-engineering/before-the-project-starts#defining-the-goal-of-a-ml-project',
                sublist:[
                    {
                        title:'What a Model can do',
                        hashlink:'/machine-learning-engineering/before-the-project-starts#defining-the-goal-of-a-ml-project',
                        sublist:[]
                    },
                    {
                        title:'Properties of a Successful Model',
                        hashlink:'/machine-learning-engineering/before-the-project-starts#defining-the-goal-of-a-ml-project',
                        sublist:[]
                    }
                ]
            },
            {
                title:'Why Machine Learning Projects Fail',
                hashlink:'/machine-learning-engineering/before-the-project-starts#why-ml-projects-fail',
                sublist:[]
            }
        ]
    },
    {
        title:'Data Collection and Preparation',
        hashlink:'/machine-learning-engineering/data-collection-and-preparation#questions-about-the-data',
        sublist:[
            {
                title:'Questions about the Data',
                hashlink:'/machine-learning-engineering/data-collection-and-preparation#questions-about-the-data',
                sublist:[]
            },
            {
                title:'Common Problems with Data and Biases',
                hashlink:'/machine-learning-engineering/data-collection-and-preparation#common-problems-with-data-and-biases',
                sublist:[]
            },
            {
                title:'Characteristics of Good Data',
                hashlink:'/machine-learning-engineering/data-collection-and-preparation#characteristics-of-good-data',
                sublist:[]
            },
            {
                title:'Causes of Data Leakage',
                hashlink:'/machine-learning-engineering/data-collection-and-preparation#causes-of-data-leakage',
                sublist:[]
            },
            {
                title:'Data Partitioning',
                hashlink:'/machine-learning-engineering/data-collection-and-preparation#data-partitioning',
                sublist:[]
            },
            {
                title:'Dealing with Missing Attributes',
                hashlink:'/machine-learning-engineering/data-collection-and-preparation#dealing-with-missing-attributes',
                sublist:[]
            },
            {
                title:'Dealing with Imbalanced Data',
                hashlink:'/machine-learning-engineering/data-collection-and-preparation#dealing-with-imbalanced-data',
                sublist:[]
            },
            {
                title:'Data Sampling Strategies',
                hashlink:'/machine-learning-engineering/data-collection-and-preparation#data-sampling-strategies',
                sublist:[]
            },
            {
                title:'Data Storing',
                hashlink:'/machine-learning-engineering/data-collection-and-preparation#data-storing',
                sublist:[]
            },
            {
                title:'Data Versioning',
                hashlink:'/machine-learning-engineering/data-collection-and-preparation#data-versioning',
                sublist:[]
            },
            {
                title:'Documentation and Metadata',
                hashlink:'/machine-learning-engineering/data-collection-and-preparation#documentation-and-metadata',
                sublist:[]
            }
        ]
    }
]

*/

//projective-geo.json
/*
const ProjGeoData = [
  {
    title: "Introduction",
    link: "/projective-geometry/introduction",
    sublist: [
      {
        title: "Organization",
        hashlink: "/projective-geometry/introduction#organization",
        sublist: [],
      },
      {
        title: "Introduction",
        hashlink: "/projective-geometry/introduction#introduction",
        sublist: [],
      },
    ],
  },
  {
    title: "Image Formation",
    link: "/projective-geometry/image-formation",
    sublist: [
      {
        title: "Primitives and transformations",
        hashlink: "/projective-geometry/image-formation#2dprimitive",
        sublist: [
          {
            title: "2D primitives",
            hashlink: "/projective-geometry/image-formation#2dprimitive",
            sublist: [],
          },
          {
            title: "3D primitives",
            hashlink: "/projective-geometry/image-formation#3dprimitive",
            sublist: [],
          },
          {
            title: "2D transformations",
            hashlink: "/projective-geometry/image-formation#2dtransform",
            sublist: [],
          },
        ],
      },
      {
        title: "Geometric image formation",
        hashlink: "/projective-geometry/image-formation#pinhole",
        sublist: [
          {
            title: "Pinhole camera",
            hashlink: "/projective-geometry/image-formation#pinhole",
            sublist: [],
          },
          {
            title: "Projection models",
            hashlink: "/projective-geometry/image-formation#projection",
            sublist: [
              {
                title: "Orthographic projection",
                hashlink:
                  "/projective-geometry/image-formation#perspective#orthographic",
                sublist: [],
              },
              {
                title: "Perspective projection",
                hashlink: "/projective-geometry/image-formation#perspective",
                sublist: [],
              },
            ],
          },
          {
            title: "Changing transformation",
            hashlink:
              "/projective-geometry/image-formation#changing-transformation",
            sublist: [],
          },
          {
            title: "Lens distortion",
            hashlink: "/projective-geometry/image-formation#distortion",
            sublist: [],
          },
        ],
      },
      {
        title: "Photometric image formation",
        hashlink: "/projective-geometry/image-formation#rendering",
        sublist: [
          {
            title: "Rendering",
            hashlink: "/projective-geometry/image-formation#rendering",
            sublist: [],
          },
          {
            title: "Optics",
            hashlink: "/projective-geometry/image-formation#optics",
            sublist: [],
          },
          {
            title: "Thin lens model",
            hashlink: "/projective-geometry/image-formation#thin-lens",
            sublist: [],
          },
          {
            title: "Depth of field",
            hashlink: "/projective-geometry/image-formation#dof",
            sublist: [],
          },
          {
            title: "Aberration & vignetting",
            hashlink:
              "/projective-geometry/image-formation#aberration-vignetting",
            sublist: [],
          },
        ],
      },
      {
        title: "Image sensing",
        hashlink: "/projective-geometry/image-formation#image-sensing",
        sublist: [],
      },
    ],
  },
  {
    title: "Structure from Motion",
    link: "/projective-geometry/structure-from-motion",
    sublist: [
      {
        title: "Preliminaries",
        hashlink: "/projective-geometry/structure-from-motion#preliminaries",
        sublist: [],
      },
      {
        title: "Two Frame Structure from Motion",
        hashlink:
          "/projective-geometry/structure-from-motion#epipolar-geometry",
        sublist: [
          {
            title: "Epipolar Geometry",
            hashlink:
              "/projective-geometry/structure-from-motion#epipolar-geometry",
            sublist: [],
          },
          {
            title: "Math behind EG",
            hashlink:
              "/projective-geometry/structure-from-motion#epipolar-geometry-math",
            sublist: [],
          },
          {
            title: "Triangularization",
            hashlink:
              "/projective-geometry/structure-from-motions#triangularization",
            sublist: [],
          },
        ],
      },
      {
        title: "Factorization",
        hashlink: "/projective-geometry/structure-from-motion#factorization",
        sublist:[]
      },
      {
        title:'Bundle Adjustment',
        hashlink:'/projective-geometry/structure-from-motion#bundle-adjustment',
        sublist:[
            {
                title:'Incremental SfM',
                hashlink:'/projective-geometry/structure-from-motion#incremental-sfm',
                sublist:[]
            }
        ]
      }
    ],
  },
  {
    title:'Stereo Reconstruction',
    link:'/projective-geometry/stereo-reconstruction',
    sublist:[
        {
            title:'Preliminaries',
            hashlink:'/projective-geometry/stereo-reconstruction#stereo-matching',
            sublist:[
                {
                    title:'Stereo Matching',
                    hashlink:'/projective-geometry/stereo-reconstruction#stereo-matching',
                    sublist:[]
                },
                {
                    title:'Epipolar Geometry',
                    hashlink:'/projective-geometry/stereo-reconstruction#epipolar-geometry',
                    sublist:[]
                },
                {
                    title:'Image Rectification',
                    hashlink:'/projective-geometry/stereo-reconstruction#rectification',
                    sublist:[]
                },
                {
                    title:'Disparity',
                    hashlink:'/projective-geometry/stereo-reconstruction#disparity',
                    sublist:[]
                },
                {
                    title:'XGBoost',
                    hashlink:'/projective-geometry/stereo-reconstruction#xgboost',
                    sublist:[]
                }
            ]
        },
        {
            title:'Block Matching',
            hashlink:'/projective-geometry/stereo-reconstruction#correspondence-ambiguity',
            sublist:[
                {
                    title:'Correspondence Ambiguity',
                    hashlink:'/projective-geometry/stereo-reconstruction#correspondence-ambiguity',
                    sublist:[]
                },
                {
                    title:'Block Matching',
                    hashlink:'/projective-geometry/stereo-reconstruction#correspondence-ambiguity',
                    sublist:[]
                }
            ]
        }
    ]
  }
];

*/
