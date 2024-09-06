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
  Orders
} from "./pages";


const router = createBrowserRouter([
  {
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Landing /> },
      { path: "/about", element: <About /> },
      { path: "/cart", element: <Cart /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/products", element: <Products /> },
      { path: "/products/:productId", element: <SingleProduct /> },
      { path: "/orders", element: <Orders /> }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
