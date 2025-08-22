import { useEffect, useState } from "react";
import { fetchDashboard } from "../services/api";
export default function Dashboard() {
    const [data, setData] = useState(null);
    useEffect(() => { fetchDashboard().then(res => setData(res.data)).catch(console.error); }, []);
    if (!data) return <div className="p-6">Loading...</div>;
    return (<div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4"> <div className="p-4 bg-blue-100 rounded shadow">Opening: {data.openingBalance}</div> <div className="p-4 bg-green-100 rounded shadow">Closing: {data.closingBalance}</div> <div className="p-4 bg-yellow-100 rounded shadow">Net Movement: {data.netMovement}</div> <div className="p-4 bg-red-100 rounded shadow"> Assigned: {data.assigned} / Expended: {data.expended} </div> </div>);
}