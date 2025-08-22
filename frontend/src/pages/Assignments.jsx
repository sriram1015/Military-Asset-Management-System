import { useEffect, useState } from "react";
import axios from "../api/axios";

export default function Assignments() {
  const [assignments, setAssignments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("/assign/all")
      .then(res => setAssignments(res.data))
      .catch(err => setError("Failed to load assignments"));
  }, []);

  if (error) return <div>{error}</div>;
  if (!assignments) return <div>Loading...</div>;

  return (
    <div>
      <h2>Assignments</h2>
      <ul>
        {assignments.map(a => (
          <li key={a._id}>
            {a.asset ? a.asset.name : "Unknown Asset"} assigned to {a.assignedTo ? a.assignedTo.user_name : "Unknown"} by {a.assignedby ? a.assignedby.user_name : "Unknown"} - Qty: {a.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}