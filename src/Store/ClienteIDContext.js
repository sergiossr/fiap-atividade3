import React, { useState }  from "react";
import { createContext } from "react";

export const ClienteIDContext = createContext({
    ID_Cliente:""
});

export const ClienteIDContextProvider = (props) => {
    const [ID_Cliente, setID_Cliente] = useState("")


return (
    <ClienteIDContext.Provider
        value={{
            ID_Cliente
        }}
        >
            {props.children}
        </ClienteIDContext.Provider>
    );
}
    