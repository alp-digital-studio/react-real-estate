function Header() {
    return (
        <header className="header">
            <a href="#" className="brand">Home<span>Space</span></a>

            <nav>
                <a href="#home">Home</a>
                <a href="#properties">Properties</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </nav>

            <a href="#contact" className="header-button">List Your Property</a>
        </header>
    );
}

export default Header;
