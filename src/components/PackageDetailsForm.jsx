import UploadImage from '../components/UploadImage';

const Destination=()=>{
    return( 
        <div className="col-span-2">
            <label for="destination" class="form-label">Destination:  </label>
            <input type="text" id="destination" name="destination" class="form-input" required/>
        </div>
    );
};

const Description = () => {
    return(
        <div className="col-span-2">
            <label for="description" class="form-label">Description</label>
            <textarea id="description" name="description" rows="4" class="form-input" required></textarea>
        </div>
    );
};

const PackageDetails = () => {
	return (
		<>
			<div>
				<UploadImage />
				<Destination />
				<Description />
			</div>
		</>
	);
}
const PackageDetailsForm = () => {
	return (
		<>
			<div className="bg-white rounded-lg shadow-md p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
				<PackageDetails />
			</div>
		</>
	)
}
export default PackageDetailsForm