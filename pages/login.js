// import Heator from "../components/shareholder/Heator";

// import React, { useContext, useEffect, useState } from "react";
// // import VectorImg from "../public/assets/logo/manage.jpg";
// // // import LoginImg from "/public/asset/logo/plb.jpg";
// // import Link from "next/link";
// // import Image from "next/image";
// import { useRouter } from "next/router";
// import { useForm } from "react-hook-form";
// import { UserAuth } from "../context/AuthContext";

// function Login() {
//   // const router = useRouter();
//  const { Userlogin}= UserAuth();
//  const [isdata , setIsData]=useState(false)
//  const [error , setError]=useState("")
//  const {
//    handleSubmit,
//    register,
//    formState: { errors },
//    watch
//  } = useForm();
//  const email= watch("email");
//  const password = watch('password');
//  const submitHandler = async  (e) => {
//    // e.preventDefault();
// Userlogin(email,password).then((user_data)=>{
//      setIsData(true)
// }).catch(err=>{
//  setError(err.message)
// })
//  };
//  useEffect(() => {
//    const user= JSON.parse(sessionStorage.getItem("user"));
//    if(user){
//      if (user.roll===2) {
//        router.push("/");
//      }
//      if (user.roll===0) {
//        router.push("/log");
//      }
//    }

//    // if (userdata) {
//    // //  Userlogin(email,password);
//    // }
//  }, [isdata]);
//   return (
//     <Heator>
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//             {isForgotPassword ? 'Forgot Password' : 'Log in to your account'}
//           </h2>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit(submitHandler)}>
//           <input type="hidden" name="remember" value="true" />
//           {!isForgotPassword && (
//             <div className="rounded-md shadow-sm -space-y-px">
//               <div>
//                 <label htmlFor="email-address" className=" mb-12">
//                   Email address
//                 </label>
//                 <input
//                  id="email"
//                  type={"email"}
//                  placeholder="enter email"
//                  {...register("email", {
//                    required: "Please enter email",
//                    pattern: {
//                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
//                      message: "Please enter valid email",
//                    },
//                  })}
//                 />
//                 {errors.email && (
//                 <div className="text-red-600">{errors.email.message}</div>
//               )}
//               </div>
//               <div>
//                 <label htmlFor="password" className="mt-36">
//                   Password
//                 </label>
//                 <input
//                  type={"password"}
//                  placeholder="Enter your password"
//                  {...register("password", {
//                    required: "Please enter password",
//                    minLength: {
//                      value: 6,
//                      message: "password is more than 5 chars",
//                    },
//                  })}
//                  id="password"
//                 />
//                  {errors.password && (
//                 <div className="text-red-500 ">{errors.password.message}</div>
//               )}
//               </div>
//             </div>
//           )}

//           {errorMessage && (
//             <p className="mt-2 text-sm text-red-600" id="error-message">
//               {errorMessage}
//             </p>
//           )}

//           {/* {!isForgotPassword ? (
//             <>
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center">
//                   <input
//                     id="remember-me"
//                     name="remember-me"
//                     type="checkbox"
//                     className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
//                   />
//                   <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
//                     Remember me
//                   </label>
//                 </div>

//                 <div className="text-sm">
//                   <a
//                     href="#"
//                     className="font-medium text-indigo-600 hover:text-indigo-500"
//                     onClick={() => setIsForgotPassword(true)}
//                   >
//                     Forgot your password?
//                   </a>
//                 </div>
//               </div> */}

