import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const MainLayout = () => {
    const navigation=useNavigation()
    
    return (
        <div>
            <Navbar></Navbar>
           { navigation.state === 'loading'?<Loader></Loader>: <Outlet></Outlet>}
          
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;