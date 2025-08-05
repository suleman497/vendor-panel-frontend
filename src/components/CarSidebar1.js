// // components/CarSidebar.js
// import { useEffect, useState } from "react";
// import axios from "../api/axios";
// import { ChevronRight } from "lucide-react"; // Optional icon

// export default function CarSidebar({ onModelSelect }) {
//   const [carData, setCarData] = useState([]);
//   const [activeMake, setActiveMake] = useState(null);

//   useEffect(() => {
//     const fetchCarDetails = async () => {
//       try {
//         const res = await axios.get("/cardetails/all");
//         setCarData(res.data.cars);
//       } catch (error) {
//         console.error("Failed to fetch car details:", error);
//       }
//     };

//     fetchCarDetails();
//   }, []);

//   const groupedCars = carData.reduce((acc, car) => {
//     if (!acc[car.make]) {
//       acc[car.make] = new Set();
//     }
//     acc[car.make].add(car.model);
//     return acc;
//   }, {});

//   return (
//     <div className="w-full md:w-64 bg-white shadow-lg border-r border-orange-600 h-full overflow-y-auto rounded-md">
//       <h3 className="text-xl font-bold text-orange-600 p-4 border-b border-orange-300">CATEGORIES</h3>
//       <ul className="divide-y divide-orange-100">
//         {Object.keys(groupedCars).map((make) => (
//           <li
//             key={make}
//             onMouseEnter={() => setActiveMake(make)}
//             onMouseLeave={() => setActiveMake(null)}
//             className="hover:bg-orange-50 cursor-pointer transition-all"
//           >
//             <div className="flex items-center justify-between p-4 text-black font-semibold text-base bg-orange-100">
//               <span>{make}</span>
//               <ChevronRight className="w-4 h-4 text-orange-500" />
//             </div>

//             {activeMake === make && (
//               <div className="bg-white px-6 pb-3 pt-2">
//                 {[...groupedCars[make]].map((model) => (
//                   <div
//                     key={model}
//                     onClick={() => onModelSelect(make, model)}
//                     className="py-2 text-sm text-gray-700 border-b hover:bg-orange-100 hover:text-orange-600 cursor-pointer"
//                   >
//                     {model}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }





import { useEffect, useState } from "react";
import axios from "../api/axios";
import { ChevronDown } from "lucide-react";

export default function CarSidebar({ onModelSelect }) {
  const [carData, setCarData] = useState([]);
  const [activeMake, setActiveMake] = useState(null);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const res = await axios.get("/cardetails/all");
        setCarData(res.data.cars);
      } catch (error) {
        console.error("Failed to fetch car details:", error);
      }
    };

    fetchCarDetails();
  }, []);

  const groupedCars = carData.reduce((acc, car) => {
    if (!acc[car.make]) acc[car.make] = new Set();
    acc[car.make].add(car.model);
    return acc;
  }, {});

  return (
    <div className="w-full md:w-56 lg:w-64 xl:w-72 bg-white shadow-lg border border-orange-500 rounded-lg overflow-y-auto max-h-[80vh]">
      <h3 className="text-lg font-bold text-white bg-orange-600 p-4 rounded-t-md">
        Select Car Make
      </h3>

      <ul className="divide-y divide-gray-200">
        {Object.keys(groupedCars).map((make) => (
          <li
            key={make}
            onMouseEnter={() => setActiveMake(make)}
            onMouseLeave={() => setActiveMake(null)}
            className="relative transition-all"
          >
            {/* Make Row */}
            <div className="flex items-center justify-between px-4 py-3 bg-orange-100 hover:bg-orange-200 font-semibold text-black cursor-pointer">
              <span>{make}</span>
              <ChevronDown className="w-4 h-4 text-orange-600" />
            </div>

            {/* Show Models under Make */}
            {activeMake === make && (
              <div className="bg-white px-4 py-2 space-y-2 border-t border-orange-200 animate-fade-in">
                {[...groupedCars[make]].map((model) => (
                  <div
                    key={model}
                    onClick={() => onModelSelect(make, model)}
                    className="text-sm text-gray-700 hover:text-orange-600 hover:bg-orange-50 px-3 py-2 rounded cursor-pointer border-b border-gray-100"
                  >
                    {model}
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
