import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function ContactDetails() {
  return (
    <section className="py-12 bg-gray-50 text-center max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-semibold text-gray-800 mb-10 sm:text-4xl">Contact Details</h2>

      <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-10">
        {/* Location */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center hover:shadow-xl transition-shadow duration-300 
                        w-full max-w-md md:w-72 h-56 mx-auto">
          <FaMapMarkerAlt className="text-orange-500 mb-4" size={40} />
          <h3 className="text-xl font-medium text-orange-500 mb-2">Location</h3>
          <p className="text-gray-600 leading-relaxed">
            123 Flavor Street<br />
            Mumbai, Maharashtra
          </p>
        </div>

        {/* Phone */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center hover:shadow-xl transition-shadow duration-300
                        w-full max-w-md md:w-72 h-56 mx-auto">
          <FaPhoneAlt className="text-orange-500 mb-4" size={40} />
          <h3 className="text-xl font-medium text-orange-500 mb-2">Phone</h3>
          <a
            href="tel:+919876543210"
            className="text-gray-600 hover:text-orange-500 transition-colors"
          >
            +91 98765 43210
          </a>
        </div>

        {/* Email */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center hover:shadow-xl transition-shadow duration-300
                        w-full max-w-md md:w-72 h-56 mx-auto">
          <FaEnvelope className="text-orange-500 mb-4" size={40} />
          <h3 className="text-xl font-medium text-orange-500 mb-2">Email</h3>
          <a
            href="mailto:support@cafehimalayna.com"
            className="text-gray-600 hover:text-orange-500 transition-colors break-all"
          >
            support@cafehimalayna.com
          </a>
        </div>
      </div>
    </section>
  );
}
