import { useEffect, useState } from "react";
import { getAssignments } from "../services/api";

export default function Assignments() {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAssignments()
      .then((res) => setAssignments(res.data)) // ✅ backend returns array
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Assignments</h2>
      {assignments.length === 0 ? (
        <p>No assignments found</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 bg-white shadow rounded">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2">Asset</th>
                <th className="px-4 py-2">Base</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Assigned To</th>
                <th className="px-4 py-2">Assigned By</th>
                <th className="px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {assignments.map((a) => (
                <tr key={a._id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2">{a.asset?.name ?? "-"}</td>
                  <td className="px-4 py-2">{a.base?.name ?? "-"}</td>
                  <td className="px-4 py-2">{a.quantity ?? "-"}</td>
                  <td className="px-4 py-2">{a.assignedTo?.user_name ?? "-"}</td>
                  <td className="px-4 py-2">{a.assignedby?.user_name ?? "-"}</td>
                  <td className="px-4 py-2">
                    {a.date ? new Date(a.date).toLocaleDateString() : "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
