import { createContext } from "react";


const UserContext = createContext({
    user:{
    name: "sabeeh",
    email: "xyz@gmail.com"
}})



export default UserContext;