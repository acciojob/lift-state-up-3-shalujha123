import React from "react";

const ChildComponent1 = ({implementOption}) => {
    return (
        <div style={{backgroundColor: "brown", margin:"10px", padding: "10px"}}>
            <h2>Child Component 1</h2>
            <button onClick={implementOption}>Option 1</button>
        </div>
    )
}

export default ChildComponent1