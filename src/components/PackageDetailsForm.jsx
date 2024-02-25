import UploadImage from "../components/UploadImage";
import {useState} from "react"
import {v4 as uuidv4} from 'uuid'

import { addPackage } from '../redux-app/PackageSlice'
import { useSelector, useDispatch } from 'react-redux'

export const PackageDetails = ({packageState,setPackageState}) => {

    return (
        <>
            <div>
                <h2 class="text-2xl font-semibold mb-4">Package Details</h2>
                <div class="grid grid-cols-2 gap-4">
                    <div className="col-span-2 md:col-span-1">
                        <label htmlFor="image" className="form-label">Upload Image</label>
                        <div className="image-upload-wrapper">
                        <input type="file" id="image" name="image" accept="image/*" className="hidden"/>
                        <label htmlFor="image" className="image-upload-placeholder border border-gray-300 rounded-md cursor-pointer bg-gray-100 hover:bg-gray-200">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                            <path fillRule="evenodd" d="M10 3a7 7 0 100 14 7 7 0 000-14zM4 10a6 6 0 1112 0 6 6 0 01-12 0z" clipRule="evenodd"/>
                            </svg>
                            <span className="mt-2 text-gray-500">Click to Upload Image</span>
                        </label>
                        </div>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <label htmlFor="package_name" className="form-label">Package Name</label>
                        <input
                         value={packageState.packageName}
                         onChange={(e) => setPackageState({...packageState, packageName: e.target.value})}
                         type="text" id="package_name" name="package_name" className="form-input" required/>
                    </div>
                </div>
                <div className='col-span-2'>
                    <label htmlFor='destination' className='form-label'>
                        Destination:{" "}
                    </label>
                    <input
                        type='text'
                        id='destination'
                        name='destination'
                        className='form-input'
                        required
                        value={packageState.destination}
                        onChange={(e) => setPackageState({...packageState, destination: e.target.value})}
                    />
                </div>
                <div className='col-span-2'>
                    <label htmlFor='description' className='form-label'>
                        Description
                    </label>
                    <textarea
                        id='description'
                        name='description'
                        rows='4'
                        className='form-input'
                        value={packageState.description}
                        onChange={(e) => setPackageState({...packageState, description: e.target.value})}
                        required></textarea>
                </div>
            </div>
        </>
    );
};
const OtherInformation = ({packageState, setPackageState}) => {

    return (
        <div>
            <div>
                <h2 className='text-2xl font-semibold mb-4'>Other Information</h2>
                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <label htmlFor='duration' className='form-label'>
                            Duration (Days)
                        </label>
                        <input
                            type='number'
                            id='duration'
                            name='duration'
                            min='0'
                            className='form-input'
                            required
                            value={packageState.duration}
                            onChange={(e) => setPackageState({...packageState, duration: e.target.value})}
                        />
                    </div>
                    <div>
                        <label htmlFor='start_date' className='form-label'>
                            Start Date
                        </label>
                        <input
                            type='date'
                            id='start_date'
                            name='start_date'
                            className='form-input'
                            required
                            value={packageState.startDate}
                            onChange={(e) => setPackageState({...packageState, startDate: e.target.value})}
                        />
                    </div>
                    <div>
                        <label htmlFor='end_date' className='form-label'>
                            End Date
                        </label>
                        <input
                            type='date'
                            id='end_date'
                            name='end_date'
                            className='form-input'
                            required
                            value={packageState.endDate}
                            onChange={(e) => setPackageState({...packageState, endDate: e.target.value})}
                        />
                    </div>
                    <div>
                        <label htmlFor='price' className='form-label'>
                            Price ($)
                        </label>
                        <input
                            type='number'
                            id='price'
                            name='price'
                            min='0'
                            step='0.01'
                            className='form-input'
                            required
                            value={packageState.price}
                            onChange={(e) => setPackageState({...packageState, price: e.target.value})}
                        />
                    </div>
                    <div>
                        <label htmlFor='discount' className='form-label'>
                            Discount (%)
                        </label>
                        <input
                            type='number'
                            id='discount'
                            name='discount'
                            min='0'
                            max='100'
                            step='0.01'
                            className='form-input'
                            required
                            value={packageState.discount}
                            onChange={(e) => setPackageState({...packageState, discount: e.target.value})}
                        />
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    );
};
const PackageDetailsForm = () => {

    const dispatch = useDispatch();

    const [packageState, setPackageState] = useState({
        id: uuidv4(),
        packageName: '',
        destination: '',
        description: '',
        duration: '',
        startDate: '',
        endDate: '',
        price: 0,
        discount: 0,
    })
    console.log("packageState", packageState)
    const handleAddPackage = () => {
        console.log("Package Added: ", packageState)
    
        dispatch(addPackage([packageState]))
    }
    return (
        <>
            <div className='bg-white rounded-lg shadow-md p-6 grid grid-cols-1 md:grid-cols-2 gap-6'>
                <PackageDetails packageState={packageState} setPackageState={setPackageState}/>
                <OtherInformation packageState={packageState}  setPackageState={setPackageState} />
                <div></div>
                <div className='flex justify-end'>
                    <button
                        onClick={handleAddPackage}
                        type='submit'
                        className='bg-gray-900 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors duration-300'>
                        Add Package
                    </button>
                </div>
            </div>
        </>
    );
};
export default PackageDetailsForm;
