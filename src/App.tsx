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
      { path: "/cart", element: <Cart /> }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
