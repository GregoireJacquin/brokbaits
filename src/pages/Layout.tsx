import { Outlet as Slot } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = () => {
    return (
        <>
            <Header />
            <div className="mx-10">
                <Slot />
            </div>
            <Footer />
        </>
    )
}
export default Layout;