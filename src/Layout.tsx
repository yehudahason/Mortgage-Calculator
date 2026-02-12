import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <main>
      <h1>Mortgage Calculator</h1>
      <Outlet />
    </main>
  );
}

export default Layout;
