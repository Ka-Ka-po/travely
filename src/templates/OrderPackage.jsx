import React from "react";
import { useParams } from "react-router-dom"
import { Item } from "../components/Package_item";
import BookingDetails from "../components/BookingDetails";
import PageLayout from "../components/PageLayout";
import all_packages from "../assets/all_packages";
import { useSelector } from "react-redux"

const OrderPackage = () => {
    const { packageId } = useParams();
    const packageItem = useSelector(state => state.package)
    const item = packageItem.find(item => item.id == packageId)

    // console.log("Product Ordered ID: ", packageId)
    console.log("Item: ", item)

    return (
        <PageLayout>
            <div className='container mx-auto mt-8 px-4'>
                <div className='bg-white rounded-lg shadow-md p-6 grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className='bg-gray-100 rounded-lg shadow-md p-6'>
                        <Item props={item} showButton={false}/>
                    </div>
                    <div className='bg-gray-100 rounded-lg shadow-md p-6'>
                        <BookingDetails />
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default OrderPackage;
