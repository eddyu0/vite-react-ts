import { Weather } from "@/pages";
import ErrorPage from "@/pages/error-page";
import Root from "@/pages/root";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/weather",
    element: <Weather />,
    errorElement: <ErrorPage />,
  },
]);
