import React, { lazy, Suspense } from "react";
import ReactDom from "react-dom";
import { Header } from "/src/components/header";
import { Footer } from "./src/components/footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
const Dogs = lazy(()=> import("./src/components/Dogs") )
import Error from "./src/components/error";
import Body from "./src/components/body";
import Cards from "./src/components/cards";
// import Dogs from "./src/components/Dogs";


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
          path: "/",
          element: <Body/>
        },
        { 
          path: "/Dogs",
          element:
          <Suspense fallback={<h1>this is loading</h1>}>
            <Dogs/>
          </Suspense>
        },
        { 
          path: "/cards",
          element: <Cards/>
        }
      ]
   }
  ]
)

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
