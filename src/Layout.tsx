import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function Layout() {
  return (
    <>
      <main className="main">
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default Layout;
