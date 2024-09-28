import { Trash } from 'lucide-react';
import React, { useEffect } from 'react'
import { toast } from "sonner"

const MyImages = ({files, setFiles}) => {
  const handleDelete = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  useEffect(() => {
    console.log(files);
  }, [files]);

  return (
    <div className='w-full'>
      {files.map((fileObj, index) => {
        fileObj.error && toast('Upload failed.');
        fileObj.uploaded && toast('Images Uploaded successfully to Cloudinary.');
        return(
        <div key={index} className="mt-4 p-4 border rounded bg-gray-50">
          <div className="flex items-center justify-between">
            <div className='text-sm text-gray-900 font-semibold'>{fileObj.file.name}</div>
           {fileObj.uploaded?"": <button
              onClick={() => handleDelete(index)}
              className="text-red-500"
            >
              <Trash className='w-4 h-4' />
            </button>}
          </div>
          <div className="w-full bg-gray-200 h-2 mt-2 rounded">
            <div
              className={`h-2 rounded ${
                fileObj.error
                  ? 'bg-red-500'
                  : fileObj.uploaded
                  ? 'bg-green-500'
                  : 'bg-blue-500'
              }`}
              style={{ width: `${fileObj.progress}%` }}
            ></div>
          </div>
          {fileObj.error && (
            <div className="text-red-500 mt-2">Upload failed.</div>
          )}
        </div>
      )})}
    </div>
  )
}

export default MyImages
