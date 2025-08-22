import { useEffect, useState } from "react";
import axios from "../api/axios";

export default function Transfers() {
  const [transfers, setTransfers] = useState([]);
  useEffect(() => {
    axios.get("/trans/all").then(res => setTransfers(res.data)).catch(() => setTransfers([]));
  }, []);
  return (
    <div>
      <h2>Transfers</h2>
      <ul>
        {transfers.map(t => (
          <li key={t._id}>{t.asset} from {t.fromBase} to {t.toBase} - Qty: {t.quantity}</li>
        ))}
      </ul>
    </div>
  );
}