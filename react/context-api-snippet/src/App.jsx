import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Parent from "./components/Parent";
import { UserProvider } from "./contexts/UserContext";

function App() {
    const [user, setUser] = useState({ name: "John", age: 30 });

    return (
        <>
            <UserProvider>
                <Parent />
            </UserProvider>
        </>
    );
}

export default App;
