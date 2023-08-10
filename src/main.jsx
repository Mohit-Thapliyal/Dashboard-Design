import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root'
import ErrorPage from './components/error-page';
import Dashboard from './routes/dashboard';
import Common from './routes/common';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "",
        element: <Dashboard/>
      },
      {
        path: "/dashboard",
        element: <Dashboard/>
      },
      {
        path: ":id",
        element: <Common/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
