import { useEffect, useState } from "react";
import axios from "../api/axios";

export default function Assets() {
  const [assets, setAssets] = useState([]);
  useEffect(() => {
    axios.get("/asset/all").then(res => setAssets(res.data)).catch(() => setAssets([]));
  }, []);
  return (
    <div>
      <h2>Assets</h2>
      <ul>
        {assets.map(a => (
          <li key={a._id}>{a.name} ({a.type}) - Base: {a.base}</li>
        ))}
      </ul>
    </div>
  );
}