import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <main className="main">
      <Outlet />
    </main>
  );
}

export default Layout;
