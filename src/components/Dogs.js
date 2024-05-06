import { useEffect } from "react";
import { useState } from "react";
import useOnline from "../utils/useOnline";

const Dogs = () => {
  const Online = useOnline();

  if (!Online) {
    return <h1> You are Offline , Check Internet Connection</h1>
  }

  let [dogImage, setDogImage] = useState(null);

  const fetchDogImage = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    setDogImage(data.message);
  };

  useEffect(() => {
    fetchDogImage();
  },
   []);
   
   
  return (
    <div className="bg-[#90AEAE] flex flex-col justify-center items-center text-center h-[calc(100vh-112px)] ">
      {dogImage && <img className="w-[400px] h-[250px] border rounded-md " src={dogImage}></img>}
      <button
        className="w-80  border p-2 bg-[#E7493B] text-white rounded-md font-medium mt-4 text-2xl"
        onClick={fetchDogImage}
      >
        Change Dog image
      </button>
    </div>
  );
};

export default Dogs;
