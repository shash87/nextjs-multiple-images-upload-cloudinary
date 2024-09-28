import {
  ClerkProvider
  
} from '@clerk/nextjs'
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Nextjs14 Multiple Upload Images to Cluninary",
  description: "This example demonstrates how to upload multiple images to Cloudinary using Next.js 14. It shows how to handle image uploads on the client side, send them to a Cloudinary API, and store the uploaded image URLs. This solution is ideal for applications requiring efficient image handling and cloud storage.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
