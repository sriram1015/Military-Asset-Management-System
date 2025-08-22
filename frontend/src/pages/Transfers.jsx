import { useEffect, useState } from "react";
import { getTransfers } from "../services/api";

export default function Transfers() {
  const [transfers, setTransfers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTransfers()
      .then((res) => setTransfers(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Transfers</h2>
      {transfers.length === 0 ? (
        <p>No transfers found</p>
      ) : (
        <ul className="space-y-2">
          {transfers.map((t) => (
            <li key={t._id} className="p-2 border rounded">
  {t.asset?.name ?? "-"} from {t.fromBase?.name ?? "-"} to {t.toBase?.name ?? "-"} 
  - Qty: {t.quantity ?? "-"} (By: {t.tranferedBy?.user_name ?? "-"}) 
  - Date: {t.createdAt ? new Date(t.createdAt).toLocaleDateString() : "-"}
</li>

          ))}
        </ul>
      )}
    </div>
  );
}
