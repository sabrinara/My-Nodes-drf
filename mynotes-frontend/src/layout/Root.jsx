import { useEffect, useState } from "react";
import Footer from "../Components/Shared/Footer";
import NavBar from "../Components/Shared/NavBar";
import { Outlet } from "react-router-dom";

const Root = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(prevTheme => !prevTheme);
    };

    

    return (
        <div className="max-w-8xl mx-auto font-roboto" data-theme={isDarkTheme ? "dark" : "light"}>
            <NavBar toggleTheme={toggleTheme}></NavBar>
            <Outlet className="min-h-screen " />
            <Footer />
        </div>
    );
};

export default Root;
