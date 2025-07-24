import { useContext,createContext,useState } from "react";

const UserContext = createContext();

export const UserProvider =({children}) =>{
    const [userId,setUserId] = useState('');
    console.log('Provider', userId);
     return(
        <UserContext.Provider value={{userId,setUserId}}>
            {children}
        </UserContext.Provider>
     )
}

export const useUser = () => useContext(UserContext)