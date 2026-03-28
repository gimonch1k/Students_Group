import { Outlet } from "react-router";

import Header from "./header/Header";

import "./layout.scss";

function Layout() {
  return (
    <div className="app">
      <Header />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
