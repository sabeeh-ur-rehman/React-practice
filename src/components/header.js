import logo from "../components/logo.jpg"


export const Header = () => {
return (

    <div className="bg-blue-400 flex p-2 justify-between h-16">
        <img  src={logo}  className="rounded-full border-white border-2" alt="logo" />
      
        <ul className="  font-sm text-2xl flex items-center gap-3  ">
            <li className="cursor-pointer bg-blue-300 p-2 px-3 border border-white rounded-md ">Menu</li>
            <li className="cursor-pointer bg-blue-300 p-2 px-3 border border-white rounded-md ">About</li>
            <li className="cursor-pointer bg-blue-300 p-2 px-3 border border-white rounded-md ">Contact Us</li>
        </ul>
       
        <button className="border p-2 bg-blue-300 rounded-md font-medium text-2xl">Subscribe</button>
    </div>
)
    

};