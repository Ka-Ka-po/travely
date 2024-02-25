import React from "react";
import { Item } from "../components/Package_item";
import BookingDetails from "../components/BookingDetails";
import PageLayout from "../components/PageLayout";
import all_packages from "../assets/all_packages";

const OrderPackage = () => {
    const item = all_packages[0];
    return (
        <PageLayout>
            <div className='container mx-auto mt-8 px-4'>
                <div className='bg-white rounded-lg shadow-md p-6 grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className='bg-gray-100 rounded-lg shadow-md p-6'>
                        <Item props={item} />
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
