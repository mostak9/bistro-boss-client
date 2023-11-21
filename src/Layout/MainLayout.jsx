import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const MainLayout = () => {

  return (
    <div className="font-inter max-w-7xl mx-auto">
      <Navbar />

      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
