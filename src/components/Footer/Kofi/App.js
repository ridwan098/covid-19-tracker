import React from "react";
import KoFi from "./KoFi";

import "./styles.css";

export default App = () => {
    return (
        <div className="App">
            <h1>Ko-Fi button</h1>
            <p>
                <KoFi color="#29abe0" id="L3L7R7WE" label="Support Me on Ko-fi" />
            </p>
            <p>
                <KoFi color="#29ab00" id="L3L7R7WE" label="Buy me a Ko-fi" />
            </p>
        </div>
    );
}
