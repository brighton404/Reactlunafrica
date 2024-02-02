import { FunctionComponent } from "react";
import BlogPostForm from "../components/Blog/Blogcreator";
import { useState, useEffect, useRef } from "react";

const Dashblog: FunctionComponent = () => {
  return (
    <div className="flex flex-col w-full font-poppins h-screen">
      <div className="flex flex-col w-full h-full">
        <div className="bg-base-blacks-var-1 flex justify-between items-center px-4 py-2">
          <div className="flex space-x-4 font-Poppins">
            <button className="bg-base-none text-base-whites-var-1 cursor-pointer">Files</button>
            <button className="bg-base-none text-base-whites-var-1 cursor-pointer">Edit</button>
            <button className="bg-base-none text-base-whites-var-1 cursor-pointer">Go</button>
            <button className="bg-base-none text-base-whites-var-1 cursor-pointer">Search</button>
            <button className="bg-base-none text-base-whites-var-1 cursor-pointer">User log</button>
          </div>
          <div className="bg-gray-900 p-2 rounded-full w-4 cursor-pointer"><a className="w-[24px] h-[24px] cursor-pointer bg-contain bg-no-repeat bg-center  bg-[url('/public/images/icons/user.svg')]"></a></div>
        </div>
        <div className="flex flex-1 overflow-hidden">
          <div className="bg-base-blacks-var-4 flex flex-col space-y-4 px-4 py-2">
            <button className="flex w-[20px] h-[20px] p-0 bg-base-none"><a className="flex flex-1 w-[20px] h-[20px] cursor-pointer bg-contain bg-no-repeat bg-center bg-[url('/public/images/icons/file-text.svg')] "/></button>
            <button className="flex w-[20px] h-[20px] p-0 bg-base-none"><a className="flex flex-1 w-[20px] h-[20px] cursor-pointer bg-contain bg-no-repeat bg-center bg-[url('/public/images/icons/paperclip.svg')]"/></button>
            <button className="flex w-[20px] h-[20px] p-0 bg-base-none"><a className="flex flex-1 w-[20px] h-[20px] cursor-pointer bg-contain bg-no-repeat bg-center bg-[url('/public/images/icons/monitor.svg')]"/></button>
            <button className="flex w-[20px] h-[20px] p-0 bg-base-none"><a className="flex flex-1 w-[20px] h-[20px] cursor-pointer bg-contain bg-no-repeat bg-center bg-[url('/public/images/icons/save.svg')]"/></button>
          </div>
          <div className="border-r border-gray-600 bg-base-greys-var-1 text-base-whites-var-1 w-[200px] resize: both; overflow-auto">
            <div className="bg-base-blacks-var-5 py-1 px-2 font-Poppins text-wide-screen-body-4x">All Blogs</div>
            <div className="flex flex-col"></div>
          </div>
          <div className="bg-base-blacks-var-4 flex-1 overflow-auto font-Poppins text-base-whites-var-1">
            <div className="bg-base-blacks-var-6 py-1 px-2 flex w-fit text-wide-screen-body-4x">Blog Preview Window</div>
          </div>
          <div className="bg-base-whites-var-1 flex-1 flex flex-col font-Poppins text-base-whites-var-1">
            <div className="bg-base-blacks-var-6 py-1 px-2 flex w-fit text-wide-screen-body-4x">Blog Creator Window</div>
            <div className="flex-1 bg-white mt-4">
              <div className="px-[10px]"><BlogPostForm /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashblog;