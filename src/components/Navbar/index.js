// import React from 'react';

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-800 p-2 mt-0 fixed w-full z-10 top-0">
//       <div className="container mx-auto flex flex-wrap items-center">
//         <div className="flex w-1/2 justify-start text-white font-extrabold">
//           <a className="text-white no-underline hover:text-white hover:no-underline" href="#">
//             <span className="text-2xl pl-2"><i className="em em-grinning"></i> E-Shop</span>
//           </a>
//         </div>
//         <div className="flex w-1/2 justify-end content-center">        
//           <a className="inline-block text-blue-400 no-underline hover:text-blue-200 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4" href="/cart">
//             <svg className="fill-current hover:text-blue-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
//               <path d="M10,2A1,1,0,0,0,9,3V4H4V6H6L9,14H19a1,1,0,0,0,.92-.62l3-7A1,1,0,0,0,22,5H6.42L5.27,2ZM9.55,12l-2-4H19.2l-2.17,5H9.55Z"/>
//               <circle cx="9" cy="21" r="1"/>
//               <circle cx="20" cy="21" r="1"/>
//             </svg>
//             <span className="hidden md:inline-block">Cart</span>
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;





"use client";
import React from "react";
import { Fragment } from "react";



const isAdminView = false;
const isAuthUser = true;
const user = {
    role : 'admin'
}

export default function Navbar() {

    return (
        <>
            <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"></div>
                <div className="flext items-center cursor-pointer">
                    <span className="slef-center text-2 font-semibold whitespace-nowrap">Ignite E-commerce</span>
                </div>
                <div className="flex md:order-2 gap-2">
                    {
                        !isAdminView && isAuthUser ? (
                            <Fragment>
                                <button>Account</button>
                                <button>Cart</button>
                            </Fragment> ) : null }
                            {
                                user?.role === "admin" ? 
                                isAdminView ? <button>Client View</button> : <button>Admin View</button>
                                : null
                            }
                    
                </div>

            </nav>
        </>
    );
}