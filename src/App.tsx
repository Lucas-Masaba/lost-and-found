import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./pages/Home";
import Home from "./pages/Home";
import ReportItem from "./pages/ReportItem";
import FoundItems from "./pages/FoundItems";
import LostItems from "./pages/LostItems";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/found-items",
      element: <FoundItems />,
    },
    {
      path: "/lost-items",
      element: <LostItems />,
    },
    {
      path: "/report-item",
      element: <ReportItem />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
