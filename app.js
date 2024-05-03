import React from "react";
import ReactDom from "react-dom";
import { Header } from "/src/components/header";
import { Footer } from "./src/components/footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/components/about";
import Error from "./src/components/error";
import Body from "./src/components/body";
import Dogs from "./src/components/Dogs";

const Applayout = () => {
  

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
      element: <Applayout/>,
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
          path: "/Dogs",
          element: <Dogs/>
        }
      ]
   }
  ]
)

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
