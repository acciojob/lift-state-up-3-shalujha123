
import React, { useState } from "react";
import './../styles/App.css';
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

const App = () => {
  const [selectedOption, setSelectedOption] = useState("")
  return (
    <div className="parent">
        {/* Do not remove the main div */}
        <ChildComponent1 implementOption={(e) => setSelectedOption(e.target.innerText)} />
        <ChildComponent2 implementOption={(e) => setSelectedOption(e.target.innerText)} />
        <p>Selected Option: {selectedOption}</p>
    </div>
  )
}

export default App
