import React from "react";
import ReactDom from "react-dom";
import { useState } from "react";
import { Header } from "/src/components/header";
import { Footer } from "./src/components/footer";

const HeadingComponent = () => {
  const [asad, setAsad] = useState("THIS IS INITIAL TITLE");

  return (
    <div>
      <Header />
      <body className=" gap-y-6 bg-red-300 p-20 h-[calc(100vh-112px)] flex flex-col items-center">
        <h1 className="bg-white rounded-md p-8 text-center font-bold text-4xl">
      
          {asad}
        </h1>
        <button
          onClick={() => setAsad("BOOOM ITS CHANGED BY giUSESTATE HOOK")}
          className="w-40  border p-2 bg-blue-300 rounded-md font-medium text-2xl"
        >
          Change Title
        </button>
      </body>
      <Footer />
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
