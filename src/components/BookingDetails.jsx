import React from "react";

const BookingDetails = () => {
  return (
    <div class="booking-details">
      <h2 class="text-2xl font-semibold mb-4">Booking Details</h2>
      <form action="#" method="POST">
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label for="name" class="block text-gray-700 font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              class="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label for="email" class="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label for="phone" class="block text-gray-700 font-bold mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              class="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label for="passport" class="block text-gray-700 font-bold mb-2">
              Passport Number
            </label>
            <input
              type="text"
              id="passport"
              name="passport"
              class="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>
        <h2 class="text-2xl font-semibold mb-4">Booking Summary</h2>
        <div class="booking-summary mb-4">
          <p class="text-gray-700">
            <span class="font-semibold">Basic Package Charge:</span> $XXX
          </p>
          <p class="text-gray-700">
            <span class="font-semibold">Tax Inclusion:</span> Included
          </p>
          <p class="text-gray-700">
            <span class="font-semibold">Promo Code:</span> ABC123 (10% discount)
          </p>
        </div>
        <hr class="my-4" />
        <div class="mb-4">
          <p class="text-gray-700">
            <span class="font-semibold">Final Payable Amount:</span> $YYY
          </p>
        </div>
        <button
          type="submit"
          class="custom-button text-white py-2 px-4 rounded-md bg-gray-900 hover:bg-gray-700"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingDetails;
