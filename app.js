import React from "react";
import ReactDom from "react-dom";
import { Header } from "/src/components/header";
import { Footer } from "./src/components/footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/components/about";
import Error from "./src/components/error";
import Body from "./src/components/body";
import Contact from "./src/components/contact";

const HeadingComponent = () => {
  

  return (
    <div>
      <Header />
      <Outlet/>
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <HeadingComponent/>,
      errorElement: <Error/>,
      children : [ 
        { 
          path: "/about",
          element: <About/>
        },
        { 
          path: "/",
          element: <Body/>
        },
        { 
          path: "/contact",
          element: <Contact/>
        }
      ]
   }
  ]
)

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
