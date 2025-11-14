import Nav from "../components/nav";
import bcg from "../assets/bcg.png";
import { useState, useRef, useEffect } from "react";
import { FiHome } from "react-icons/fi";
import { LuBuilding2 } from "react-icons/lu";
import { PiGarage } from "react-icons/pi";
import { IoIosSnow } from "react-icons/io";
import { FaFireFlameCurved } from "react-icons/fa6";
import { MdAir } from "react-icons/md";
import Footer from "../components/footer";
import 'animate.css';
export default function home() {
  
    const ref = useRef();

  useEffect(() => {
    const animate = () => {
      ref.current.classList.add("animate__slideInLeft");
      setTimeout(() => {
        ref.current.classList.remove("animate__slideInLeft");
      }, 1000);
    };

    animate();
    const interval = setInterval(animate, 3000);
    return () => clearInterval(interval);
  }, []);
  

  const [card, setCard] = useState([
    {
      icon: <FiHome />,
      title: "Residential Insulation",
      para: "Complete home insulation solutions including attics, walls, and crawl spaces for maximum comfort and efficiency.",
    },
    {
      icon: <LuBuilding2 />,
      title: "Commercial Insulation",
      para: "Large-scale insulation projects for offices, retail spaces, and commercial buildings with minimal disruption.",
    },
    {
      icon: <PiGarage />,
      title: "Industrial Solutions",
      para: "Heavy-duty insulation for warehouses, factories, and industrial facilities to maintain optimal temperatures.",
    },
    {
      icon: <IoIosSnow />,
      title: "Cool Roof Systems",
      para: "Reflective roofing insulation that reduces heat absorption and keeps buildings cooler in summer months.",
    },
    {
      icon: <FaFireFlameCurved />,
      title: "Fire-Resistant Insulation",
      para: "Advanced fire-rated insulation materials that provide both thermal efficiency and fire protection.",
    },
    {
      icon: <MdAir />,
      title: "Air Sealing Services",
      para: "Professional air sealing to eliminate drafts and improve the overall performance of your insulation.",
    },
  ]);
  return (
    <>
      <Nav />
      <div className="container mx-auto px-4 grid grid-cols-2 items-center py-4 ">
        <div>
          <h1 className="font-bold md:text-6xl text-4xl mb-5 animate__animated animate__fadeInDown">
            Superior Insulation Solutions
          </h1>
          <h6 className="md:text-2xl text-xl text-gray-500 dark:text-gray-300 mb-3">
            Save Energy, Maximize Comfort with Expert Insulation
          </h6>
          <h5 className="md:text-2xl text-xl text-gray-500 dark:text-gray-300 mb-7">
            Reduce your energy bills by up to 50% with our premium thermal
            insulation services. Expert installation, lasting results, and
            year-round comfort for your home or business.
          </h5>
          <div className="flex items-center gap-3 bg-blue-50 text-blue-700 px-5 py-3 rounded-full w-fit shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2l7 4v5c0 5.25-3.5 9.75-7 11-3.5-1.25-7-5.75-7-11V6l7-4z"
              />
            </svg>
            <span className="font-medium text-sm">
              Professional Thermal Insulation Solutions
            </span>
          </div>
        </div>
        <img src={bcg} />
      </div>
      <div className="bg-white">
        <div className="container mx-auto px-4 ">
          <div ref={ref} className="py-10 px-6 text-center grid grid-cols-3 gap-6 max-w-5xl mx-auto animate__animated animate__slideInLeft">
            <div>
              <h3 className="text-3xl font-medium text-blue-700">15+</h3>
              <p className="text-sm text-gray-600 mt-1">Years Experience</p>
            </div>

            <div>
              <h3 className="text-3xl font-medium text-blue-700">5000+</h3>
              <p className="text-sm text-gray-600 mt-1">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-3xl font-medium text-blue-700">98%</h3>
              <p className="text-sm text-gray-600 mt-1">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 flex flex-col items-center text-center mt-10 gap-3 ">
        <h6 className="text-green-600 dark:text-green-400 text-xl font-medium">
          Our Services
        </h6>
        <h5 className="text-2xl font-medium">
          Comprehensive Insulation Solutions
        </h5>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          From residential homes to large commercial projects, we provide expert
          insulation services tailored to your specific needs and budget.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-lg shadow-lg mt-5 px-4 mb-3">
        {card.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-start bg-gray-50 p-6 rounded-lg shadow-md min-h-[220px] space-y-4"
          >
            <div className="text-3xl bg-blue-100 text-green-500 py-2 px-2 rounded-3xl">
              {card.icon}
            </div>
            <p className="text-lg text-gray-500 leading-relaxed">
              {card.title}
            </p>
            <p className="text-lg text-gray-500">{card.para}</p>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
