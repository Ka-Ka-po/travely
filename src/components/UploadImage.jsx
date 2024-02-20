import React from 'react'
import "../assets/css/UploadFrame.css"

function UploadImage() {
  return (
      <>
        <div className="gap-4 col-span-2 md:col-span-1 flex">
              <div class="col-span-2 md:col-span-1">
                <label for="image" class="form-label">Upload Image</label>
                <div class="image-upload-wrapper">
                <input type="file" id="image" name="image" accept="image/*" class="hidden"/>
                <label for="image" class="image-upload-placeholder border border-gray-300 rounded-md cursor-pointer bg-gray-100 hover:bg-gray-200">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                    <path fill-rule="evenodd" d="M10 3a7 7 0 100 14 7 7 0 000-14zM4 10a6 6 0 1112 0 6 6 0 01-12 0z" clip-rule="evenodd"/>
                    </svg>
                    <span class="mt-2 text-gray-500">Click to Upload Image</span>
                </label>
                </div>
            </div>
            <div class="col-span-2 md:col-span-1">
                <label for="package_name" class="form-label">Package Name</label>
                <input type="text" id="package_name" name="package_name" class="form-input" required/>
            </div>
        </div>
      </>
  )
}

export default UploadImage