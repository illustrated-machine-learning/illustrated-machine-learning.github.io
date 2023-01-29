export default function References() {

    const styles = {
        title:  {
            width: "40vmin",
            height: "auto"
        }
    }

    return (
        <div className="content-container">
            <div className="container-img">
                <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/references.svg"} style={styles.title}></object>
            </div>

            <div className="text-container" style={{marginBottom: 10 + '%', lineHeight: 2}}>

                <h3>Books </h3>

                <ul>
                    <li><a href="https://www.deeplearningbook.org/">Deep Learning</a>, Goodfellow et al.</li>
                    <li><a href="https://www.cs.huji.ac.il/~shais/UnderstandingMachineLearning/understanding-machine-learning-theory-algorithms.pdf">Understanding Machine Learning</a>, S. Shalev-Shwartz et al.</li>
                    <li><a href="https://mml-book.github.io/book/mml-book.pdf">Mathematics in Machine Learning</a>, M.P. Deisenroth et al.</li>
                    <li><a href="https://www-users.cse.umn.edu/~kumar001/dmbook/index.php">Introduction to Data Mining</a>, Tan et al.</li>
                    <li><a href="http://www.mlebook.com/wiki/doku.php?id=start">Machine Learning Engineering</a>, A. Burkov</li>
                </ul>

                <h3>Additional blogposts & notes</h3>

                <ul>
                    <li>ICA:
                        <a href="https://www.geeksforgeeks.org/ml-independent-component-analysis/">blogpost 01</a>,
                        <a href="https://towardsdatascience.com/independent-component-analysis-ica-a3eba0ccec35">blogpost 02</a>
                    </li>
                    <li>tSNE:
                        <a href="https://towardsdatascience.com/t-distributed-stochastic-neighbor-embedding-t-sne-bb60ff109561">blogpost</a>
                    </li>
                    <li>PCA:
                        <a href="https://builtin.com/data-science/step-step-explanation-principal-component-analysis">blogpost</a>
                    </li>
                    <li>XGBoost:
                        <a href="https://www.linkedin.com/pulse/how-does-xgboost-really-work-beaula-benny/">blogpost 01</a>,
                        <a href="https://towardsdatascience.com/https-medium-com-vishalmorde-xgboost-algorithm-long-she-may-rein-edd9f99be63d">blogpost 02</a>
                    </li>
                    <li>Reservoir sampling:
                        <a href="https://cesa-bianchi.di.unimi.it/Algo2/Note/reservoir.pdf">slides</a>
                    </li>
                    <li>SMOTE:
                        <a href="https://imbalanced-learn.org/stable/over_sampling.html#smote-adasyn">blogpost</a>
                    </li>
                    <li>SMOTEENN:
                        <a href="https://towardsdatascience.com/imbalanced-classification-in-python-smote-enn-method-db5db06b8d50">blogpost</a>
                    </li>
                    <li>AdaBoost:
                        <a href="https://vitalflux.com/adaboost-algorithm-explained-with-python-example/">blogpost</a>
                    </li>
                    <li>Gradient Boosting:
                        <a href="https://towardsdatascience.com/all-you-need-to-know-about-gradient-boosting-algorithm-part-1-regression-2520a34a502">blogpost</a>
                    </li>
                    <li>Linear Discriminant Analysis:
                        <a href="https://machinelearningmastery.com/linear-discriminant-analysis-for-machine-learning/">blogpost 01</a>,
                        <a href="https://en.wikipedia.org/wiki/Linear_discriminant_analysis">blogpost 02</a>
                    </li>
                    <li>Clustering:
                        <a href="https://dbdmg.polito.it/dbdmg_web/wp-content/uploads/2021/11/9-DMClustering.pdf">slides</a>
                    </li>
                    <li>ROC-AUC:
                        <a href="https://towardsdatascience.com/understanding-auc-roc-curve-68b2303cc9c5">blogpost</a>
                    </li>
                    <li>Regression metrics:
                        <a href="https://dbdmg.polito.it/dbdmg_web/wp-content/uploads/2022/11/Regression-Analysis.pdf">slides</a>
                    </li>

                </ul>

            </div>
        </div>
    );
}