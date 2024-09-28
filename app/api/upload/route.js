import { NextResponse } from 'next/server';

import cloudinary from '@/lib/cloudinary';



export const POST = async (request) => {
    try {
      // Parse the multipart/form-data request
      const formData = await request.formData();
      const file = formData.get('file');
  
      if (!file) {
        return NextResponse.json({ error: 'No file uploaded.' }, { status: 400 });
      }
  
      // Read the file data as a buffer
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
  
      // Convert buffer to base64 data URI
      const base64String = buffer.toString('base64');
      const dataUri = `data:${file.type};base64,${base64String}`;
  
      // Upload to Cloudinary
      const result = await cloudinary.uploader.upload(dataUri,{
        folder: process.env.CLOUDINARY_FOLDER_NAME,
      });
  
      // Return the Cloudinary URL
      return NextResponse.json({ url: result.secure_url }, { status: 200 });
    } catch (error) {
      console.error('Cloudinary upload error:', error);
      return NextResponse.json({ error: 'Cloudinary upload failed.' }, { status: 500 });
    }
  };