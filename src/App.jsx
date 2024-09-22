import React from "react";
import Services from "./Services";
import AboutUs from "./AboutUs";
import Offerings from "./Offerings"
import ContactUs from "./ContactUs";
const App = () => {
    return (
        <div className="flex flex-wrap">
            <Services/>
            <AboutUs/>   
            <Offerings/>   
            <ContactUs/>  
        </div>
    );
}

export default App;