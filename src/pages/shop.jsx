import Nav from "../components/nav";
import photo1 from "../assets/photo1.jpeg";
import photo2 from "../assets/photo2.jpeg";
import photo3 from "../assets/photo3.jpeg";
import photo4 from "../assets/photo4.jpeg";
import photo5 from "../assets/photo5.jpeg";
import photo6 from "../assets/photo6.jpeg";
import photo7 from "../assets/photo7.jpeg";
import photo8 from "../assets/photo8.jpg";
import photo9 from "../assets/photo9.jpg";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import Footer from "../components/footer";
export default function shop() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [products, setProducts] = useState([
    {
      name: "BLUE FOAM (XPS) – Thermal Insulation Board",
      Description:"High-density extruded polystyrene boards designed for wall and roof insulation. Moisture-resistant and easy to install—ideal for residential and commercial projects",
      price: 200,
      image: photo1,
    },
    {
      name: "Reflective Insulation Roll – Heat Barrier Sheet",
      Description: "Double-layer reflective insulation roll that blocks up to 95% of radiant heat. Perfect for metal roofs, warehouses, and industrial spaces",
      price: 850,
      discount: "25%",
      image: photo2,
    },
    {
      name: " Thermal Blanket – Industrial Grade Insulation",
      Description: "Multi-purpose thermal blanket for pipe and equipment insulation. Heat and moisture resistant, ideal for industrial and mechanical applications",
      price: 180,
      image: photo3,
    },
    {
      name: "XPS Thermal Board – Compact Wall Insulation ",
      Description: "Engineered for high thermal resistance, this extruded foam board offers a rigid, lightweight solution for wall and roof insulation. Its closed-cell structure ensures minimal heat transfer and long-term durability in harsh environments",
      price: 240,
      image: photo4,
    },
    {
      name: "Reflective Barrier Roll – Dual-Layer Heat Shield",
      Description: "A flexible, foil-faced insulation roll designed to reflect radiant heat and reduce indoor temperature spikes. Ideal for metal roofs, attic spaces, and sun-exposed structures",
      price: 880,
      discount: "35%",
      image: photo5,
    },
    {
      name: "Rubber Foam Sheet – Flexible Thermal Wrap",
      Description: "Soft, compressible insulation sheets made from closed-cell rubber foam. Perfect for wrapping pipes, ducts, and machinery to prevent heat loss and condensation",
      price: 300,
      image: photo9,
    },
    {
      name: "Reflective Insulation Roll – Radiant Heat Shield",
      Description: "Premium-grade reflective insulation roll designed to deflect radiant heat and reduce indoor temperatures. Ideal for roofing, attic spaces, and sun-exposed structures",
      price: 250,
      image: photo7,
    },
    {
      name: "Thermal Wrap Roll – Flexible Heat Barrier",
      Description: "Versatile insulation roll with textured surface for enhanced grip and coverage. Suitable for wrapping pipes, ducts, and machinery in industrial or residential settings",
      price: 180,
      discount: "30%",
      image: photo8,
    },
    {
      name: "Multi-Roll Insulation Pack – Mixed Thermal Layers",
      Description: "A bundled set of reflective and fibrous insulation rolls for comprehensive thermal protection. Perfect for large-scale projects requiring varied insulation types",
      price: 200,
      image: photo6,
    },
  ]);
  const addtocart = (productIndex) => {
    console.log(productIndex);
    let selectedProduct = products[productIndex];
    console.log(selectedProduct);

    let newCart = [...cart];
    console.log(newCart);

    const existingProduct = newCart.find((item) => {
      return item.name === selectedProduct.name;
    });
    console.log(existingProduct);

    if (existingProduct) {
      existingProduct.qty += 1;
      console.log("qty ++");
      setCart(newCart);
      toast.success("Added to cart!");
      localStorage.setItem("cart", JSON.stringify(newCart));
    } else {
      newCart.push({ ...selectedProduct, qty: 1 });
      console.log("added to cart");
      setCart(newCart);
      toast.success("Added to cart!");
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };
  return (
    <>
      <Toaster />
      <Nav />
      <div className="container mx-auto pt-10 text-center px-4">
        <h1 className="text-green-500 text-5xl font-medium font-mono pb-12">
          SHOP
        </h1>
        <p className="text-start pb-4">Showing all 9 results</p>
      </div>
      <div className="container mx-auto grid md:grid-cols-3 grid-cols-1 gap-2 px-4 mb-7">
        {products.map((product, index) => {
          return (
            <div
              className="card bg-base-100 w-96 shadow-sm mt-3"
              key={index}
              product={product}
              index={index}
              products={products}
            >
              <figure>
                <img
                  src={product.image}
                  alt="product_image"
                  className="h-64 w-full object-contain mb-2 bg-white"
                />
              </figure>
              <div className="card-body bg-gray-100 dark:bg-gray-200">
                <h2 className="card-title text-black">{product.name}</h2>
                <h2 className="card-title text-sm text-gray-600 mb-5">{product.Description}</h2>
                <p className="font-bold text-black text-lg">
                  Price: {product.price} EGP
                </p>
                {product.discount && (
                  <p className="text-green-600 font-bold text-[17px]">
                    Discount: {product.discount}
                  </p>
                )}
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-primary hover:bg-green-500"
                    onClick={() => {
                      addtocart(index);
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}
