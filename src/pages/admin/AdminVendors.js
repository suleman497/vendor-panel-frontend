// import { useEffect, useState } from 'react';
// import axios from '../../api/axios';

// export default function AdminVendors() {
//   const [vendors, setVendors] = useState([]);

//   useEffect(() => {
//     fetchVendors();
//   }, []);

//   const fetchVendors = async () => {
//     try {
//       const res = await axios.get('/admin/vendors', {
//         headers: {
//           Authorization: `Bearer ${sessionStorage.getItem("adminToken")}`
//         }
//       });
//       setVendors(res.data);
//     } catch (err) {
//       console.error('Failed to load vendors', err);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this vendor?")) return;
//     try {
//       await axios.delete(`/admin/vendor/${id}`, {
//         headers: {
//           Authorization: `Bearer ${sessionStorage.getItem("adminToken")}`
//         }
//       });
//       setVendors(vendors.filter(v => v._id !== id));
//     } catch (err) {
//       console.error('Failed to delete vendor', err);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">All Registered Vendors</h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white rounded shadow">
//           <thead className="bg-gray-200 text-gray-700">
//             <tr>
//               <th className="py-2 px-4">ID Number</th>
//               <th className="py-2 px-4">Name</th>
//               <th className="py-2 px-4">Contact</th>
//               <th className="py-2 px-4">Address</th>
//               <th className="py-2 px-4">City</th>
//               <th className="py-2 px-4">Area</th>
//               <th className="py-2 px-4">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {vendors.map(vendor => (
//               <tr key={vendor._id} className="border-t">
//                 <td className="py-2 px-4">{vendor.idNumber}</td>
//                 <td className="py-2 px-4">{vendor.firstName} {vendor.lastName}</td>
//                 <td className="py-2 px-4">{vendor.contact}</td>
//                 <td className="py-2 px-4">{vendor.address}</td>
//                 <td className="py-2 px-4">{vendor.city}</td>
//                 <td className="py-2 px-4">{vendor.area}</td>
//                 <td className="py-2 px-4">
//                   <button
//                     onClick={() => handleDelete(vendor._id)}
//                     className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//             {vendors.length === 0 && (
//               <tr>
//                 <td colSpan="7" className="py-4 text-center text-gray-500">No vendors found.</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }






import { useEffect, useState } from 'react';
import axios from '../../api/axios';

export default function AdminVendors() {
  const [vendors, setVendors] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchVendors();
  }, []);

  const fetchVendors = async () => {
    try {
      const res = await axios.get('/admin/vendors', {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("adminToken")}`
        }
      });
      setVendors(res.data);
    } catch (err) {
      console.error('Failed to load vendors', err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this vendor?")) return;
    try {
      await axios.delete(`/admin/vendor/${id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("adminToken")}`
        }
      });
      setVendors(vendors.filter(v => v._id !== id));
    } catch (err) {
      console.error('Failed to delete vendor', err);
    }
  };

  // Filter vendors by ID or Name
  const filtered = vendors.filter(v => {

  const fullName = `${v.firstName} ${v.lastName}`.toLowerCase();
  const query = search.toLowerCase();
  return(
    v.idNumber.includes(search) ||
    v.firstName.toLowerCase().includes(search.toLowerCase()) ||
    v.lastName.toLowerCase().includes(search.toLowerCase())  ||
     fullName.includes(query)
  );
});

// to aprove vendor here Ab

const handleApprove = async (id) => {
  if (!window.confirm("Approve this vendor?")) return;
  try {
    await axios.put(`/admin/vendor/approve/${id}`, {}, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("adminToken")}`
      }
    });
    fetchVendors();
  } catch (err) {
    console.error('Failed to approve vendor', err);
  }
};



  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">All Registered Vendors</h2>

      {/* 🔍 Search Box */}
      <input
        type="text"
        placeholder="Search by ID or Name"
        className="mb-4 px-4 py-2 border rounded w-full max-w-md"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="py-2 px-4">ID Number</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Contact</th>
              <th className="py-2 px-4">Address</th>
              <th className="py-2 px-4">City</th>
              <th className="py-2 px-4">Area</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
 <tbody>
  {filtered.map(vendor => (
    <tr key={vendor._id} className="border-t">
      <td className="py-2 px-4">{vendor.idNumber}</td>
      <td className="py-2 px-4">{vendor.firstName} {vendor.lastName}</td>
      <td className="py-2 px-4">{vendor.contact}</td>
      <td className="py-2 px-4">{vendor.address}</td>
      <td className="py-2 px-4">{vendor.city}</td>
      <td className="py-2 px-4">{vendor.area}</td>
      <td className="py-2 px-4 space-x-2 flex items-center">
        {/* ✅ Approval Button */}
        {vendor.isApproved ? (
          <span className="text-green-600 font-semibold">Approved</span>
        ) : (
          <button
            onClick={() => handleApprove(vendor._id)}
            className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
          >
            Approve
          </button>
        )}

        {/* 🗑 Delete Button */}
        <button
          onClick={() => handleDelete(vendor._id)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </td>
    </tr>
  ))}
  {filtered.length === 0 && (
    <tr>
      <td colSpan="7" className="py-4 text-center text-gray-500">No vendors match your search.</td>
    </tr>
  )}
</tbody>

        </table>
      </div>
    </div>
  );
}
