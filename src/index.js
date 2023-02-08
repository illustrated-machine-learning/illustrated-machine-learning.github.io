import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer';
import Home from './pages/Home';
import NotFound from './pages/404';
import Credits from './pages/Credits';
import News from './pages/News';
import References from './pages/References';
import Todos from './pages/Todos';
import Navbar from './components/Navbar';
import reportWebVitals from './reportWebVitals';
import * as ML from './pages/MachineLearning';
import * as MLE from './pages/MachineLearningEngineering';
import * as PJ from './pages/ProjectiveGeometry';
import * as DLTP from './pages/DeepLearningTuningPlaybook'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>

    <div id='content-root'>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="machine-learning" element={<ML.Parent />} >
          <Route path='categorization' element={<ML.Categorization />} />
          <Route path='ml-sampling-resampling' element={<ML.MLSamplingReSampling />} />
          <Route path='bias-variance' element={<ML.BiasVariance />} />
          <Route path='linear-algorithms' element={<ML.LinearAlgo />} />
          <Route path='decision-tree' element={<ML.DecisionTree />} />
          <Route path='ensemble' element={<ML.Ensemble />} />
          <Route path='distance-based' element={<ML.DistanceBased />} />
          <Route path='optimization' element={<ML.Optimization />} />
          <Route path='loss-functions' element={<ML.LossFunction />} />
          <Route path='metrics' element={<ML.Metrics />} />
          <Route path='clustering' element={<ML.Clustering />} />
          <Route path='dimensionality-reduction' element={<ML.DimensionReduction />} />
          <Route path='tuning' element={<ML.Tuning />} />
        </Route>
        <Route path="projective-geometry" element={<PJ.Parent />} >
          <Route path='introduction' element={<PJ.Lecture01 />} />
          <Route path='image-formation' element={<PJ.Lecture02 />} />
          <Route path='structure-from-motion' element={<PJ.Lecture03 />} />
          <Route path='stereo-reconstruction' element={<PJ.Lecture04 />} />
        </Route>
        <Route path="machine-learning-engineering" element={<MLE.Parent />} >
          <Route path='introduction' element={<MLE.Chapter01 />} />
          <Route path='before-the-project-starts' element={<MLE.Chapter02 />} />
          <Route path='data-collection-and-preparation' element={<MLE.Chapter03 />} />
        </Route>
        <Route path="deep-learning-tuning-playbook" element={<DLTP.Parent />} >
          <Route path='fullpage' element={<DLTP.Playground />} />
        </Route>

        <Route path="credits" element={<Credits />} />
        <Route path="news" element={<News />} />
        <Route path="references" element={<References />} />
        <Route path="todos" element={<Todos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    <Footer />
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
