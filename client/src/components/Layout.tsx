import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
function Layout() {
  return (
    <div className="min-h-screen flex flex-col overflow-y-scroll  ">
      <Header />
      <div className="flex grow p-4 w-full justify-center ">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default Layout;
