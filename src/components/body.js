import { useState } from "react";
import useOnline from "../utils/useOnline";



const Body = () => { 
    const [asad, setAsad] = useState("initial statement");

   


    return (
        <body className=" gap-y-6 bg-[#90AEAE] p-20 h-[calc(100vh-112px)] flex flex-col items-center justify-center">
        <h1 className="bg-white rounded-md p-8 text-center font-bold text-4xl">
          {asad}
        </h1>
        <button
          onClick={() => setAsad("state changed by useState Hook")}
          className="w-30  border p-2 bg-[#E7493B] text-white rounded-md font-medium text-2xl" >
          see magic
        </button>
      </body>
    )
}


export default Body 