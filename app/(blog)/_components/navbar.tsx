import NavbarRoutes from "@/components/navbar_routes";
import MobileSideBar from "./mobile-sidebar";

const Navbar = () => {
  return (
    <div className="flex items-center h-full p-4 bg-white border-b shadow-sm">
      <MobileSideBar />
      <NavbarRoutes />
    </div>
  );
};

export default Navbar;
