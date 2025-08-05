// import { useState, useEffect } from "react";
// import axios from "../../api/axios";
// import CarSidebar from "../../components/CarSidebar1";
// import { useLocation, useNavigate } from "react-router-dom";

// export default function ShopPage() {
//   const { state } = useLocation(); // get make+model passed from Home
//   const navigate = useNavigate();
//   const [filters, setFilters] = useState({
//     make: state?.make || "",
//     model: state?.model || "",
//     year: "",
//     variant: "",
//     bodyType: ""
//   });
//   const [carDetails, setCarDetails] = useState([]);
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios.get("/carDetails/all")
//       .then(res => setCarDetails(res.data.cars))
//       .catch(err => console.error(err));
//   }, []);

//  useEffect(() => {
//   const fetchProducts = () => {
//     axios.get("/products/all-admin")
//       .then(res => {
//         const all = res.data.filter(p => p.make === filters.make && p.model === filters.model);
//         setProducts(all.filter(p =>
//           (!filters.year || p.year === +filters.year) &&
//           (!filters.variant || p.variant === filters.variant) &&
//           (!filters.bodyType || p.bodyType === filters.bodyType)
//         ));
//       })
//       .catch(err => console.error(err));
//   };

//   fetchProducts();
// }, [filters]);

// const handleFilterChange = (e) => {
//   const { name, value } = e.target;
//   setFilters(prev => ({
//     ...prev,
//     [name]: value
//   }));
// };


//   return (
//     <div className="flex flex-col md:flex-row p-4">
//       <div className="w-full md:w-64 mb-6 md:mb-0">
//         <CarSidebar onModelSelect={(make, model) => setFilters(prev => ({ ...prev, make, model }))} />
//         {/* Year / Variant / BodyType selectors */}
//         <div className="mt-4 space-y-2">
//           { ["year","variant","bodyType"].map(key => (
//             <select
//               key={key}
//               name={key}
//               value={filters[key]}
//               onChange={handleFilterChange}
//               className="w-full border p-2 rounded"
//             >
//               <option value="">{`Select ${key}`}</option>
//               {Array.from(new Set(carDetails
//                 .filter(cd => cd.make === filters.make && cd.model === filters.model)
//                 .map(cd => cd[key]))).map(val => (
//                 <option key={val} value={val}>{val}</option>
//               ))}
//             </select>
//           )) }
//         </div>
//       </div>

//       <div className="flex-1">
//         <img src="/images/shop-banner.png" alt="Shop Banner" className="w-full mb-6 object-contain" />
//         {products.length === 0 ? (
//           <p>No products available for selected filters.</p>
//         ) : (
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {products.slice(0,16).map(prod => (
//               <div
//                 key={prod._id}
//                 className="group relative border rounded overflow-hidden bg-white"
//               >
//                 <img
//                   src={prod.watermarkedImages?.[0] || prod.images?.[0]}
//                   alt={prod.ProductName}
//                   className="w-full h-48 object-contain"
//                 />
//                 <div className="p-2">
//                   <h3 className="font-semibold">{prod.ProductName}</h3>
//                   <p className="text-red-600">${prod.salePrice || prod.price}</p>
//                 </div>
//                 <button
//                   onClick={() => {/* add cart logic */}}
//                   className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 text-white font-bold"
//                 >
//                   Add to Cart
//                 </button>
//                 <div
//                   onClick={() => navigate(`/product/${prod._id}`)}
//                   className="absolute inset-0 cursor-pointer"
//                 />
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }









import { useState, useEffect } from "react";
import axios from "../../api/axios";
import CarSidebar from "../../components/CarSidebar1";
import { useLocation, useNavigate } from "react-router-dom";
import banner from "../../assets/kidsport.jpg";

export default function ShopPage() {

  const navigate = useNavigate();
const location = useLocation();
const state = location.state;
const searchParams = new URLSearchParams(location.search);

const [filters, setFilters] = useState({
  make: searchParams.get("make") || state?.make || "",
  model: searchParams.get("model") || state?.model || "",
    name: searchParams.get("name") || "",
  year: "",
  variant: "",
  bodyType: ""
});


  const [carDetails, setCarDetails] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    axios.get("/carDetails/all")
      .then(res => setCarDetails(res.data.cars))
      .catch(err => console.error(err));

    axios.get("/products/all-admin")
      .then(res => setAllProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  // Auto filter when make + model are selected
  useEffect(() => {
    if (!filters.make || !filters.model) {
      setFilteredProducts([]);
      return;
    }

    const result = allProducts.filter(p =>
      p.make === filters.make &&
      p.model === filters.model &&
      (!filters.year || p.year === +filters.year) &&
      (!filters.variant || p.variant === filters.variant) &&
      (!filters.bodyType || p.bodyType === filters.bodyType)&&
       (!filters.name || p.ProductName.toLowerCase().includes(filters.name.toLowerCase()))
    );

    setFilteredProducts(result);
  }, [filters.make, filters.model, filters.year, filters.variant, filters.bodyType, filters.name, allProducts]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const displayedProducts =
    filters.make && filters.model && filteredProducts.length > 0
      ? filteredProducts
      : filters.make && filters.model
      ? []
      : allProducts;

return (
  <div className="flex flex-col md:flex-row gap-10 px-6 py-6 bg-gray-50">
    {/* Sidebar */}
    <div className="w-full md:w-64 flex-shrink-0 space-y-4">
      <CarSidebar
        onModelSelect={(make, model) => {
          setFilters({
            make,
            model,
            year: "",
            variant: "",
            bodyType: ""
          });
        }}
      />

      {/* Filter Options */}
      <div className="space-y-2">
        {["year", "variant", "bodyType"].map((key) => (
          <select
            key={key}
            name={key}
            value={filters[key]}
            onChange={handleFilterChange}
            className="w-full border p-2 rounded"
          >
            <option value="">{`Select ${key}`}</option>
            {Array.from(
              new Set(
                carDetails
                  .filter(
                    (cd) =>
                      cd.make === filters.make &&
                      cd.model === filters.model
                  )
                  .map((cd) => cd[key])
              )
            ).map((val) => (
              <option key={val} value={val}>
                {val}
              </option>
            ))}
          </select>
        ))}
      </div>
    </div>

    {/* Content: Banner + Products */}
    <div className="flex-1 flex flex-col space-y-6">
      {/* Banner */}
      <img
        src={banner}
        alt="Shop Banner"
        className="w-full h-52 object-cover rounded shadow mb-4"
      />

      {displayedProducts.length === 0 ? (
        <p className="text-gray-500">No products available.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedProducts.map((prod) => (
            <div
              key={prod._id}
              className="group relative border rounded bg-white shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={prod.watermarkedImages?.[0] || prod.images?.[0]}
                alt={prod.ProductName}
                className="w-full h-48 object-contain p-2 bg-gray-50"
              />
              <div className="p-3">
                <h3 className="font-semibold text-sm truncate">
                  {prod.ProductName}
                </h3>
                <p className="text-red-600 font-bold text-md">
                  AED {Number(prod.price).toFixed(2)}
                </p>
              </div>

              {/* View Details hover */}
              <button
              onClick={() => navigate(`/product/${prod._id}`)} 
                className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-bold transition"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);
}