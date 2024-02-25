import React from "react";
// import all_packages from "../assets/all_packages.js";
import { useSelector } from 'react-redux'

export const Item = ({ props }) => {
    console.log("Item: ", props);
    const { packageName, imageUrl, price } = props;
    return (
        <div className='bg-white rounded-lg shadow-md p-6'>
            <a href='#' className='text-lg font-semibold text-gray-900 mb-4 block'>
                {packageName}
            </a>
            <a href='#'>
                <img src={`http://localhost/assets/${imageUrl}.png`} alt='Travel Agency' className='mb-4 rounded-lg' />
            </a>
            <div className='grid grid-cols-2 gap-2'>
                <div className='col-span-2'>
                    <p className='text-gray-700'>
                        <strong>Package Name:</strong> Package 2
                    </p>
                </div>
                <div className='col-span-2'>
                    <p className='text-gray-700'>
                        <strong>Destination:</strong> Destination Name
                    </p>
                </div>
                <div className='col-span-2'>
                    <p className='text-gray-700'>
                        <strong>Description:</strong> Description of Package 2
                        goes here.
                    </p>
                </div>
                <div>
                    <p className='text-gray-700'>
                        <strong>Start Date:</strong> January 1, 2024
                    </p>
                </div>
                <div>
                    <p className='text-gray-700'>
                        <strong>End Date:</strong> January 7, 2024
                    </p>
                </div>
                <div>
                    <p className='text-gray-700'>
                        <strong>Duration:</strong> 7 days
                    </p>
                </div>
                <div className='col-span-2 mt-2'>
                    <p className='text-gray-700'>
                        <strong>Price:</strong> Rs {price}
                    </p>
                </div>
            </div>
        </div>
    );
};

const Package_item = () => {
    const allPackages = useSelector(state => state.package)
    return (
        <div className='container mx-auto mt-8 px-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                {allPackages.map((item, i) => {
                    return (
                        <Item
                            key={i}
                            props={item}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Package_item;
