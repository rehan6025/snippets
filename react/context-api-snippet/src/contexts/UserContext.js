import React, { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState({ name: "John", age: 30 });

    return React.createElement(UserContext.Provider, { value: user }, children);
}
