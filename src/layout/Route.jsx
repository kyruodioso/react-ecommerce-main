import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from '../components/Navbar';



const Route = () => {
  return (
    <>

      <Navbar ></Navbar>
      <main className="mb-6">
        <Outlet />
      </main>
      <Footer />

    </>
  );
};

export default Route;
