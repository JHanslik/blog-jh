const Header = ({ pageTitle }) => {
    return (
        <header className="h-[10%] flex justify-center py-3">
            <h1 className="text-3xl text-neutral-200">{pageTitle}</h1>
        </header>
    );
};

export default Header;
