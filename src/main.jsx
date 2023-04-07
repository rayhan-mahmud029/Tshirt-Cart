import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// react router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Layout/home';
import Orders from './componetns/Orders/Orders';
import Checkout from './componetns/Checkout/Checkout';
import ErrorPage from './componetns/ErrorPage/ErrorPage';
import { tShirtLoader } from './Loaders/TShirtLoader';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorPage: <ErrorPage/>,
    loader: tShirtLoader,
    children: [
      {
        path: 'orders',
        element: <Orders/>
      },
      {
        path: 'checkout',
        element: <Checkout></Checkout>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
