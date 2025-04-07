import React from "react";

const ChildComponent2 = ({implementOption}) => {
    return(
        <div style={{backgroundColor: "yellow", margin:"10px", padding: "10px"}}>
            <h1>Child Component 2</h1>
            <button onClick={implementOption}>Option 2</button>
        </div>
    )
}

export default ChildComponent2;