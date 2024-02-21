import TemplateCardContainer from "../components/TemplateCardContainer";
function LandingTemplate (){
    return(
        <>
        <div className='container mx-auto p-8'>
            <h1 className='text-3xl text-center font-bold mb-8'>
                Reference Templates
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                <TemplateCardContainer />
            </div>
        </div>
        {/* <!-- Preview Button --> */}
        <div className='my-8 flex justify-center'>
            <a
                href='/dashboard'
                className='my-8 bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'>
                Preview Application
            </a>
        </div>
    </>
    );
}
export default LandingTemplate;
