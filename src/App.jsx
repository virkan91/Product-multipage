import "./App.css";

import "./18n";
import Switcher from "./components/Darkmode/Switcher";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";

// icons

import { useTranslation } from "react-i18next";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Customers from "./pages/customers/Customers";
import Pricing from "./pages/pricing/Pricing";
import Resources from "./pages/resources/Resources";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // Home
      {
        index: true,
        element: <Product />,
      },
      {
        path: "Product",
        element: <Product/>,
      },
      {
        path: "Customers",
        element: <Customers />,
      },
      {
        path: "Pricing",
        element: <Pricing />,
      },
      {
        path: "Resources",
        element: <Resources />,
      },
      // 404-
      {},
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
