import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

const router = createBrowserRouter(
  [
    {
      path: "/movie/:movieId",
      element: <Detail />,
    },
    {
      path: "/",
      element: <Home />,
    },
  ],
  { basename: "/vite-react-tour" }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
