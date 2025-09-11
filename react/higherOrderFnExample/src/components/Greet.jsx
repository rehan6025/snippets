import React from "react";
import Hoc from "./Hoc";

const Greet = ({ name }) => {
    return <div>Hello {name}</div>;
};

const EnhancedGreet = Hoc(Greet);

export default EnhancedGreet;
