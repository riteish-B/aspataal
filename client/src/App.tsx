import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import PatientsHome from "./patientsPortal/PatientsHome";
import Layout from "./Layout";
import PatientDetail from "./patientsPortal/PatientDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <PatientsHome />,
      },
      {
        path: "patients",
        element: <PatientsHome />,
      },
      {
        path: "patients/:id",
        element: <PatientDetail />,
      },
    ],
  },
  {
    path: "",
    action: () => {
      return redirect("/");
    },
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
