import './index.scss'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from './App';
import ErrorPage from './pages/Error/Error';
import HomePage from './pages/Home/Home';
import LoginPage from './pages/Login/Login';
import NotImplementedPage from './pages/NotImplemented/NotImplemented';
import React from 'react'
import ReactDOM from 'react-dom/client'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage></HomePage>
      },
      {
        path: "login",
        element: <LoginPage></LoginPage>
      },
      {
        path: "register",
        element: <NotImplementedPage></NotImplementedPage>
      },
      {
        path: "news",
        element: <NotImplementedPage></NotImplementedPage>
      },
      {
        path: "texts",
        element: <NotImplementedPage></NotImplementedPage>
      },
      {
        path: "events",
        element: <NotImplementedPage></NotImplementedPage>
      },
      {
        path: "litteraryGames",
        element: <NotImplementedPage></NotImplementedPage>
      },
      {
        path: "discussions",
        element: <NotImplementedPage></NotImplementedPage>
      },
      {
        path: "members",
        element: <NotImplementedPage></NotImplementedPage>
      },
      {
        path: "moderation",
        element: <NotImplementedPage></NotImplementedPage>,
        children: [
          {
            path: "alerts",
            element: <NotImplementedPage></NotImplementedPage>
          },
          {
            path: "warnings",
            element: <NotImplementedPage></NotImplementedPage>
          }
        ]
      },
      {
        path: "admin",
        element: <NotImplementedPage></NotImplementedPage>,
        children: [
          {
            path: "stats",
            element: <NotImplementedPage></NotImplementedPage>
          },
          {
            path: "tags",
            element: <NotImplementedPage></NotImplementedPage>
          }
        ]
      },
      {
        path: "myMessages",
        element: <NotImplementedPage></NotImplementedPage>
      },
      {
        path: "myProfile",
        element: <NotImplementedPage></NotImplementedPage>
      },
      {
        path: "mySettings",
        element: <NotImplementedPage></NotImplementedPage>
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
