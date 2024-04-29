import { useRouteError } from "react-router-dom";


const Error = () => {
  const err = useRouteError
    return (
      <div className=" bg-red-300 flex flex-col justify-center items-center text-center h-screen">
      <h1 className="text-4xl bg-white rounded-md p-4">Opps !!!</h1>
      <h1 className="text-2xl bg-white rounded-md p-4 m-4">Something Went Wrong</h1>
      <h1 className="text-2xl bg-white rounded-md p-4">{err.status + " : " + err.statusText}</h1>
      </div>
    )
};

export default Error ; 