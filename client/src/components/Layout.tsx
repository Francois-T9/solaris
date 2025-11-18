import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
function Layout() {
  return (
    <div className="min-h-screen min-w-screen  flex flex-col grow">
      <Header />
      <div className="p-4 flex items-center justify-center grow ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
