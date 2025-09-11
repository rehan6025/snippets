import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const GrandChild = () => {
    const { theme, setTheme } = useContext(UserContext);
    return (
        <div
            style={{
                backgroundColor: theme == "light" ? "white" : "black",
                color: theme == "light" ? "black" : "white",
                padding: "20px",
                transition: "background-color 0.5s ease , color 0.5s ease",
            }}
        >
            <h2>GrandChild</h2>
            <button
                onClick={() => {
                    theme == "light" ? setTheme("dark") : setTheme("light");
                }}
            >
                Change Theme
            </button>
        </div>
    );
};

export default GrandChild;
