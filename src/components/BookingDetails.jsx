import React from "react";

const BookingDetails = () => {
  return (
    <div className="booking-details">
      <h2 className="text-2xl font-semibold mb-4">Booking Details</h2>
      <form action="#" method="POST">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="passport" className="block text-gray-700 font-bold mb-2">
              Passport Number
            </label>
            <input
              type="text"
              id="passport"
              name="passport"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>
        <h2 className="text-2xl font-semibold mb-4">Booking Summary</h2>
        <div className="booking-summary mb-4">
          <p className="text-gray-700">
            <span className="font-semibold">Basic Package Charge:</span> $XXX
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Tax Inclusion:</span> Included
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Promo Code:</span> ABC123 (10% discount)
          </p>
        </div>
        <hr className="my-4" />
        <div className="mb-4">
          <p className="text-gray-700">
            <span className="font-semibold">Final Payable Amount:</span> $YYY
          </p>
        </div>
        <button
          type="submit"
          className="custom-button text-white py-2 px-4 rounded-md bg-gray-900 hover:bg-gray-700"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingDetails;
