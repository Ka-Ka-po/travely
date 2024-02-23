function Header() {
    return (
        <>
            <header class='bg-gray-900 text-white py-4'>
                <h1 class='text-center'>Destination Travel Packages</h1>
            </header>
            <nav class='bg-gray-800 text-white py-2'>
                <a href='/dashboard' class='mx-2'>
                    Dashboard
                </a>
                <a href='/agency-profile' class='mx-2'>
                    Agency Profile
                </a>
                <a href='/admin-package-add' class='mx-2'>
                    Add Package
                </a>
                <a href='/order-package' class='mx-2'>
                    Order Package
                </a>
            </nav>
        </>
    );
}

export default Header;
