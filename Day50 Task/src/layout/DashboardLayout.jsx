import Sidebar from "../components/SideBar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div style={{ display: "flex" }}>

      {/* Sidebar */}
      <Sidebar />

      {/* Right side */}
      <div style={{ flex: 1 }}>

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <div style={{ padding: "20px" }}>
          <Outlet />
        </div>

      </div>

    </div>
  );
}

export default DashboardLayout;