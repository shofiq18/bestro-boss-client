import { Outlet } from "react-router-dom";
import Footer from "../page/Footer";
import Navbar from "../page/Navbar";



const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;