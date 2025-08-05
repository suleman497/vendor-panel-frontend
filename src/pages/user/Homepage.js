// import banner from "../../assets/bannerhome.jpeg";
// import CarSidebar from "../../components/CarSidebar1"; // adjust path
// import { useNavigate } from "react-router-dom";

// export default function Home() {
//   const navigate = useNavigate();

//   const handleModelSelect = (make, model) => {
//     navigate(`/products?make=${make}&model=${model}`);
//   };

//   return (
//     <div className="w-full">
//       {/* Banner Section with Text and Search */}
//       <div
//         className="relative bg-cover bg-center h-[300px] md:h-[400px] flex flex-col justify-center items-center text-white"
//         style={{ backgroundImage: `url(${banner})` }}
//       >
//         {/* Overlay Text */}
//         <div className="bg-black bg-opacity-50 p-4 rounded mb-4 text-center w-11/12 md:w-auto">
//           <h1 className="text-2xl md:text-4xl font-bold">Find Genuine Spare Parts for Your Vehicle</h1>
//           <p className="mt-2 text-sm md:text-base">Reliable – Verified – Fast Delivery</p>
//         </div>

//         {/* Search Fields */}
//         <div className="flex flex-col md:flex-row items-center gap-4 bg-white bg-opacity-90 p-4 rounded shadow-md w-11/12 md:w-auto">
//           <input
//             type="text"
//             placeholder="Car Make"
//             className="border border-orange-500 px-4 py-2 rounded w-full md:w-[250px]"
//           />
//           <input
//             type="text"
//             placeholder="Car Model"
//             className="border border-orange-500 px-4 py-2 rounded w-full md:w-[250px]"
//           />
//           <input
//             type="text"
//             placeholder="Spare Part Name"
//             className="border border-orange-500 px-4 py-2 rounded w-full md:w-[250px]"
//           />
//           <button className="bg-orange-500 text-black px-6 py-2 rounded hover:bg-orange-600 w-full md:w-auto">
//             Search
//           </button>
//         </div>
//       </div>

//       {/* Car Sidebar Dropdown Section */}
//       <div className="flex flex-col md:flex-row">
//         <CarSidebar onModelSelect={handleModelSelect} />

//         {/* Right section to display optional content */}
//         <div className="flex-1 p-4">
//           <h2 className="text-xl font-bold text-orange-600">Select a make and model to browse parts</h2>
//           {/* You can display search results, featured items, etc., here */}
//         </div>
//       </div>
//     </div>
//   );
// }






// import banner from "../../assets/bannerhome.jpeg";
// import CarSidebar from "../../components/CarSidebar1";
// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "../../api/axios";

// export default function Home() {
//   const navigate = useNavigate();
//   const [sliders, setSliders] = useState([]);

//   const handleModelSelect = (make, model) => {
//     navigate(`/products?make=${make}&model=${model}`);
//   };

//   useEffect(() => {
//     const fetchSliders = async () => {
//       try {
//         const res = await axios.get("/upload/sliders?type=slider");
//         setSliders(res.data);
//       } catch (err) {
//         console.error("Failed to fetch sliders", err);
//       }
//     };
//     fetchSliders();
//   }, []);

//   return (
//     <div className="w-full">
//       {/* Banner Section with Text and Search */}
//       <div
//         className="relative bg-cover bg-center h-[300px] md:h-[400px] flex flex-col justify-center items-center text-white"
//         style={{ backgroundImage: `url(${banner})` }}
//       >
//         {/* Overlay Text */}
//         <div className="bg-black bg-opacity-50 p-4 rounded mb-4 text-center w-11/12 md:w-auto">
//           <h1 className="text-2xl md:text-4xl font-bold">Find Genuine Spare Parts for Your Vehicle</h1>
//           <p className="mt-2 text-sm md:text-base">Reliable – Verified – Fast Delivery</p>
//         </div>

