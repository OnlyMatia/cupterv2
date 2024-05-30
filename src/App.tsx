
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Nav from "./assets/components/Nav";
import Home from "./assets/pages/Home";
import Contact from "./assets/pages/Contact";
import Footer from "./assets/components/Footer";
import Menu from "./assets/pages/Menu";
import About from "./assets/pages/About";
import NotFound from "./assets/pages/NotFound";


const router = createBrowserRouter([
  {path: "/", element:<Home />, errorElement: <NotFound />},
  {path: "/home", element: <Home />, errorElement: <NotFound />},
  {path: "/contact", element: <Contact />, errorElement: <NotFound />},
  {path: "/about", element: <About />, errorElement: <NotFound />},
  {path:"/menu", element: <Menu />, errorElement: <NotFound />},
  {path: "*/*", element: <Home />, errorElement: <NotFound />}
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