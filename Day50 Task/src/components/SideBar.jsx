import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div style={{
      width: "200px",
      height: "100vh",
      background: "#222",
      color: "white",
      padding: "20px"
    }}>
      <h3>Dashboard</h3>

      <ul style={{listStyle:"none", padding:0}}>
        <li><Link to="/dashboard">Home</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;