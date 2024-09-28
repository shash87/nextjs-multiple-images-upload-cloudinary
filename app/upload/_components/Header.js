import { UserButton } from "@clerk/nextjs";
import React from "react";


const Header = () => {
  return (
    <header className="bg-gray-900 ">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent">Nextjs + Cloudinary</h1>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <UserButton/>

            
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
