import { useEffect, useState } from "react";
import { fetchAssets } from "../services/api";

export default function Assets() {
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAssets()
      .then((res) => setAssets(res.data.assets))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Assets</h2>
      {assets.length === 0 ? (
        <p>No assets found</p>
      ) : (
        <ul className="space-y-2">
          {assets.map((a) => (
            <li key={a._id} className="p-2 border rounded">
              {a.name ?? "-"} ({a.type ?? "-"}) - Base: {a.base?.name ?? "-"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
