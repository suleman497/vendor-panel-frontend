import React from "react";
import banner from  '../../assets/bannerhome.jpeg'
export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Top Banner */}
      <div
        className="relative bg-cover bg-center h-[300px] flex items-center justify-center text-white"
       style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">Get In Touch</h1>
          <p className="text-sm text-orange-500">
            <span className="text-white">Home</span> / Contact
          </p>
        </div>
      </div>

      {/* Contact Info & Form */}
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Contact Info Box with Image and Overlay */}
        <div
          className="relative bg-black rounded shadow overflow-hidden"
          style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="bg-black bg-opacity-80 p-6 text-white h-full">
            <h2 className="text-xl font-bold mb-4">Contact Detail</h2>
            <p className="text-sm mb-4">
              Lorem elit ornare diam nulla rhoncus curae. Faucibus senectus sapien maximus a molestie.
            </p>

            <div className="mb-4">
              <h4 className="font-bold">Our Office</h4>
              <p className="text-sm">Jl. Cempaka Wangi No 22<br />Jakarta – Indonesia</p>
            </div>

            <div className="mb-4">
              <h4 className="font-bold">Phone</h4>
              <p className="text-sm">+622120022012<br />+622120022021</p>
            </div>

            <div className="mb-4">
              <h4 className="font-bold">Email</h4>
              <p className="text-sm">hello@yourdomain.tld<br />support@yourdomain.tld</p>
            </div>

            <div className="mt-6">
              <h4 className="font-bold mb-2">Follow our social media :</h4>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/abdullah.malik.848102" className="w-8 h-8 flex items-center justify-center bg-orange-600 rounded text-white text-sm font-bold">f</a>
                <a href="https://www.instagram.com/abdullah_malik_.03/?hl=en" className="w-8 h-8 flex items-center justify-center bg-orange-600 rounded text-white text-sm font-bold">i</a>
                <a href="https://x.com/malik_abduallah" className="w-8 h-8 flex items-center justify-center bg-orange-600 rounded text-white text-sm font-bold">t</a>
              
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Message us, we will be in touch shortly</h2>
          <p className="text-sm text-gray-600 mb-6">
            Trincidunt accumsan nunc netus volutpat pretium cubilia. Tristique ridiculus erat et neque pharetra urna metus amet parturient porta.
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="border px-4 py-2 rounded w-full" />
              <input type="text" placeholder="Phone" className="border px-4 py-2 rounded w-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="email" placeholder="Email" className="border px-4 py-2 rounded w-full" />
              <input type="text" placeholder="Subject" className="border px-4 py-2 rounded w-full" />
            </div>
            <textarea placeholder="Message" rows="5" className="border px-4 py-2 rounded w-full"></textarea>
            <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded font-semibold">
              <i className="fas fa-paper-plane mr-2"></i> Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Bottom: Embedded Google Map */}
      <div className="w-full h-[400px]">
        <iframe
          title="Map"
          className="w-full h-full border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.699346596895!2d73.08771967401225!3d33.56118704350278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfecd312097875%3A0x4057399822bc2d29!2sJoyland!5e0!3m2!1sen!2s!4v1753741063493!5m2!1sen!2s" 
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}


