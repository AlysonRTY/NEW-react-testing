import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Page2 from "./pages/page2.jsx"
import Page3 from "./pages/page3.jsx"
import Page4 from "./pages/page4.jsx"
import NoPage from "./pages/NoPage"


const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/page2", element: <Page2 /> },
  { path: "/page3", element: <Page3 /> },
  { path: "/page4", element: <Page4 /> },
  { path: "*", element: <NoPage /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
