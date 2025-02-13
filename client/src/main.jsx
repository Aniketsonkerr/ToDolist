import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ToDoPage from "./pages/ToDoPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";

const app = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/todo",
        element: <ToDoPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={app}></RouterProvider>
  </StrictMode>
);
