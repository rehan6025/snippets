import React from "react";

const Hoc = (WrappedComponent) => {
    return function EnhancedComponent(props) {
        return <WrappedComponent {...props} />;
    };
};

export default Hoc;
