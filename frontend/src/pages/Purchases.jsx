import { useEffect, useState } from "react";
import { getPurchases } from "../services/api";

export default function Purchases() {
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPurchases()
      .then((res) => setPurchases(res.data.pur))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Purchases</h2>
      {purchases.length === 0 ? (
        <p>No purchases found</p>
      ) : (
        <ul className="space-y-2">
          {purchases.map((p) => (
            <li key={p._id} className="p-2 border rounded">
  {p.asset?.name ?? "-"} - Qty: {p.quantity ?? "-"} - Base: {p.base?.name ?? "-"} 
  (By: {p.purchaseby?.user_name ?? "-"}) 
  - Date: {p.createdAt ? new Date(p.createdAt).toLocaleDateString() : "-"}
</li>

          ))}
        </ul>
      )}
    </div>
  );
}
