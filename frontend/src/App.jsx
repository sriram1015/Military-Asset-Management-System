import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Assets from "./pages/Assets";
import Purchases from "./pages/Purchases";
import Transfers from "./pages/Transfers";
import Assignments from "./pages/Assignments";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="flex">
          <Sidebar />
          <main className="flex-1 bg-gray-50 min-h-screen">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/assets" element={<ProtectedRoute roles={["Admin","LogisticsOfficer"]} ><Assets /></ProtectedRoute>} />
              <Route path="/purchases" element={
                <ProtectedRoute roles={["Admin","LogisticsOfficer"]}><Purchases /></ProtectedRoute>
              } />
              <Route path="/transfers" element={
                <ProtectedRoute roles={["Admin","LogisticsOfficer"]}><Transfers /></ProtectedRoute>
              } />
              <Route path="/assignments" element={
                <ProtectedRoute roles={["Admin","BaseCommander"]}><Assignments /></ProtectedRoute>
              } />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}
