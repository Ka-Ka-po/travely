import { Link } from "react-router-dom"
function Header() {
    return (
        <>
            <header className='bg-gray-900 text-white py-4'>
                <h1 className='text-center'>Destination Travel Packages</h1>
            </header>
            <nav className='bg-gray-800 text-white py-2'>
                <Link to="/dashboard" className="mx-2">Dashboard</Link>
                <Link to="/agency-profile" className="mx-2">Agency Profile</Link>
                <Link to="/admin-package-add" className="mx-2">Add Package</Link>
            </nav>
        </>
    );
}

export default Header;
