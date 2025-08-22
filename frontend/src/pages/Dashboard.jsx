import { useEffect, useState } from "react";
import axios from "../api/axios";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("/dash")
      .then(res => setData(res.data))
      .catch(() => setData(null));
  }, []);

  if (!data) return <div>Loading...</div>;
  return (
    <div>
      <h2>Dashboard</h2>
      <div>Assets: {data.totalAssets}</div>
      <div>Purchases: {data.totalPurchases}</div>
      <div>Transfers: {data.totalTransfers}</div>
      <div>Assignments: {data.totalAssignments}</div>
      {/* Add filters and pop-up for Net Movement as needed */}
    </div>
  );
}