//         {/* Search Fields */}
//         <div className="flex flex-col md:flex-row items-center gap-4 bg-white bg-opacity-90 p-4 rounded shadow-md w-11/12 md:w-auto">
//           <input
//             type="text"
//             placeholder="Car Make"
//             className="border border-orange-500 px-4 py-2 rounded w-full md:w-[250px]"
//           />
//           <input
//             type="text"
//             placeholder="Car Model"
//             className="border border-orange-500 px-4 py-2 rounded w-full md:w-[250px]"
//           />
//           <input
//             type="text"
//             placeholder="Spare Part Name"
//             className="border border-orange-500 px-4 py-2 rounded w-full md:w-[250px]"
//           />
//           <button className="bg-orange-500 text-black px-6 py-2 rounded hover:bg-orange-600 w-full md:w-auto">
//             Search
//           </button>
//         </div>
//       </div>

//       {/* Car Sidebar Dropdown Section */}
//       <div className="flex flex-col md:flex-row">
//         <CarSidebar onModelSelect={handleModelSelect} />

//         {/* Right section with slider and message */}
//         <div className="flex-1 p-4">
//           <div className="flex justify-center mb-4">
//             <div className="bg-black text-orange-500 px-6 py-3 rounded shadow-md font-semibold text-center text-lg animate-pulse">
//               ➤ Select a make and model to browse parts
//             </div>
//           </div>

//           <div className="relative w-full h-[400px] overflow-hidden rounded shadow-md">
//             {sliders.map((slider, index) => (
//               <div
//                 key={slider._id}
//                 className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === 0 ? "opacity-100 z-10" : "opacity-0 z-0"}`}
//               >
//                 <img
//                   src={`http://localhost:5000${slider.imageUrl}`}
//                   alt={slider.subtitle}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 p-6">
//                   <h3 className="text-xl text-white font-bold mb-2">{slider.subtitle}</h3>
//                   <button className="bg-orange-500 text-black px-4 py-2 rounded hover:bg-orange-600">
//                     Shop Now
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }






// import banner from "../../assets/bannerhome.jpeg";
// import CarSidebar from "../../components/CarSidebar1";
// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "../../api/axios";

// export default function Home() {
//   const navigate = useNavigate();
//   const [sliders, setSliders] = useState([]);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const handleModelSelect = (make, model) => {
//     navigate(`/products?make=${make}&model=${model}`);
//   };

//   useEffect(() => {
//     const fetchSliders = async () => {
//       try {
//         const res = await axios.get("/upload/sliders?type=slider");
//         setSliders(res.data);
//       } catch (err) {
//         console.error("Failed to fetch sliders", err);
//       }
//     };
//     fetchSliders();
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % sliders.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [sliders.length]);

//   return (
//     <div className="w-full">
//       {/* Banner Section with Text and Search */}
//       <div
//         className="relative bg-cover bg-center h-[300px] md:h-[400px] flex flex-col justify-center items-center text-white"
//         style={{ backgroundImage: `url(${banner})` }}
//       >
//         <div className="bg-black bg-opacity-50 p-4 rounded mb-4 text-center w-11/12 md:w-auto">
//           <h1 className="text-2xl md:text-4xl font-bold">Find Genuine Spare Parts for Your Vehicle</h1>
//           <p className="mt-2 text-sm md:text-base">Reliable – Verified – Fast Delivery</p>
//         </div>

//         <div className="flex flex-col md:flex-row items-center gap-4 bg-white bg-opacity-90 p-4 rounded shadow-md w-11/12 md:w-auto">
//           <input
//             type="text"
//             placeholder="Car Make"
//             className="border border-orange-500 px-4 py-2 rounded w-full md:w-[250px]"
//           />
//           <input
//             type="text"
//             placeholder="Car Model"
//             className="border border-orange-500 px-4 py-2 rounded w-full md:w-[250px]"
//           />
//           <input
//             type="text"
//             placeholder="Spare Part Name"
//             className="border border-orange-500 px-4 py-2 rounded w-full md:w-[250px]"
//           />
//           <button className="bg-orange-500 text-black px-6 py-2 rounded hover:bg-orange-600 w-full md:w-auto">
//             Search
//           </button>
//         </div>
//       </div>

