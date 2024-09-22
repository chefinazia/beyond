import React from "react";
import Services from "./Services";
import AboutUs from "./AboutUs";
import Offerings from "./Offerings"
import ContactUs from "./ContactUs";
import Header from "./Header";
const App = () => {
    return (
        <div  className="">
            <Header/>
            <Services/>
            <AboutUs/>   
            <Offerings/>   
            <ContactUs/>  
        </div>
    );
}

export default App;