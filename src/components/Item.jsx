import React from "react";

const Item = (props) => {
  return (
        <div class="bg-white rounded-lg shadow-md p-6">
            <div class="text-lg font-semibold text-gray-900 mb-4 block">
            <p>{props.name}</p>
            </div>
            <div>
            <img class="mb-4 rounded-lg" src={props.image} alt="" />
            </div>
            <p class="text-gray-700">New Price: ${props.new_price}</p>
            <p class="text-gray-700 mt-2 flex">Old Price:  $<h6 className="text-decoration-line: line-through">  {props.old_price}</h6></p>
            <button class="bg-gray-900 text-white py-2 px-4 rounded cursor-pointer mt-2 ">View Details</button>
        </div>
  );
};

export default Item;