//       {/* Car Sidebar Dropdown Section */}
//       <div className="flex flex-col md:flex-row">
//         <CarSidebar onModelSelect={handleModelSelect} />

//         <div className="flex-1 p-4">
//           <div className="flex justify-center mb-3">
//             <div className="bg-white-800 text-orange-500 px-6 py-3 rounded shadow-md font-semibold text-center text-lg animate-pulse">
//               <span className="mr-3 animate-bounce text-3xl">☚</span>
//               Select a make and model to browse parts
//             </div>
//           </div>

//           <div className="relative w-full h-[580px] overflow-hidden rounded shadow-md mb-10">
//             {sliders.map((slider, index) => (
//               <div
//                 key={slider._id}
//                 className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//                   index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
//                 }`}
//               >
//                 <img
//                   src={`http://localhost:5000${slider.imageUrl}`}
//                   alt={slider.subtitle}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 p-6">
//                   <h3 className="text-lg text-white mb-2">{slider.subtitle}</h3>
//                   <button className="bg-orange-500 text-black px-4 py-2 rounded hover:bg-orange-600">
//                     Shop Now
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Insert full-width promotional banner */}
//          <div
//   className="relative w-full bg-cover bg-center h-[600px]  min-h-screen flex justify-center items-center"
//   style={{ backgroundImage: `url(${banner})` }}
// >
//             <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-40 p-6 text-center">
//               <h2 className="text-4xl font-bold mb-4">Car Parts That Exceed Your Expectations</h2>
//               <p className="mb-4 max-w-2xl">
//                 Morbi accumsan sodales sociosqu curae egestas metus. Tellus nascetur egestas nunc consectetur ullamcorper sodales dignissim montes ultricies rhoncus etiam. In maximus efficitur dignissim primis semper himenaeos pharetra.
//               </p>
//               <button className="bg-orange-500 text-white font-bold px-6 py-2 rounded shadow hover:bg-orange-600">
//                 Go To Shop !
//               </button>
//             </div>
//             <div className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 w-[90%] bg-white shadow-lg grid grid-cols-1 md:grid-cols-4 gap-6 px-6 py-6 rounded">
//               <div className="text-center">
//                 <h3 className="text-3xl font-extrabold">2,500<span className="text-orange-500"> +</span></h3>
//                 <p className="text-gray-600">Brand Product</p>
//               </div>
//               <div className="text-center">
//                 <h3 className="text-3xl font-extrabold">96<span className="text-orange-500"> %</span></h3>
//                 <p className="text-gray-600">Customer Satisfaction</p>
//               </div>
//               <div className="text-center">
//                 <h3 className="text-3xl font-extrabold">120<span className="text-orange-500"> +</span></h3>
//                 <p className="text-gray-600">Offline Store</p>
//               </div>
//               <div className="text-center">
//                 <h3 className="text-3xl font-extrabold">75<span className="text-orange-500"> +</span></h3>
//                 <p className="text-gray-600">Professional Team</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




import banner from "../../assets/bannerhome.jpeg";
import review from '../../assets/reviews.png'
import CarSidebar from "../../components/CarSidebar1";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../api/axios";

