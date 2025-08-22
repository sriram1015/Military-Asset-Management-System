import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Sidebar() {
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <aside className="w-64 h-screen bg-gray-900 text-white p-6 flex flex-col">
      <h2 className="text-2xl font-bold mb-8">Asset Manager</h2>

      <nav className="flex flex-col gap-4">
        <Link to="/" className="hover:text-gray-300">Dashboard</Link>
        <Link to="/assets" className="hover:text-gray-300">Assets</Link>

        {(user.role === "Admin" || user.role === "LogisticsOfficer") && (
          <>
            <Link to="/purchases" className="hover:text-gray-300">Purchases</Link>
            <Link to="/transfers" className="hover:text-gray-300">Transfers</Link>
          </>
        )}

        {(user.role === "Admin" || user.role === "BaseCommander") && (
          <Link to="/assignments" className="hover:text-gray-300">Assignments</Link>
        )}
      </nav>

      <div className="mt-auto border-t border-gray-700 pt-4">
        <p className="text-sm mb-2">{user.user_name} ({user.role})</p>
        <button
          onClick={logout}
          className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 text-sm"
        >
          Logout
        </button>
      </div>
    </aside>
  );
}
