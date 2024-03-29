import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ManagePage from "./components/managePage/ManagePage";
import Header from "./components/header/Header";
import Feed from "./components/feed/Feed";
import WatchVideo from "./components/watchVideo/WatchVideo";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <ManagePage />,
    children: [
      {
        path: "/",
        element: <Feed />,
      },
      {
        path: "/watch",
        element: <WatchVideo />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
