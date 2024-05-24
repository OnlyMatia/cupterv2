
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Nav from "./assets/components/Nav";
import Home from "./assets/pages/Home";
import Contact from "./assets/pages/Contact";
import Footer from "./assets/components/Footer";


const router = createBrowserRouter([
  {path: "/", element:<Home />},
  {path: "/home", element: <Home />},
  {path: "/contact", element: <Contact />},
  {path: "*/*", element: <Home />}
])

const App = () => {
  return (
    <>
      <Nav />
      <RouterProvider router={router}/>
      <Footer />
    </>
  )
}

export default App