//               <div>
//                 <button
//                   type="submit"
//                   disabled={isLoading}
//                   className={`${
//                     isLoading ? 'opacity-50 cursor-wait' : ''
//                   } group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
//                 >
//                   <span className="absolute left-0 inset-y-0 flex items-center pl-3">
//                     <svg
//                       className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                       aria-hidden="true"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm-.5-9a1 1 0 011-1h1a1 1 0 010 2h-1a1 1 0 01-1-1zm0 4a1 1 0 100 2 1 1 0 000-2z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </span>
//                   {isLoading ? 'Logging in...' : 'Login'}
//                 </button>
//               </div>
//             {/*
//           ) : (
//              <>
//               <p className="mt-2 text-sm text-gray-600">
//                 Please enter the email address associated with your account and we will email you a link to reset your
//                 password.
//               </p>
//               <div className="rounded-md shadow-sm -space-y-px">
//                 <div>
//                   <label htmlFor="email-address" className="sr-only">
//                     Email address
//                   </label>
//                   <input
//                     id="email-address"
//                     name="email"
//                     type="email"
//                     autoComplete="email"
//                     required
//                     className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                     placeholder="Email address"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                 </div>
//               </div>
//               <div>
//                 <button
//                   type="submit"
//                   disabled={isLoading}
//                   className={`${
//                     isLoading ? 'opacity-50 cursor-wait' : ''
//                   } group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
//                 >
//                   {isLoading ? 'Sending email...' : 'Send reset email'}
//                 </button>
//               </div>
//               <div className="text-sm mt-4">
//                 <a
//                   href="#"
//                   className="font-medium text-indigo-600 hover:text-indigo-500"
//                   onClick={() => setIsForgotPassword(false)}
//                 >
//                   Back to login
//                 </a>
//               </div>
//             </> */}

//         </form>
//       </div>
//     </div>
//     </Heator>
//   );
// }
// export default Login;

// Login.getLayout = function pageLayout(page)
// {
//   return(
//     <>

//     {page}

//     </>
//   )
// }
import React, { useContext, useEffect, useState } from "react";
// import VectorImg from "../public/assets/logo/manage.jpg";
// // import LoginImg from "/public/asset/logo/plb.jpg";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { UserAuth } from "../context/AuthContext";
import Heator from "../components/Landing_page/Heator";

export default function Login() {
  const router = useRouter();
  const { Userlogin } = UserAuth();
  const [isdata, setIsData] = useState(false);
  const [error, setError] = useState("");
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm();
  const email = watch("email");
  const password = watch("password");
  const submitHandler = async (e) => {
    // e.preventDefault();
    Userlogin(email, password)
      .then((user_data) => {
        setIsData(true);
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (user) {
      if (user.roll === 2) {
        router.push("/admin1");
      }
      if (user.roll === 1) {
        router.push("/admin2");
      }
      if (user.roll === 0) {
        router.push("/shareholder/dashboard");
      }
    }

    // if (userdata) {
    // //  Userlogin(email,password);
    // }
  }, [isdata]);
  return (
    <Heator>
      <div className="flex justify-center itmes-center bg-gray-300 h-screen  xl:justify-around gap-2  ">
        
        <div className="mt-16 w-1/2 h-1/2 bg-white p-8">
          <div>
         
          <div>
            <h2 className="items-center">Log in to your account</h2>
          </div>
         
            <form
             
              onSubmit={handleSubmit(submitHandler)}
            >
              <div className="rounded-md shadow-sm -space-y-px">
                
                <div className="my-4 font-bold">
                <label htmlFor="email-address" className="">
                   Email address
                </label>
                </div>
                <input
                  className=" appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm
                           "
                  id="email"
                  type={"email"}
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Please enter email",
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                    
                      message: "Please enter valid email",
                      
                    },
                  })}
                />
                {errors.email && (
                  <div className="text-red-600">{errors.email.message}</div>
                )}
              </div>
              <div className="rounded-md shadow-sm -space-y-px">
               <div className="my-4">
               <label 
                className="font-bold "
                 htmlFor="">Password</label>
               </div>
                <input
                  className=" appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm
                           "
                  type={"password"}
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Please enter password",
                    minLength: {
                      value: 6,
                      message: "password is more than 5 chars",
                    },
                  })}
                  id="password"
                />
                {errors.password && (
                  <div className="text-red-500 ">{errors.password.message}</div>
                )}
              </div>

              <div className="mb-8 mt-6">
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 mb-16"
                >
                  log in
                </button>
              </div>
            </form>
            {/* <div className="-mt-6 flex items-center md:justify-center -ml-6">
              <Link href={"/"}>
                <p className=" py-5 md:pl-32 font-medium text-[20px] text-green-700 sm:pl-18">
                  Forget Password?
                </p>
              </Link>
            </div> */}
            {error && <div className="text-red-500 ">{error}</div>}
          </div>
        </div>
      </div>
    </Heator>
  );
}
