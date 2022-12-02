import './index.scss'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from './App';
import ErrorPage from './pages/Error';
import React from 'react'
import ReactDOM from 'react-dom/client'
import UnimplementedPage from './pages/Unimplemented';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <UnimplementedPage></UnimplementedPage>
      },
      {
        path: "login",
        element: <UnimplementedPage></UnimplementedPage>
      },
      {
        path: "register",
        element: <UnimplementedPage></UnimplementedPage>
      },
      {
        path: "news",
        element: <UnimplementedPage></UnimplementedPage>
      },
      {
        path: "texts",
        element: <UnimplementedPage></UnimplementedPage>
      },
      {
        path: "events",
        element: <UnimplementedPage></UnimplementedPage>
      },
      {
        path: "litteraryGames",
        element: <UnimplementedPage></UnimplementedPage>
      },
      {
        path: "discussions",
        element: <UnimplementedPage></UnimplementedPage>
      },
      {
        path: "members",
        element: <UnimplementedPage></UnimplementedPage>
      },
      {
        path: "moderation",
        element: <UnimplementedPage></UnimplementedPage>,
        children: [
          {
            path: "alerts",
            element: <UnimplementedPage></UnimplementedPage>
          },
          {
            path: "warnings",
            element: <UnimplementedPage></UnimplementedPage>
          }
        ]
      },
      {
        path: "admin",
        element: <UnimplementedPage></UnimplementedPage>,
        children: [
          {
            path: "stats",
            element: <UnimplementedPage></UnimplementedPage>
          },
          {
            path: "tags",
            element: <UnimplementedPage></UnimplementedPage>
          }
        ]
      },
      {
        path: "myMessages",
        element: <UnimplementedPage></UnimplementedPage>
      },
      {
        path: "myProfile",
        element: <UnimplementedPage></UnimplementedPage>
      },
      {
        path: "mySettings",
        element: <UnimplementedPage></UnimplementedPage>
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
