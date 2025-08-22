import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
export default function Navbar() {
  const { user, logout } = useAuth();
  return (
    <nav>
      <Link to="/">Dashboard</Link>
      <Link to="/assets">Assets</Link>
      <Link to="/purchases">Purchases</Link>
      <Link to="/transfers">Transfers</Link>
      <Link to="/assignments">Assignments</Link>
      {user ? (
        <>
          <span>{user.user_name} ({user.role})</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
}