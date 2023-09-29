import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Artwork from "./pages/ArtworkPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import { Provider } from "react-redux";
import { store } from "./store.ts";
import Root from "./pages/Root.tsx";

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        index: true,
        path: "/:page?",
        element: <HomePage />,
      },
      {
        path: "/artwork/:id",
        element: <Artwork />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
