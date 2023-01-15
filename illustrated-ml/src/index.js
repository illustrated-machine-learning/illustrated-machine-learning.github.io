import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
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
        <Route path="credits" element={<Credits />} />
        <Route path="news" element={<News />} />
        <Route path="references" element={<References />} />
        <Route path="todos" element={<Todos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
