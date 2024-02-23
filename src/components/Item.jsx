import React from "react";

const Item = (props) => {
    const { name, image, new_price } = props;
    return (
        <div class='bg-white rounded-lg shadow-md p-6'>
            <a href='#' class='text-lg font-semibold text-gray-900 mb-4 block'>
                {name}
            </a>
            <a href='#'>
                <img src={image} alt='Travel Agency' class='mb-4 rounded-lg' />
            </a>
            <div class='grid grid-cols-2 gap-2'>
                <div class='col-span-2'>
                    <p class='text-gray-700'>
                        <strong>Package Name:</strong> Package 2
                    </p>
                </div>
                <div class='col-span-2'>
                    <p class='text-gray-700'>
                        <strong>Destination:</strong> Destination Name
                    </p>
                </div>
                <div class='col-span-2'>
                    <p class='text-gray-700'>
                        <strong>Description:</strong> Description of Package 2
                        goes here.
                    </p>
                </div>
                <div>
                    <p class='text-gray-700'>
                        <strong>Start Date:</strong> January 1, 2024
                    </p>
                </div>
                <div>
                    <p class='text-gray-700'>
                        <strong>End Date:</strong> January 7, 2024
                    </p>
                </div>
                <div>
                    <p class='text-gray-700'>
                        <strong>Duration:</strong> 7 days
                    </p>
                </div>
                <div class='col-span-2 mt-2'>
                    <p class='text-gray-700'>
                        <strong>Price:</strong> Rs {new_price}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Item;