export default function Home() {
  const navigate = useNavigate();
  const [sliders, setSliders] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [make, setMake] = useState('');
const [model, setModel] = useState('');
const [partName, setPartName] = useState('');



  const handleModelSelect = (make, model) => {
navigate(`/shop?make=${make}&model=${model}`);

  };

  useEffect(() => {
    const fetchSliders = async () => {
      try {
        const res = await axios.get("/upload/sliders?type=slider");
        setSliders(res.data);
      } catch (err) {
        console.error("Failed to fetch sliders", err);
      }
    };
    fetchSliders();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliders.length);
    }, 5000);
    return () => clearInterval(interval);

    
  }, [sliders.length]);

  return (
    <div className="w-full">
      {/* Banner Section with Text and Search */}
     <div
  className="relative bg-cover bg-center h-[300px] md:h-[400px] flex flex-col justify-center items-center text-white mt-4"
  style={{ backgroundImage: `url(${banner})` }}
>
  {/* Heading */}
  <div className="bg-black bg-opacity-50 p-4 rounded mb-4 text-center w-11/12 md:w-auto">
    <h1 className="text-xl sm:text-2xl md:text-4xl font-bold">
      Find Genuine Spare Parts for Your Vehicle
    </h1>
    <p className="mt-2 text-xs sm:text-sm md:text-base">
      Reliable – Verified – Fast Delivery
    </p>
  </div>

  {/* Search Form */}
  <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center items-center gap-3 bg-white bg-opacity-90 p-4 rounded shadow-md w-11/12 max-w-5xl">
    <input
      type="text"
      placeholder="Car Make"
      value={make}
      onChange={(e) =>
        setMake(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))
      }
      className="border border-orange-500 px-4 py-2 rounded w-full sm:w-[200px] md:w-[250px] text-black"
    />

    <input
      type="text"
      placeholder="Car Model"
      value={model}
      onChange={(e) =>
        setModel(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))
      }
      className="border border-orange-500 px-4 py-2 rounded w-full sm:w-[200px] md:w-[250px] text-black"
    />

    <input
      type="text"
      placeholder="Spare Part Name"
      value={partName}
      onChange={(e) =>
        setPartName(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))
      }
      className="border border-orange-500 px-4 py-2 rounded w-full sm:w-[200px] md:w-[250px] text-black"
    />

    <button
      onClick={() => {
        const query = new URLSearchParams({
          make,
          model,
          name: partName
        }).toString();
        navigate(`/shop?${query}`);
      }}
      className="bg-orange-500 text-black px-6 py-2 rounded hover:bg-orange-600 w-full sm:w-auto"
    >
      Search
    </button>
  </div>
