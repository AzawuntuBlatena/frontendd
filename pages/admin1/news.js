import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { BsArrowRightShort } from "react-icons/bs";
import Layout from '../admin1'
function news() {
  return (
    <Layout>
    <div className="h-screen w-full bg-gray-200 mb-10 p-4">
      <div className=" ml-96 mb-2 ">
        <div className="w-40 p-2 bg-sky-500 xl:ml-80 sm:-ml-96 h-10 border border-gray-600 rounded-2xl text-center text-lg font-semibold text-white ">
          <Link href="/admin1/newscreate">Create News</Link>
        </div>
      </div>
      {/* <div className="max-w-xl ">
        <div className="w-2/3 xl:h-5/6 md:full sm:h-full border border-gray-200 p-4  m-8 text-center bg-white rounded-2xl  xl:ml-48 ">
          <div className="w-full h-36 ">
            <img
              src="8.jpg"
              alt="nothing"
              className="w-full h-36 rounded-t-2xl"
            />
          </div>
          <div className="flex gap-2 items-center ml-9 my-4">
            <div cl>
              <p>Apr 29, 2023</p>
            </div>
            <div className="ml-8">
              <p>1 Minutes Read</p>
            </div>
          </div>
          <div className="text-2xl text-bold text-sky-800 mb-5">
            <h1>ዓለም አቀፉን የሴቶች ቀን (ማርች 8) አከባበር</h1>
          </div>
          <div className="">
            <p>
            
            </p>
          </div>
          <div className="mt-10 xl:-ml-52">
            <Link className=" text-sky-500 font-semibold mb-3" href="#">
              Read More
              <div className="-mt-5 text-lg font-bold">
                <BsArrowRightShort className="xl:ml-80" />
              </div>
            </Link>
          </div>
        </div> */}
      {/* </div> */}
    </div>
    </Layout>
  );
}

export default news;
