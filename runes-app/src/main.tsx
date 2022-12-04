import './index.scss'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from './App';
import ErrorPage from './pages/Error/Error';
import HomePage from './pages/Home/Home';
import { ISectionNavItem } from './components/Navbar/Navbar';
import LoginPage from './pages/Login/Login';
import MyProfile from './pages/My/MyProfile';
import NotImplementedPage from './pages/NotImplemented/NotImplemented';
import React from 'react'
import ReactDOM from 'react-dom/client'
import RegisterPage from './pages/Register/Register';
import SectionLayout from './layouts/SectionLayout/SectionLayout';
import settings from './Settings';

const url = settings.rlApiUrl + "/api/sections"

const router = createBrowserRouter([
  {
    path: "runes/",
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
        element: <RegisterPage></RegisterPage>
      },
      {
        path: "members",
        element: <NotImplementedPage></NotImplementedPage>
      },
      {
        path: "sections/:section",
        element: <SectionLayout></SectionLayout>
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
        element: <MyProfile></MyProfile>
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
