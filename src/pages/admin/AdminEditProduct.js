// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "../../api/axios";

// export default function EditProduct() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     ProductName: "",
//     sku: "",
//     unit: "",
//     price: "",
//     salePrice: "",
//     carParts: "",
//     side: "",
//     make: "",
//     model: "",
//     stock: "",
//     description: "",
//     brand: "",
//     size: "",
//     status: "pending", // default
//   });

//   const isAdmin = JSON.parse(sessionStorage.getItem("adminInfo"))?.token;
//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await axios.get(`/products/${id}`);
//         setFormData(res.data);
//       } catch (err) {
//         console.error("Failed to load product", err);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.put(`/products/edit/${id}`, formData);
//       alert("✅ Product updated!");
//       navigate("/view-products");
//     } catch (err) {
//       console.error(err);
//       alert("❌ Update failed.");
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow-md">
//       <h2 className="text-2xl font-semibold mb-4">Edit Product</h2>
//       <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
//         {Object.keys(formData)
//           .filter((field) => !["_id", "images", "createdAt", "updatedAt", "__v"].includes(field))
//           .map((field) => (
//             <div key={field} className="flex flex-col">
//               <label className="capitalize">{field}</label>

//               {field === "status" && !isAdmin ? (
//                 // Vendor shouldn't edit status, so just show text
//                 <input
//                   type="text"
//                   value={formData.status}
//                   disabled
//                   className="border p-2 rounded bg-gray-100 text-gray-600"
//                 />
//               ) : field === "status" && isAdmin ? (
//                 // Admin can change status
//                 <select
//                   name="status"
//                   value={formData.status}
//                   onChange={handleChange}
//                   className="border p-2 rounded"
//                   required
//                 >
//                   <option value="pending">Pending</option>
//                   <option value="approved">Approved</option>
//                   <option value="sold">Sold</option>
//                 </select>
//               ) : (
//                 <input
//                   type="text"
//                   name={field}
//                   value={formData[field]}
//                   onChange={handleChange}
//                   className="border p-2 rounded"
//                   required
//                 />
//               )}
//             </div>
//           ))}

//         <div className="col-span-2 text-right">
//           <button
//             type="submit"
//             className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
//           >
//             Update Product
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }







// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "../../api/axios";

// export default function AdminEditProduct() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     ProductName: "",
//     sku: "",
//     unit: "",
//     price: "",
//     salePrice: "",
//     carParts: "",
//     side: "",
//     make: "",
//     model: "",
//     stock: "",
//     description: "",
//     brand: "",
//     size: "",
//     status: "pending", // admin can update this
//   });

//   useEffect(() => {
//   const fetchProduct = async () => {
//     try {
//       const res = await axios.get(`/products/${id}`);
//       const data = res.data;

//       // Clean up the fields to avoid nested objects and missing values
//       const cleanedData = {
//         ProductName: data.ProductName || "",
//         sku: data.sku || "",
//         unit: data.unit || "",
//         price: data.price || "",
//         salePrice: data.salePrice || "",
//         carParts: data.carParts || "",
//         side: data.side || "",
//         make: data.make || "",
//         model: data.model || "",
//         stock: data.stock || "",
//         description: data.description || "",
//         brand: data.brand || "",
//         size: data.size || "",
//         status: data.status || "pending",
//       };

//       setFormData(cleanedData); // ✅ use cleaned data
//     } catch (err) {
//       console.error("Failed to load product", err);
//     }
//   };

//   fetchProduct();
// }, [id]);


//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`/products/edit/${id}`, formData);
//       alert("✅ Product updated!");
//       navigate("/admin/view-products");
//     } catch (err) {
//       console.error(err);
//       alert("❌ Update failed.");
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow-md">
//       <h2 className="text-2xl font-semibold mb-4">Edit Product</h2>
//       <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
//         {Object.keys(formData)
//           .filter((field) => !["_id", "images", "createdAt", "updatedAt", "__v", "vendorId"].includes(field))
//           .map((field) => (
//             <div key={field} className="flex flex-col">
//               <label className="capitalize">{field}</label>
//               {field === "status" ? (
//                 <select name="status" value={formData.status} onChange={handleChange} className="border p-2 rounded">
//                   <option value="pending">Pending</option>
//                   <option value="approved">Approved</option>
//                   <option value="sold">Sold</option>
//                 </select>
//               ) : (
//                 <input
//                   type="text"
//                   name={field}
//                   value={formData[field]}
//                   onChange={handleChange}
//                   className="border p-2 rounded"
//                   required
//                 />
//               )}
//             </div>
//           ))}

//         <div className="col-span-2 text-right">
//           <button
//             type="submit"
//             className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
//           >
//             Update Product
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }



















// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "../../api/axios";

// export default function AdminEditProduct() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     ProductName: "",
//     sku: "",
//     unit: "",
//     price: "",
//     salePrice: "",
//     carParts: "",
//     side: "",
//     make: "",
//     model: "",
//     stock: "",
//     description: "",
//     brand: "",
//     size: "",
//     status: "pending", // admin can update this
//   });

//   const [images, setImages] = useState([]); // 👈 Store image URLs

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await axios.get(`/products/${id}`);
//         const data = res.data;

