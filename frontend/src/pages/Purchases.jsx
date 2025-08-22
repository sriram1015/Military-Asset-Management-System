import { useEffect, useState } from "react";
import axios from "../api/axios";

export default function Purchases() {
  const [purchases, setPurchases] = useState([]);
  useEffect(() => {
    axios.get("/pur/all").then(res => setPurchases(res.data)).catch(() => setPurchases([]));
  }, []);
  return (
    <div>
      <h2>Purchases</h2>
      <ul>
        {purchases.map(p => (
          <li key={p._id}>{p.asset} - Qty: {p.quantity} - Base: {p.base}</li>
        ))}
      </ul>
    </div>
  );
}