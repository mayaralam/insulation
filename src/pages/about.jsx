import Nav from "../components/nav";
import { PiPlantThin } from "react-icons/pi";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaTemperatureEmpty } from "react-icons/fa6";
import { GoShieldCheck } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { BsFillClipboard2CheckFill } from "react-icons/bs";
import us from "../assets/us.png";
import { IoIosHammer } from "react-icons/io";
import { FaRegCircleCheck } from "react-icons/fa6";
import Footer from "../components/footer";
export default function about() {
  const [card, setCard] = useState([
    {
      icon: <BsFillClipboard2CheckFill />,
      num: 1,
      title: " Free Consultation",
      para: "We assess your property and discuss your insulation needs and budget.",
    },
    {
      icon: <FiSearch />,
      num: 2,
      title: "Energy Audit",
      para: "Our experts conduct a thorough energy audit to identify problem areas.",
    },
    {
      icon: <IoIosHammer />,
      num: 3,
      title: "Professional Installation",
      para: "Our certified team installs premium insulation using industry-best practices.",
    },
    {
      icon: <FaRegCircleCheck />,
      num: 4,
      title: "Quality Inspection",
      para: "We verify installation quality and ensure you're completely satisfied.",
    },
  ]);
  return (
    <>
      <Nav />
      <div className="container mx-auto px-4 flex flex-col gap-3 mt-3">
        <h6 className="dark:text-blue-400 text-blue-700 text-lg">
          Why Choose Us
        </h6>
        <h4 className="font-bold text-xl">
          The Benefits of Professional Insulation
        </h4>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Investing in quality thermal insulation is one of the smartest
          decisions you can make for your property. Here's why thousands of
          customers trust us.
        </p>
      </div>
      <div className="container mx-auto  grid grid-cols-1  gap-6  p-6 rounded-lg shadow-md max-w-5xl mt-10">
        <div className="flex items-start gap-4">
          <div className="bg-blue-100 text-green-500 text-3xl py-2 px-2 rounded-sm">
            <BsCurrencyDollar />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Lower Energy Bills</h3>
            <p className="text-md text-gray-600 dark:text-gray-300">
              Reduce heating and cooling costs by up to 50% with proper
              insulation, seeing ROI in just a few years.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-blue-100 text-green-500 text-3xl py-2 px-2 rounded-sm">
            <FaTemperatureEmpty />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Year-Round Comfort</h3>
            <p className="text-md text-gray-600 dark:text-gray-300">
              Maintain consistent temperatures throughout your space,
              eliminating hot and cold spots.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-blue-100 text-green-600 text-3xl py-2 px-2 rounded-sm">
            <PiPlantThin />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Eco-Friendly</h3>
            <p className="text-md text-gray-600 dark:text-gray-300">
              Reduce your carbon footprint and contribute to environmental
              sustainability through energy efficiency.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-blue-100 text-green-600 text-3xl py-2 px-2 rounded-sm">
            <GoShieldCheck />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Increased Property Value</h3>
            <p className="text-md text-gray-600 dark:text-gray-300">
              Boost your property value and appeal to environmentally conscious
              buyers with quality insulation.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 flex items-center justify-center mb-5">
        <img
          src={us}
          alt="about_us_image"
          className="mt-5 max-h-[80dvh] rounded-3xl"
        />
      </div>
      <div className="container mx-auto px-4 flex flex-col items-center gap-3 mt-17">
        <h6 className="dark:text-blue-400 text-blue-700 text-lg">
          Our Process
        </h6>
        <h4 className="font-medium text-xl">How We Work</h4>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Our streamlined process ensures quality results with minimal
          disruption to your daily routine.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-lg shadow-lg mb-3">
        {card.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md min-h-[220px] space-y-4"
          >
            <div className="text-3xl bg-blue-100 text-green-500 py-4 px-4 rounded-3xl">
              {card.icon}
            </div>
            <div className="bg-blue-100 text-green-600 font-bold w-10 h-10 rounded-full flex items-center justify-center mb-4">
              {card.num}
            </div>
            <p className="text-lg text-black font-medium leading-relaxed">
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
