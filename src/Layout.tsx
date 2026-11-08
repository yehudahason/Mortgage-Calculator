import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <main className="main">
        <Outlet />
      </main>
      <footer>
        <div className="attribution">
          Challenge by
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend Mentor
          </a>
          <span className="separator" aria-hidden="true">
            {" "}
            •{" "}
          </span>
          Coded by
          <a
            href="https://www.frontendmentor.io/profile/yehudahason"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Yehuda Hason
          </a>
        </div>
      </footer>
    </>
  );
}

export default Layout;
