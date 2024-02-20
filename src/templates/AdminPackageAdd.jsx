import OtherInformation from '../components/OtherInformation';
import PageLayout from '../components/PageLayout';
import UploadImage from '../components/UploadImage';
import Destination from '../components/Destination.jsx';
import Description from '../components/Description.jsx';

const AdminPackageAdd = () => {
	return (
		<>	
			<PageLayout>
				<div className="container mx-auto mt-8 px-4">
					<div class="bg-white rounded-lg shadow-md p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<UploadImage />
							<Destination/>
							<Description/>
						</div>
						<OtherInformation/>
					</div>
				</div>
			</PageLayout>			
		</>
	);
}
export default AdminPackageAdd