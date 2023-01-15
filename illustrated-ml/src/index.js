import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Footer from './components/Footer';
import Home from './pages/Home';
import NotFound from './pages/404';
import Credits from './pages/Credits';
import News from './pages/News';
import References from './pages/References';
import Todos from './pages/Todos';
import Navbar from './components/Navbar';
import reportWebVitals from './reportWebVitals';

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/credits",
        element: <Credits />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/references",
        element: <References />,
      },
      {
        path: "/todos",
        element: <Todos />,
      },
    ]
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
