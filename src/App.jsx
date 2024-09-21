import React from "react";
import Services from "./Services";
import AboutUs from "./AboutUs";

const App = () => {
    return (
        <div className="flex flex-wrap">
            <Services/>
            <AboutUs/>        
        </div>
    );
}

export default App;