import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

// Attach token to requests
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

// Dashboard
export const fetchDashboard = () => API.get("/dash/");

// Assets
export const addAsset = (data) => API.post("/asset/create", data);
export const fetchAssets = () => API.get("/asset/all");

// Purchases
export const addPurchase = (data) => API.post("/pur/purchase", data);
export const getPurchases = () => API.get("/pur/get");

// Transfers
export const addTransfer = (data) => API.post("/trans/create", data);
export const getTransfers = () => API.get("/trans/get");

// Assignments
export const addAssignment = (data) => API.post("/assign/create", data);
export const getAssignments = () => API.get("/assign/all");

// Audit
export const getAudit = () => API.get("/audit/get");

// Auth
export const login = (user_name, password) =>
  API.post("/auth/login", { user_name, password });
export const me = () => API.get("/auth/me");

export default API;
