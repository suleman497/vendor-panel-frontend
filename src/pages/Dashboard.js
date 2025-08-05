import { useEffect, useState } from "react";
import axios from "../api/axios";

export default function Dashboard() {
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    approved: 0,
    sold: 0,
  });

  const vendor = JSON.parse(sessionStorage.getItem("vendorInfo"));

  useEffect(() => {
    if (!vendor?.id) return;

    axios
      .get(`/products/all?vendorId=${vendor.id}`)
      .then((res) => {
        const all = res.data;
        const pending = all.filter((p) => p.status === "pending").length;
        const approved = all.filter((p) => p.status === "approved").length;
        const sold = all.filter((p) => p.status === "sold").length;

        setStats({
          total: all.length,
          pending,
          approved,
          sold,
        });
      })
      .catch((err) => {
        console.error("❌ Error fetching dashboard stats", err);
      });
  }, [vendor?.id]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Vendor Dashboard</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <StatBox label="Total Products" value={stats.total} color="bg-blue-600" />
        <StatBox label="Pending" value={stats.pending} color="bg-yellow-500" />
        <StatBox label="Approved" value={stats.approved} color="bg-green-600" />
        <StatBox label="Sold" value={stats.sold} color="bg-red-600" />
      </div>

      <div className="bg-gray-100 p-4 rounded text-sm">
        <p>
          <strong>Vendor ID:</strong>{" "}
          <span className="text-blue-700">{vendor?.idNumber}</span>
        </p>
      </div>
    </div>
  );
}

function StatBox({ label, value, color }) {
  return (
    <div
      className={`p-4 rounded shadow text-white ${color} flex flex-col items-center justify-center`}
    >
      <p className="text-xl font-semibold">{value}</p>
      <p className="text-sm mt-1">{label}</p>
    </div>
  );
}
