import React from "react";
// import all_packages from "../assets/all_packages.js";
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"

export const Item = ({ props ,showButton}) => {
    console.log("Item: ", props);
    const { id, destination, packageName, imageUrl, description, startDate, endDate, duration, price } = props;

    const handleOrder = (e) => {
        const packageId = e.target.id;
        console.log(`Package ID: ${packageId} ordered`)
    }
    return (
        <div className='bg-white rounded-lg shadow-md p-6'>
            <a href='#' className='text-lg font-semibold text-gray-900 mb-4 block'>
                {destination}
            </a>
            <a href='#'>
                <img src={`/packages/${imageUrl}`} alt='Travel Agency' className='mb-4 rounded-lg' />
            </a>
            <div className='grid grid-cols-2 gap-2'>
                <div className='col-span-2'>
                    <p className='text-gray-700'>
                        <strong>Package Name:</strong> {packageName}
                    </p>
                </div>
                <div className='col-span-2'>
                    <p className='text-gray-700'>
                        <strong>Agency:</strong> Agency Name
                    </p>
                </div>
                <div className='col-span-2'>
                    <p className='text-gray-700'>
                        <strong>Description:</strong> {description}
                    </p>
                </div>
                <div>
                    <p className='text-gray-700'>
                        <strong>Start Date:</strong> {startDate}
                    </p>
                </div>
                <div>
                    <p className='text-gray-700'>
                        <strong>End Date:</strong> {endDate}
                    </p>
                </div>
                <div>
                    <p className='text-gray-700'>
                        <strong>Duration:</strong> {duration}
                    </p>
                </div>
                <div className='col-span-2 mt-2'>
                    <p className='text-gray-700'>
                        <strong>Price:</strong> Rs {price}
                    </p>
                </div>

                {
                    showButton &&
                    (
                        <Link to={`/order-package/${id}`} className="bg-gray-900 text-white text-center py-2 px-4 rounded mt-4">
                            Order Package
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

const Package_item = () => {
    const allPackages = useSelector(state => state.package)
    return (
        <div className='container mx-auto mt-8 px-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                {
                    allPackages.map((item, i) => <Item key={i} props={item} showButton={true}/>)
                }
            </div>
        </div>
    );
};

export default Package_item;
