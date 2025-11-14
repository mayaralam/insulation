import Nav from "../components/nav";
import conus from "../assets/conus.png";
import { MdOutlineLocalPhone } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import toast from "react-hot-toast";
import Footer from "../components/footer";
export default function contact() {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Your request has been submitted!");
  };
  return (
    <>
      <Nav />
      <div className="container mx-auto px-4 flex flex-col gap-3 mt-3">
        <h6 className="dark:text-blue-400 text-blue-700 text-lg">
          Get In Touch
        </h6>
        <h4 className="text-lg font-light">Request Your Free Quote</h4>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Ready to improve your property's energy efficiency? Contact us today
          for a free, no-obligation consultation and quote.
        </p>
        <img src={conus} className="mt-5 max-h-[80dvh] rounded-3xl  items-center justify-center mb-5" />
      </div>
      <div className="container bg-white text-black p-6 mt-12 rounded-lg shadow-lg max-w-3xl mx-auto mb-5">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Request Free Quote
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
            <input
              type="text"
              placeholder="Last Name"
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Email"
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
            <input
              type="tel"
              placeholder="Phone"
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>

          <select className="border border-gray-300 rounded-md p-2 w-full">
            <option>Select property type</option>
            <option>Residential</option>
            <option>Commercial</option>
            <option>Industrial</option>
          </select>

          <textarea
            rows="4"
            placeholder="Tell us about your insulation needs..."
            className="border border-gray-300 rounded-md p-2 w-full"
          ></textarea>

          <button
            type="submit"
            className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition cursor-pointer"
          >
            Request Free Quote
          </button>
        </form>
      </div>

      <div className="container mx-auto  grid grid-cols-2  gap-6  p-6 rounded-lg shadow-md max-w-5xl mt-10 mb-5">
        <div className="flex items-start gap-4">
          <div className="bg-blue-100 text-green-500 text-3xl py-2 px-2 rounded-xl">
            <MdOutlineLocalPhone />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-700 dark:text-gray-400">
              Phone
            </h3>
            <p className="text-md text-gray-600 dark:text-gray-300">
              (555) 123-4567
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-blue-100 text-green-500 text-3xl py-3 px-3 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fill-opacity="0"
                d="M12 11l-8 -5h16l-8 5Z"
              >
                <animate
                  fill="freeze"
                  attributeName="fill-opacity"
                  begin="0.8s"
                  dur="0.5s"
                  values="0;1"
                />
              </path>
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path
                  stroke-dasharray="64"
                  stroke-dashoffset="64"
                  d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.6s"
                    values="64;0"
                  />
                </path>
                <path
                  stroke-dasharray="24"
                  stroke-dashoffset="24"
                  d="M3 6.5l9 5.5l9 -5.5"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.6s"
                    dur="0.2s"
                    values="24;0"
                  />
                </path>
              </g>
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-700 dark:text-gray-400">
              Email
            </h3>
            <p className="text-md text-gray-600 dark:text-gray-300">
              info@thermalguard.com
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-blue-100 text-green-600 text-3xl py-2 px-2 rounded-xl">
            <SlLocationPin />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-700 dark:text-gray-400">
              Address
            </h3>
            <p className="text-md text-gray-600 dark:text-gray-300">
              123 Insulation Way, Suite 100 Building City, ST 12345
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-blue-100 text-green-600 text-3xl py-3 px-3 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
              />
              <rect
                width="2"
                height="7"
                x="11"
                y="6"
                fill="currentColor"
                rx="1"
              >
                <animateTransform
                  attributeName="transform"
                  dur="9s"
                  repeatCount="indefinite"
                  type="rotate"
                  values="0 12 12;360 12 12"
                />
              </rect>
              <rect
                width="2"
                height="9"
                x="11"
                y="11"
                fill="currentColor"
                rx="1"
              >
                <animateTransform
                  attributeName="transform"
                  dur="0.75s"
                  repeatCount="indefinite"
                  type="rotate"
                  values="0 12 12;360 12 12"
                />
              </rect>
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-700 dark:text-gray-400">
              Business Hours
            </h3>
            <p className="text-md text-gray-600 dark:text-gray-300">
              Mon - Fri: 8:00 AM - 6:00 PM Sat: 9:00 AM - 4:00 PM
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
