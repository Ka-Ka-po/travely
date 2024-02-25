function Header() {
    return (
        <>
            <header className='bg-gray-900 text-white py-4'>
                <h1 className='text-center'>Destination Travel Packages</h1>
            </header>
            <nav className='bg-gray-800 text-white py-2'>
                <a href='/dashboard' className='mx-2'>
                    Dashboard
                </a>
                <a href='/agency-profile' className='mx-2'>
                    Agency Profile
                </a>
                <a href='/admin-package-add' className='mx-2'>
                    Add Package
                </a>
            </nav>
        </>
    );
}

export default Header;