</div>


      {/* Car Sidebar Dropdown Section */}
      <div className="flex flex-col md:flex-row mt-6">
        <CarSidebar onModelSelect={handleModelSelect} />

        <div className="flex-1 p-4">
          <div className="flex justify-center mb-3">
            <div className="bg-white-800 text-orange-500 px-6 py-3 rounded shadow-md font-semibold text-center text-lg animate-pulse">
              <span className="mr-3 animate-bounce text-3xl">☚</span>
              Select a make and model to browse parts
            </div>
          </div>

          <div className="relative w-full h-[580px] overflow-hidden rounded shadow-md mb-10">
            {sliders.map((slider, index) => (
              <div
                key={slider._id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}
              >
               
                <img
  src={slider.imageUrl}  
  alt={slider.title}
 className="w-full h-full object-cover"

/>

                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 p-6">
                  <h3 className="text-lg text-white mb-2">{slider.subtitle}</h3>
                  <button className="bg-orange-500 text-black px-4 py-2 rounded hover:bg-orange-600">Shop Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Promotional Banner Section Full Width */}
      <div
        className="relative w-full bg-cover bg-center h-[600px] flex justify-center items-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-40 p-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Car Parts That Exceed Your Expectations</h2>
          <p className="mb-4 max-w-2xl">
            Morbi accumsan sodales sociosqu curae egestas metus. Tellus nascetur egestas nunc consectetur ullamcorper sodales dignissim montes ultricies rhoncus etiam.
          </p>
          <button className="bg-orange-500 text-white font-bold px-6 py-2 rounded shadow hover:bg-orange-600">Go To Shop !</button>
        </div>

        <div className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 w-[90%] bg-white shadow-lg grid grid-cols-1 md:grid-cols-4 gap-6 px-6 py-6 rounded">
          <div className="text-center">
            <h3 className="text-3xl font-extrabold">2,500<span className="text-orange-500"> +</span></h3>
            <p className="text-gray-600">Brand Product</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-extrabold">96<span className="text-orange-500"> %</span></h3>
            <p className="text-gray-600">Customer Satisfaction</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-extrabold">120<span className="text-orange-500"> +</span></h3>
            <p className="text-gray-600">Offline Store</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-extrabold">75<span className="text-orange-500"> +</span></h3>
            <p className="text-gray-600">Professional Team</p>
          </div>
        </div>
      </div>
      {/* About Us Concept Section Based on Image */}
<div className="w-full bg-white mt-28 px-4 md:px-12 lg:px-24 py-12">
  <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
    
    {/* Left: Image with Badge */}
    <div className="relative w-full lg:w-1/2 flex justify-center">
      <img
        src={review} 
        alt="Auto Parts"
        className="w-full max-w-[600px] h-auto rounded shadow-md"
      />
      <div className="absolute top-4 left-4 bg-white px-6 py-4 rounded shadow-lg text-center">
        <h2 className="text-4xl font-bold text-orange-500">24+</h2>
        <p className="text-gray-800 text-sm font-semibold">Years Experience</p>
      </div>
    </div>

    {/* Right: Text Content */}
    <div className="w-full lg:w-1/2 text-center lg:text-left">
      <p className="text-sm font-semibold text-gray-500 uppercase mb-2">About Us</p>
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
        The Essence of Engineering,<br /> Fueled by Passion
      </h2>
      <p className="text-gray-600 mb-6 max-w-xl mx-auto lg:mx-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>

      {/* Services */}
      <div className="space-y-6">
        {/* Auto Part Store */}
        <div className="flex items-start gap-4">
          <div className="bg-orange-500 p-3 rounded text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a4 4 0 00-8 0v2M5 11h14l1 9H4l1-9z" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-lg text-gray-900">Auto Part Store</h4>
            <p className="text-gray-600 text-sm">
              Sit porta elementum laoreet phasellus duis nostra augue. Dictumst in porta inceptos maximus convallis
            </p>
          </div>
        </div>

        {/* Auto Service */}
        <div className="flex items-start gap-4">
          <div className="bg-orange-500 p-3 rounded text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-lg text-gray-900">Auto Service</h4>
            <p className="text-gray-600 text-sm">
              Sit porta elementum laoreet phasellus duis nostra augue. Dictumst in porta inceptos maximus convallis
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Feature Highlights Section */}
<div className="w-full bg-white py-12 px-4 md:px-12 lg:px-24">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    
    {/* Feature 1 */}
    <div className="flex items-start gap-4 border-r lg:border-r border-gray-200 pr-4">
      <div className="text-orange-500 text-3xl">
        <i className="fas fa-truck"></i>
      </div>
      <div>
        <h4 className="font-bold text-lg text-gray-900">Free Shipping</h4>
        <p className="text-gray-600 text-sm">
          Donec eros laoreet auctor nostra in platea porttitor suscipit.
        </p>
      </div>
    </div>

    {/* Feature 2 */}
    <div className="flex items-start gap-4 border-r lg:border-r border-gray-200 pr-4">
      <div className="text-orange-500 text-3xl">
        <i className="fas fa-credit-card"></i>
      </div>
      <div>
        <h4 className="font-bold text-lg text-gray-900">Secure Payment</h4>
        <p className="text-gray-600 text-sm">
          Donec eros laoreet auctor nostra in platea porttitor suscipit.
        </p>
      </div>
    </div>

    {/* Feature 3 */}
    <div className="flex items-start gap-4 border-r lg:border-r border-gray-200 pr-4">
      <div className="text-orange-500 text-3xl">
        <i className="fas fa-shield-alt"></i>
      </div>
      <div>
        <h4 className="font-bold text-lg text-gray-900">30 Days Warranty</h4>
        <p className="text-gray-600 text-sm">
          Donec eros laoreet auctor nostra in platea porttitor suscipit.
        </p>
      </div>
    </div>

    {/* Feature 4 */}
    <div className="flex items-start gap-4">
      <div className="text-orange-500 text-3xl">
        <i className="fas fa-headset"></i>
      </div>
      <div>
        <h4 className="font-bold text-lg text-gray-900">24/7 Support</h4>
        <p className="text-gray-600 text-sm">
          Donec eros laoreet auctor nostra in platea porttitor suscipit.
        </p>
      </div>
    </div>

  </div>
</div>

     
    </div>
    
  );
}
