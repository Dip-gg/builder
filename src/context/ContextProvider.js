import { createContext, useState } from "react";

const StoreContext = createContext({});

export const ContextProvider = ({ children }) => {
    const [divs, setDivs] = useState([]);

    return (
        <StoreContext.Provider value={{ 
            divs, setDivs,
        }}>
            { children }
        </StoreContext.Provider>
    )
}

export default StoreContext;