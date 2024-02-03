import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AI from './projects/AI.jsx'
import DS from './projects/DS.jsx'
import SW from './projects/SW.jsx'

import Home from "./compenets/Home";
import Intro from "./compenets/Intro";
import Project from "./compenets/project";
import Skills from "./compenets/Skills";
import Resume from "./compenets/Resume";
import Contact from "./compenets/contact";
import Navbar from './compenets/Navbar.jsx'

const router = createBrowserRouter(
  [
    {
      path: "/Portfolio/",
      element:<Navbar/>,
      children: [
        {
          path: "/Portfolio/",
          element: <App/>
        },
        {
          path: "/Portfolio/AI",
          element:<AI/>
        },
        {
          path: "/Portfolio/DS",
          element:<DS/>
        },
        {
          path: "/Portfolio/SW",
          element:<SW/>
        }
      ]
    }
  ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