//         // Cleaned and structured data
//         const cleanedData = {
//           ProductName: data.ProductName || "",
//           sku: data.sku || "",
//           unit: data.unit || "",
//           price: data.price || "",
//           salePrice: data.salePrice || "",
//           carParts: data.carParts || "",
//           side: data.side || "",
//           make: data.make || "",
//           model: data.model || "",
//           stock: data.stock || "",
//           description: data.description || "",
//           brand: data.brand || "",
//           size: data.size || "",
//           status: data.status || "pending",
//         };

//         setFormData(cleanedData);
//         setImages(data.images || []); // 👈 Set images from backend
//       } catch (err) {
//         console.error("Failed to load product", err);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`/products/edit/${id}`, formData);
//       alert("✅ Product updated!");
//       navigate("/admin/view-products");
//     } catch (err) {
//       console.error(err);
//       alert("❌ Update failed.");
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow-md">
//       <h2 className="text-2xl font-semibold mb-4">Edit Product</h2>
//       <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
//         {Object.keys(formData)
//           .filter((field) => !["_id", "images", "createdAt", "updatedAt", "__v", "vendorId"].includes(field))
//           .map((field) => (
//             <div key={field} className="flex flex-col">
//               <label className="capitalize">{field}</label>
//               {field === "status" ? (
//                 <select
//                   name="status"
//                   value={formData.status}
//                   onChange={handleChange}
//                   className="border p-2 rounded"
//                 >
//                   <option value="pending">Pending</option>
//                   <option value="approved">Approved</option>
//                   <option value="sold">Sold</option>
//                 </select>
//               ) : (
//                 <input
//                   type="text"
//                   name={field}
//                   value={formData[field]}
//                   onChange={handleChange}
//                   className="border p-2 rounded"
//                   required
//                 />
//               )}
//             </div>
//           ))}

//         <div className="col-span-2 text-right">
//           <button
//             type="submit"
//             className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
//           >
//             Update Product
//           </button>
//         </div>

//         {/* 👇 Show uploaded images from Cloudinary */}
//         {images.length > 0 && (
//           <div className="col-span-2 mt-6">
//             <h3 className="text-lg font-medium mb-2">Uploaded Images:</h3>
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//               {images.map((url, index) => (
//                 <div key={index} className="border p-2 rounded">
//                   <img
//                     src={url}
//                     alt={`Product ${index + 1}`}
//                     className="w-full h-40 object-contain"
//                     loading="lazy"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </form>
//     </div>
//   );
// }







import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../../api/axios";

export default function AdminEditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    ProductName: "",
    sku: "",
    unit: "",
    price: "",
    salePrice: "",
    carParts: "",
    side: "",
    make: "",
    model: "",
    stock: "",
    description: "",
    brand: "",
    size: "",
    status: "pending",
  });

  const [images, setImages] = useState([]);
  const [watermarkedImages, setWatermarkedImages] = useState([]);

  const fetchProduct = async () => {
    try {
      const res = await axios.get(`/products/${id}`);
      const data = res.data;

      const cleanedData = {
        ProductName: data.ProductName || "",
        sku: data.sku || "",
        unit: data.unit || "",
        price: data.price || "",
        salePrice: data.salePrice || "",
        carParts: data.carParts || "",
        side: data.side || "",
        make: data.make || "",
        model: data.model || "",
        stock: data.stock || "",
        description: data.description || "",
        brand: data.brand || "",
        size: data.size || "",
        status: data.status || "pending",
      };

      setFormData(cleanedData);
      setImages(data.images || []);
      setWatermarkedImages(data.watermarkedImages || []); // 👈 Load watermarked URLs if any
    } catch (err) {
      console.error("Failed to load product", err);
    }
  };

 useEffect(() => {
  fetchProduct();
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [id]);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedForm = { ...formData, isAdmin: true }; // 👈 Tell backend it's admin
      await axios.put(`/products/edit/${id}`, updatedForm);

      alert("✅ Product updated!");

      // 👇 Fetch again to refresh with updated watermarked images
      await fetchProduct();


      navigate("/admin/view-products");
    } catch (err) {
      console.error(err);
      alert("❌ Update failed.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Edit Product</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        {Object.keys(formData)
          .filter((field) => !["_id", "images", "createdAt", "updatedAt", "__v", "vendorId"].includes(field))
          .map((field) => (
            <div key={field} className="flex flex-col">
              <label className="capitalize">{field}</label>
              {field === "status" ? (
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="border p-2 rounded"
                >
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="sold">Sold</option>
                </select>
              ) : (
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="border p-2 rounded"
                  required
                />
              )}
            </div>
          ))}

        <div className="col-span-2 text-right">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Update Product
          </button>
        </div>

        {/* ✅ Show watermarked images if available */}
        {(watermarkedImages.length > 0 ? watermarkedImages : images).length > 0 && (
          <div className="col-span-2 mt-6">
            <h3 className="text-lg font-medium mb-2">
              {watermarkedImages.length > 0 ? "Watermarked Images:" : "Uploaded Images:"}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {(watermarkedImages.length > 0 ? watermarkedImages : images).map((url, index) => (
                <div key={index} className="border p-2 rounded">
                  <img
                    src={url}
                    alt={`Product ${index + 1}`}
                    className="w-full h-40 object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
