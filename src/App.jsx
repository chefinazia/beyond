import React from "react";
import Services from "./Services";
import AboutUs from "./AboutUs";
import Offerings from "./Offerings"

const App = () => {
    return (
        <div className="flex flex-wrap">
            <Services/>
            <AboutUs/>   
            <Offerings/>     
        </div>
    );
}

export default App;