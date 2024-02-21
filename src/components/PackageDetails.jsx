import React from 'react'

const PackageDetails = () => {
  return (
    <div class="package-details">
    <h2 class="text-2xl font-semibold mb-4">Package Details</h2>
    <img
      src="https://via.placeholder.com/600x400"
      alt="Travel Package"
      class="w-full h-auto rounded-lg mb-4"
    />
    <div class="flex items-center mb-4">
      <div>
        <p class="text-gray-700">
          <span class="font-semibold">Package:</span> Package 1
        </p>
        <p class="text-gray-700">
          <span class="font-semibold">Destination:</span> Destination Name
        </p>
        <p class="text-gray-700">
          <span class="font-semibold">Duration:</span> 7 Days / 6 Nights
        </p>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-4 mb-4">
      <div>
        <p class="text-gray-700">
          <span class="font-semibold">Tour Start:</span> January 1, 2025
        </p>
      </div>
      <div>
        <p class="text-gray-700">
          <span class="font-semibold">Tour End:</span> January 7, 2025
        </p>
      </div>
    </div>
    <p class="text-gray-700">
      <span class="font-semibold">Inclusions:</span> Lorem ipsum dolor sit
      amet, consectetur adipiscing elit.
    </p>
    <p class="text-gray-700">
      <span class="font-semibold">Exclusions:</span> Lorem ipsum dolor sit
      amet, consectetur adipiscing elit.
    </p>
  </div>
  )
}

export default PackageDetails