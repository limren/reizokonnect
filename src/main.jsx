import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import { Homepage } from "./Components/Homepage";
import { Sandbox } from "./Components/Sandbox";
import { Canvas } from "@react-three/fiber";
import { Products } from "./Pages/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App children={<Homepage />} />,
  },
  {
    path: "/sandbox",
    element: <App children={<Sandbox />} />,
  },
  {
    path: "/products",
    element: <App children={<Products />} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
