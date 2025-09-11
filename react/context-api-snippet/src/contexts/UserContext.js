import React, { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
    const [theme, setTheme] = useState("light");

    return React.createElement(
        UserContext.Provider,
        { value: { theme, setTheme } },
        children
    );
}
