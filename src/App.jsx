import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layouts
import MainLayout from "./layouts/MainLayout";

// pages
import { Home, About, Contact, LikedImages } from "./pages";

// import actions
import { action as SearchAction } from "./pages/Home";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          action: SearchAction,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/likedImages",
          element: <LikedImages />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
