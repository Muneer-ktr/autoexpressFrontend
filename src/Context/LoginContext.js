import { createContext, useState } from "react";


export const LoginContext = createContext()

 const Loginprovider =({children}) =>{
    const [loginresponse,setLoginresponse] = useState('')


    return(
        <LoginContext.Provider value={{loginresponse,setLoginresponse}}>
            {children}
        </LoginContext.Provider>
    )
}

export default Loginprovider

