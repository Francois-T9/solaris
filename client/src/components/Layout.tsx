import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
function Layout() {
  return (
    <div className="min-h-screen flex flex-col  ">
      <Header />
      <div className="flex grow p-4 w-full justify-center">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default Layout;
