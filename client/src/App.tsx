import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PatientsHome from "./patientsPortal/PatientsHome";
import HomePage from "./home/HomePage";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "patients",
        element: <PatientsHome />,
      },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
