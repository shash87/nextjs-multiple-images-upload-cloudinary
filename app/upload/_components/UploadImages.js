import { Button } from "@/components/ui/button";
import { UploadIcon } from "@radix-ui/react-icons";
import React, {useState} from "react";

const UploadImages = () => {
    const [files, setFiles] = useState([]);

//   const handleFileChange = (e) => {
//     const files = e.target.files;
//     console.log(files);
//   };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files).map((file) => ({
      file,
      progress: 0,
      uploaded: false,
      error: false,
    }));
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  const handleDelete = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full flex flex-col gap-3">
    <label
      htmlFor="dropzone-file"
      className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  "
    >
      <div className="flex flex-col items-center justify-center pt-5 pb-6">
        <svg
          className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 16"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
          />
        </svg>
        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
          <span className="font-semibold">Click to upload</span> or drag and
          drop
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          SVG, PNG, JPG or GIF (MAX. 800x400px)
        </p>
      </div>
      <input
        id="dropzone-file"
        type="file"
        multiple
        onChange={handleFileChange}
        className="hidden"
      />
    </label>
    <Button><UploadIcon/> Upload Images</Button>

    {files.map((fileObj, index) => (
        <div key={index} className="mt-4 p-4 border rounded">
          <div className="flex items-center justify-between">
            <div>{fileObj.file.name}</div>
            <button
              onClick={() => handleDelete(index)}
              className="text-red-500"
            >
              Delete
            </button>
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
      ))}
    </div>
  );
};

export default UploadImages;
