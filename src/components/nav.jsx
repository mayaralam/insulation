import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoPersonSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Nav() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="../shop">Shop</Link>
              </li>
              <li>
                <Link to="../about">About Us</Link>
              </li>
              <li>
                <Link to="../contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center px-4">
          <div className="bg-green-500 dark:bg-green-400 px-2 py-2 text-white font-bold rounded-lg">TG</div>
          <a className="btn btn-ghost text-xl">ThermalGuard</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="../shop">Shop</Link>
            </li>
            <li>
              <Link to="../about">About Us</Link>
            </li>
            <li>
              <Link to="../contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <div className="relative">
              <Link to="../cart">
                <AiOutlineShoppingCart className="size-6" />
              </Link>
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {cart.length}
                </span>
              )}
            </div>
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <IoPersonSharp className="size-5" />
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
