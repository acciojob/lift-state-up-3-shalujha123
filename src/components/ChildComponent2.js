import React from "react";

const ChildComponent2 = ({implementOption}) => {
    return(
        <div style={{backgroundColor: "yellow", margin:"10px", padding: "10px"}}>
            <h2>Child Component 2</h2>
            <button onClick={implementOption}>Option 2</button>
        </div>
    )
}

export default ChildComponent2;