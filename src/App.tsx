import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Error,
  Products,
  SingleProduct,
  Cart,
  About,
  Register,
  Login,
  Checkout,
  Orders,
  ErrorElement,
} from "./pages";
import { loader as landingLoader } from "./pages/Landing";

const router = createBrowserRouter([
  {
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader,
      },
      { path: "/about", element: <About />, errorElement: <ErrorElement /> },
      { path: "/cart", element: <Cart />, errorElement: <ErrorElement /> },
      {
        path: "/checkout",
        element: <Checkout />,
        errorElement: <ErrorElement />,
      },
      {
        path: "/products",
        element: <Products />,
        errorElement: <ErrorElement />,
      },
      {
        path: "/products/:productId",
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
      },
      { path: "/orders", element: <Orders /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
