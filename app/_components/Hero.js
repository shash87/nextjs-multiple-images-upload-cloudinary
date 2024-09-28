import React from "react";
import { SignInButton } from "@clerk/nextjs";
import { GitHubLogoIcon } from "@radix-ui/react-icons";


const Hero = () => {
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
          Uploading multiple images to 
            <span className="sm:block"> Cloudinary using Next.js 14 </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
          This example demonstrates how to upload multiple images to Cloudinary using Next.js 14. It shows how to handle image uploads on the client side, send them to a Cloudinary API, and store the uploaded image URLs. This solution is ideal for applications requiring efficient image handling and cloud storage.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <SignInButton mode="modal" />

            <a
              className="w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto flex gap-2 items-center "
              href="https://github.com/shash87/nextjs-multiple-images-upload-cloudinary"
              target="_blank"
                rel="noopener noreferrer"
            >
             <GitHubLogoIcon /> Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
