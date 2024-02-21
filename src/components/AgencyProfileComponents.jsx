import React from 'react';

const CoverPhoto = () => {
    return(
        <div className="bg-gray-300 h-64 flex items-center justify-center bg-center bg-no-repeat">
        <img src="" alt="Cover Photo" className="w-full h-full object-cover"/>
      </div>
      
    );
}
const ProfileInformation = () =>{
    return(
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">XYZ Travel Agency</h2>
          <button type="submit" className="bg-gray-900 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors duration-300">Edit Profile</button>
        </div>
    );
}
const ContactInformation = () =>{
    return(
        <div>
            <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
            <p className="mb-2"><strong>Email:</strong> info@xyztravelagency.com</p>
            <p className="mb-2"><strong>Phone:</strong> +1 234 567 890</p>
            <p className="mb-2"><strong>Address:</strong> 123 Main St, City, Country</p>
          </div>
    );
}
const AboutUs = () =>{
    return(
        <div>
            <h3 className="text-xl font-semibold mb-2">About Us</h3>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
            <h3 className="text-xl font-semibold mb-2">Our Services</h3>
            <ul>
              <li className="mb-1">Tour Packages</li>
              <li className="mb-1">Flight Booking</li>
              <li className="mb-1">Hotel Reservations</li>
              <li className="mb-1">Car Rentals</li>
            </ul>
          </div>
    );
}
const Location = () => {
    return(
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Locations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-200 p-4 rounded-md">
              <h4 className="font-semibold">Location 1</h4>
              <p className="text-gray-500">123 Street, City1, Country1</p>
            </div>
            <div className="bg-gray-200 p-4 rounded-md">
              <h4 className="font-semibold">Location 2</h4>
              <p className="text-gray-500">456 Avenue, City2, Country2</p>
            </div>
            <div className="bg-gray-200 p-4 rounded-md">
              <h4 className="font-semibold">Location 3</h4>
              <p className="text-gray-500">789 Road, City3, Country3</p>
            </div>
          </div>
        </div>
    );
}
const AgencyProfileComponents =()=>{
    return(
        <div className="container mx-auto mt-8 px-4">
            <div className="bg-white rounded-lg shadow-md">
                <CoverPhoto/>
                <div className="p-6">
                    <ProfileInformation/>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ContactInformation/>
                        <AboutUs/>
                    </div>
                    <Location/>
                </div>
            </div>
        </div>
    );
}
export default AgencyProfileComponents
