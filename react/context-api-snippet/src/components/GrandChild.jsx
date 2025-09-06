import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const GrandChild = () => {
    const user = useContext(UserContext);
    return (
        <div>
            <h2>GrandChild</h2>
            {user.name} {user.age}
        </div>
    );
};

export default GrandChild;
