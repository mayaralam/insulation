import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import bg from "../assets/bg.jpg";
export default function login() {
  const navigate = useNavigate();
  const validationSchema = yup.object({
    email: yup
      .string()
      .required("Required")
      .test("is-valid", "Enter a valid email or phone number", (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10,15}$/;
        return emailRegex.test(value) || phoneRegex.test(value);
      }),
    password: yup.string().required("Required"),
  });

  const handleLogin = (values, { resetForm }) => {
    const { email, password } = values;
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
      (u) => (u.email === email || u.phone === email) && u.password === password
    );

    if (foundUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
      Swal.fire({
        title: `Welcome back, ${foundUser.username}!`,
        icon: "success",
        draggable: true,
      });
      resetForm();
      navigate("/");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid email/phone or password",
      });
    }
  };
  return (
    <div>
      <div className="grid md:grid-cols-2 grid-cols-1 ">
        <div
          className=" bg-cover h-screen"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="container mx-auto px-4 flex flex-col pt-40 justify-center gap-4 mb-12 pl-15">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="text-white opacity-90 shadow-2xl bg-transparent rounded-lg p-4 h-16 w-16"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M5.25 9.303V8a6.75 6.75 0 0 1 13.5 0v1.303q.34.023.642.064c.9.12 1.658.38 2.26.981c.602.602.86 1.36.982 2.26c.116.867.116 1.97.116 3.337v.11c0 1.367 0 2.47-.116 3.337c-.122.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-8.11c-1.367 0-2.47 0-3.337-.116c-.9-.122-1.658-.38-2.26-.982s-.86-1.36-.981-2.26c-.117-.867-.117-1.97-.117-3.337v-.11c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.981-2.26c.602-.602 1.36-.86 2.26-.981q.301-.041.642-.064M6.75 8a5.25 5.25 0 0 1 10.5 0v1.253q-.56-.004-1.195-.003h-8.11q-.634 0-1.195.003zm-3.341 3.409c.277-.277.665-.457 1.4-.556c.754-.101 1.756-.103 3.191-.103h8c1.435 0 2.436.002 3.192.103c.734.099 1.122.28 1.399.556c.277.277.457.665.556 1.4c.101.755.103 1.756.103 3.191s-.002 2.436-.103 3.192c-.099.734-.28 1.122-.556 1.399c-.277.277-.665.457-1.4.556c-.755.101-1.756.103-3.191.103H8c-1.435 0-2.437-.002-3.192-.103c-.734-.099-1.122-.28-1.399-.556c-.277-.277-.457-.665-.556-1.4c-.101-.755-.103-1.756-.103-3.191s.002-2.437.103-3.192c.099-.734.28-1.122.556-1.399"
                clip-rule="evenodd"
              />
            </svg>
            <h1 className="font-light md:text-5xl text-2xl text-white">Welcome Back</h1>
            <h6 className="font-medium md:text-xl text-md text-white">
              Sign in to access your account and continue your journey with us.
            </h6>
          </div>
          <div className=" flex">
            <ul className="text-white md:text-lg text-md space-y-4 list-disc pl-20 ">
              <li>Secure authentication</li>
              <li>Protected user data</li>
              <li>24/7 support available</li>
            </ul>
          </div>
        </div>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={handleLogin}
          validationSchema={validationSchema}
        >
          <Form className="container mx-auto flex flex-col gap-4 justify-center items-center mt-20">
            <h2 className="font-medium text-3xl">Sign In</h2>
            <p className="text-sm mb-5 text-center">
              Sign in to access your account and continue your journey with us.
            </p>
            <p className="mr-[44%] font-bold font-sans">Email</p>
            <Field
              name="email"
              type="email"
              className="w-[50%] input rounded-lg focus:outline-none"
              placeholder="you@example.com"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-600"
            />
            <p className="mr-[40%] font-bold font-sans">Password</p>
            <Field
              name="password"
              type="password"
              className="w-[50%] input rounded-lg focus:outline-none"
              placeholder="Enter your password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-600"
            />
            <button
              type="submit"
              className="w-[50%] bg-green-400 text-white rounded-lg px-2 py-1 mt-4 font-bold cursor-pointer font-sans"
            >
              Sign In
            </button>
            <div className="flex gap-2">
              <p className="text-gray-600 dark:text-gray-400 font-light mb-12">
                Don’t have an account?
              </p>
              <a href="/register" className="text-green-600 dark:text-green-400 font-light">
                Create one
              </a>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
