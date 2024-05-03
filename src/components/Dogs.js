import { useEffect } from "react";
import { useState } from "react";

const Dogs = () => {
  let [dogImage, setDogImage] = useState(null);

  const fetchDogImage = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    setDogImage(data.message);
  };

  useEffect(() => {
    fetchDogImage();
  }, []);

  return (
    <div className="bg-[#90AEAE] flex flex-col justify-center items-center text-center h-[calc(100vh-112px)] ">
      {dogImage && <img className="w-[400px] h-[250px] border rounded-md " src={dogImage}></img>}
      <button
        className="w-80  border p-2 bg-[#E7493B] text-white rounded-md font-medium mt-4 text-2xl"
        onClick={fetchDogImage}
      >
        Change Dog Image
      </button>
    </div>
  );
};

export default Dogs;
